YARN ?= node $(PROJECT_ROOT)/.yarn/releases/yarn-3.1.0.cjs
NPM ?= $(YARN)

export BASE64_NOWRAP ?= $(call ternary,openssl version,openssl base64 -A,base64 -w0)

define yarn_binary
$(call ternary,$(WHICH) $(PROJECT_ROOT)/node_modules/.bin/$1,$(PROJECT_ROOT)/node_modules/.bin/$1,$(CURDIR)/node_modules/.bin/$1)
endef

define b64_encode_each
$(shell for i in $1; do \
	$(ECHO) $$i | $(BASE64_NOWRAP) && echo; \
done)
endef

define b64_decode_each
$(shell for i in $1; do \
	$(ECHO) $$i | $(BASE64_NOWRAP) -d; \
done)
endef

MONOREPO ?= 0

ifneq (0,$(MONOREPO))
ifeq (,$(CALCULATED_WORKSPACES))
ifneq (,$(MKPM_BOOTSTRAPPED))
$(info calculating monorepo workspaces ⌛)
define B64_WORKSPACES
$(call b64_encode_each,$(shell $(NPM) workspaces list | $(SED) '/YN0000: \..*/d' | $(SED) '/YN0000: Done in.*/d' | $(CUT) -d' ' -f3-))
endef
export B64_WORKSPACES

define WORKSPACES
$(call b64_decode_each,$(B64_WORKSPACES))
endef
export WORKSPACES

define WORKSPACE_NAMES
$(shell for w in $(WORKSPACES); do \
	$(ECHO) $$w | $(GREP) -oE '[^\/]+$$'; \
done)
endef
export WORKSPACE_NAMES

export CALCULATED_WORKSPACES := 1
endif
endif
endif

ifeq (,$(WORKSPACES))
	MONOREPO = 0
else
	MONOREPO = 1
endif

define b64_workspace_paths
$(shell for i in $(B64_WORKSPACES); do \
	$(ECHO) $(PROJECT_ROOT)/$$(echo $$i | $(BASE64_NOWRAP) -d)$$([ '$1' = '' ] || $(ECHO) '/$1') | \
	$(BASE64_NOWRAP) && echo; \
done)
endef

define workspace_paths
$(shell for w in $(call b64_workspace_paths,$1); do \
	$(ECHO) $$w | $(BASE64_NOWRAP) -d; \
done)
endef

define map_workspace
$(shell for w in $(WORKSPACES); do \
	if [ "$$($(ECHO) $$w | $(GREP) -oE '[^\/]+$$')" = "$1" ]; then \
		$(ECHO) $$w; \
	fi \
done)
endef

define workspace_exec_foreach
for w in $(call b64_workspace_paths); do \
	$(CD) "$$($(ECHO) $$w | $(BASE64_NOWRAP) -d)" && $1; \
done
endef

define workspace_foreach
$(call workspace_exec_foreach,$(MAKE) -s $1 ARGS=$2 || $(TRUE))
endef

define workspace_foreach_help
for w in $(call b64_workspace_paths); do \
	$(EXPORT) WORKSPACE=$$($(ECHO) $$w | $(BASE64_NOWRAP) -d) && \
		$(MAKE) -sC $$WORKSPACE $$([ "$1" = "" ] && echo $(HELP) || echo $1) ARGS=$2 \
		HELP_PREFIX="$$($(ECHO) $$WORKSPACE | $(GREP) -oE '[^\/]+$$')/" 2>$(NULL) || \
		$(TRUE); \
done
endef

define shell_arr_to_json_arr
$(shell (for i in $1; do echo $$i; done) | jq -R . | jq -s .)
endef

export CSPELLRC := $(MKPM_TMP)/cspellrc.json
define cspell
$(ECHO) '{"language":"en","version":"0.1","words":$(shell \
	$(CAT) $(PROJECT_ROOT)/.vscode/settings.json | \
	$(SED) 's|^\s*//.*||g' | \
	$(JQ) ".[\"cSpell.words\"]")}' > $(CSPELLRC) && \
[ '$?' = '' ] && \
	$(ECHO) 'CSpell: Files checked: 0, Issues found: 0 in 0 files' || \
	$(CSPELL) --config $(MKPM_TMP)/cspellrc.json $2 $1
endef

define prettier
$(PRETTIER) --write $2 $1
endef

define eslint_format
(for i in $1; do echo $$i | \
	$(GREP) -E "\.[jt]sx?$$"; \
done) | $(XARGS) $(ESLINT) $2 --fix >$(NULL) || $(TRUE)
endef

export ESLINT_REPORT := $(MKPM_TMP)/eslintReport.json
define eslint
$(ESLINT) -f json -o $(ESLINT_REPORT) $1 $(NOFAIL) && \
$(ESLINT) $2 $1
endef

export JEST_TEST_RESULTS := $(MKPM_TMP)/jestTestResults.json
export COVERAGE_DIRECTORY := $(MKPM_TMP)/coverage
define jest
$(JEST) --pass-with-no-tests --json --outputFile=$(JEST_TEST_RESULTS) --coverage \
		--coverageDirectory=$(COVERAGE_DIRECTORY) --testResultsProcessor=jest-sonar-reporter \
		--collectCoverageFrom='$(call shell_arr_to_json_arr,$1)' --findRelatedTests $1 $2
endef

define YARN_GIT_CLEAN_FLAGS
$(call git_clean_flags,node_modules) \
	$(call git_clean_flags,.yarn) \
	-e $(BANG)/package-lock.json \
	-e $(BANG)/pnpm-lock.yaml \
	-e $(BANG)/yarn.lock
endef

CACHE_ENVS += \
	B64_WORKSPACES \
	BASE64_NOWRAP \
	MONOREPO \
	WORKSPACES \
	CALCULATED_WORKSPACES \
	WORKSPACE_NAMES
