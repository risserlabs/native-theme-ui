include ../mkpm.mk
-include $(MKPM)/gnu
-include $(MKPM)/mkchain
ifneq (,$(MKPM_READY))

CSPELL ?= $(PROJECT_ROOT)/node_modules/.bin/cspell
PRETTIER ?= $(PROJECT_ROOT)/node_modules/.bin/prettier

.DEFAULT_GOAL := build

ACTIONS += install
$(ACTION)/install: $(PROJECT_ROOT)/package.json package.json
	@$(MAKE) -C $(PROJECT_ROOT) \~install ARGS=$(ARGS)
	@$(call done,install)

ACTIONS += format~install
$(ACTION)/format: $(call git_deps,\.((json)|(md)|([jt]sx?))$$)
#	@for i in $?; do echo $$i | \
#		$(GREP) -E "\.[jt]sx?$$"; done | xargs $(ESLINT) --fix >$(NULL) || $(TRUE)
	@$(PRETTIER) --write $?
	@$(call done,format)

ACTIONS += spellcheck~format
$(ACTION)/spellcheck: $(call git_deps,\.(md)$$)
	@$(ECHO) '{"language":"en","version":"0.1","words":$(shell $(CAT) $(PROJECT_ROOT)/.vscode/settings.json | $(SED) 's|^\s*//.*||g' | $(JQ) ".[\"cSpell.words\"]")}' > \
		$(MKPM_TMP)/cspellrc.json
	-@[ '$?' = '' ] && echo 'CSpell: Files checked: 0, Issues found: 0 in 0 files' || $(CSPELL) --config $(MKPM_TMP)/cspellrc.json $?
	@$(call done,spellcheck)

CACHE_ENVS += \

-include $(call actions)

endif
