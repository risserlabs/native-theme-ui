include mkpm.mk
-include $(MKPM)/gnu
-include $(MKPM)/mkchain
ifneq (,$(MKPM_READY))

CLOC ?= cloc

ACTIONS += install ##
$(ACTION)/install: $(PROJECT_ROOT)/package.json $(call workspace_paths,package.json)
	@$(YARN) install $(ARGS)
	@$(call done,install)

ACTIONS += format ##
$(ACTION)/format: $(call git_deps,\.((json)|(md)|([jt]sx?))$$)
	@$(call workspace_foreach,format,$(ARGS))
	@$(call done,format)

ACTIONS += spellcheck ##
$(ACTION)/spellcheck: $(call git_deps,\.(md)$$)
	@$(call workspace_foreach,spellcheck,$(ARGS))
	@$(call done,spellcheck)

ACTIONS += lint ##
$(ACTION)/lint: $(call git_deps,\.([jt]sx?)$$)
	@$(call workspace_foreach,lint,$(ARGS))
	@$(call done,lint)

ACTIONS += test ##
$(ACTION)/test: $(call git_deps,\.([jt]sx?)$$)
	@$(call workspace_foreach,test,$(ARGS))
	@$(call done,test)

ACTIONS += build ##
$(ACTION)/build: $(call git_deps,\.([jt]sx?)$$)
	@$(call workspace_foreach,build,$(ARGS))
	@$(call done,build)

.PHONY: upgrade
upgrade: ##
	@$(YARN) upgrade-interactive

.PHONY: clean
clean: ##
	@$(call workspace_foreach,clean,$(ARGS))
	-@$(MKCACHE_CLEAN)
	-@$(JEST) --clearCache $(NOFAIL)
	-@$(WATCHMAN) watch-del-all $(NOFAIL)
	-@$(GIT) clean -fXd \
		$(MKPM_GIT_CLEAN_FLAGS) \
		$(YARN_GIT_CLEAN_FLAGS) \
		$(NOFAIL)

.PHONY: purge
purge: clean ##
	@$(GIT) clean -fXd

.PHONY: count
count: ## count lines of code in project
	@LC_ALL=C $(CLOC) $(shell $(GIT) ls-files | $(GREP) -vE "^\.yarn")

PLATFORMS := $(shell $(LS) platforms)
.PHONY: $(patsubst %,%/%,$(PLATFORMS))
$(patsubst %,%/%,$(PLATFORMS)):
	@$(MAKE) -sC platforms/$(@D) $*

.PHONY: src/%
src/%:
	@$(MAKE) -sC $(@D) $*

help: $(MKCHAIN_HELP)
	@$(MAKE) -sC src help HELP_PREFIX=src/
	@for i in $(PLATFORMS); do \
		$(MAKE) -sC platforms/$$i help HELP_PREFIX=$$i/ 2>$(NULL) || $(TRUE); \
	done

CACHE_ENVS += \

-include $(call actions)

endif
