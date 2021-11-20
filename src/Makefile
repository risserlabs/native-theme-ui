include ../mkpm.mk
-include $(MKPM)/gnu
-include $(MKPM)/mkchain
ifneq (,$(MKPM_READY))

CSPELL ?= $(PROJECT_ROOT)/node_modules/.bin/cspell
ESLINT ?= $(PROJECT_ROOT)/node_modules/.bin/eslint
PRETTIER ?= $(PROJECT_ROOT)/node_modules/.bin/prettier

.DEFAULT_GOAL := lint

ACTIONS += install
$(ACTION)/install: $(PROJECT_ROOT)/package.json package.json
ifneq (,$(SUBPROC))
	@$(MAKE) -C $(PROJECT_ROOT) \~install ARGS=$(ARGS)
else
	@$(YARN) workspaces focus $(ARGS)
endif
	@$(call done,install)

ACTIONS += format~install
$(ACTION)/format: $(call git_deps,\.((json)|(md)|([jt]sx?))$$)
#	@for i in $?; do echo $$i | \
#		$(GREP) -E "\.[jt]sx?$$"; done | xargs $(ESLINT) --fix >$(NULL) || $(TRUE)
	@$(PRETTIER) --write $(ARGS) $?
	@$(call done,format)

ACTIONS += spellcheck~format
$(ACTION)/spellcheck: $(call git_deps,\.(md)$$)
	@$(ECHO) '{"language":"en","version":"0.1","words":$(shell $(CAT) $(PROJECT_ROOT)/.vscode/settings.json | $(SED) 's|^\s*//.*||g' | $(JQ) ".[\"cSpell.words\"]")}' > \
		$(MKPM_TMP)/cspellrc.json
	-@[ '$?' = '' ] && echo 'CSpell: Files checked: 0, Issues found: 0 in 0 files' || $(CSPELL) --config $(MKPM_TMP)/cspellrc.json $(ARGS) $?
	@$(call done,spellcheck)

ACTIONS += lint~spellcheck
$(ACTION)/lint: $(call git_deps,\.([jt]sx?)$$)
	-@$(ESLINT) -f json -o $(MKPM_TMP)/eslintReport.json $? $(NOFAIL)
	-@$(ESLINT) $(ARGS) $?
	@$(call done,lint)

CACHE_ENVS += \

-include $(call actions)

endif
