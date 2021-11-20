include mkpm.mk
-include $(MKPM)/gnu
-include $(MKPM)/mkchain
ifneq (,$(MKPM_READY))

.DEFAULT_GOAL := install

ACTIONS += install
$(ACTION)/install: $(PROJECT_ROOT)/package.json $(call workspace_paths,package.json)
	@$(NPM) install $(ARGS)
	@$(call done,install)

ACTIONS += format
$(ACTION)/format: $(call git_deps,\.((json)|(md)|([jt]sx?))$$)
	@$(call workspace_foreach,format)
	@$(call done,format)

ACTIONS += spellcheck
$(ACTION)/spellcheck: $(call git_deps,\.(md)$$)
	@$(call workspace_foreach,spellcheck)
	@$(call done,spellcheck)

CACHE_ENVS += \

-include $(call actions)

endif
