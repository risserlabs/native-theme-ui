BABEL ?= $(call yarn_binary,babel)
BABEL_NODE ?= $(call yarn_binary,babel-node)
BUILD_STORYBOOK ?= $(call yarn_binary,build-storybook)
CSPELL ?= $(call yarn_binary,cspell)
ESLINT ?= $(call yarn_binary,eslint)
EXPO ?= $(call yarn_binary,expo)
EXPO_YARN_WORKSPACES ?= $(call yarn_binary,expo-yarn-workspaces)
JEST ?= $(call yarn_binary,jest)
LOKI ?= $(call yarn_binary,loki)
PRETTIER ?= $(call yarn_binary,prettier)
TSC ?= $(call yarn_binary,tsc)
WATCHMAN ?= watchman
YARN ?= node $(PROJECT_ROOT)/.yarn/releases/yarn-3.1.0.cjs
NPM ?= $(YARN)
STORYBOOK_NATIVE_SERVER ?= node $(call ternary,$(TEST) -f \
	$(PROJECT_ROOT)/node_modules/@storybook/react-native-server/bin/index.js,$(PROJECT_ROOT)/node_modules/@storybook/react-native-server/bin/index.js,$(CURDIR)/node_modules/@storybook/react-native-server/bin/index.js) 
STORYBOOK_SERVER ?= node $(call ternary,$(TEST) -f \
	$(PROJECT_ROOT)/node_modules/@storybook/react/bin/index.js,$(PROJECT_ROOT)/node_modules/@storybook/react/bin/index.js,$(CURDIR)/node_modules/@storybook/react/bin/index.js) 

BASE64_NOWRAP ?= $(call ternary,openssl version,openssl base64 -A,base64 -w0)

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

define B64_WORKSPACES
$(call b64_encode_each,$(shell $(NPM) workspaces list | $(SED) '/YN0000: \..*/d' | $(SED) '/YN0000: Done in.*/d' | $(CUT) -d' ' -f3-))
endef

define WORKSPACES
$(call b64_decode_each,$(B64_WORKSPACES))
endef

define b64_workspace_paths
$(shell for i in $(call B64_WORKSPACES); do \
	$(ECHO) $(PROJECT_ROOT)/$$(echo $$i | $(BASE64_NOWRAP) -d)$$([ '$1' = '' ] || $(ECHO) '/$1') | \
	$(BASE64_NOWRAP) && echo; \
done)
endef

define workspace_paths
$(shell for w in $(b64_workspace_paths); do \
	$(ECHO) $$w | $(BASE64_NOWRAP) -d; \
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
