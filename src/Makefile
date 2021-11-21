include ../mkpm.mk
-include $(MKPM)/gnu
-include $(MKPM)/mkchain
ifneq (,$(MKPM_READY))

.DEFAULT_GOAL := build

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
#	-@$(call eslint_format,$?)
	-@$(call prettier,$?,$(ARGS))
	@$(call done,format)

ACTIONS += spellcheck~format
$(ACTION)/spellcheck: $(call git_deps,\.(md)$$)
	-@$(call cspell,$?,$(ARGS))
	@$(call done,spellcheck)

ACTIONS += lint~spellcheck
$(ACTION)/lint: $(call git_deps,\.([jt]sx?)$$)
	-@$(call eslint,$?,$(ARGS))
	@$(call done,lint)

ACTIONS += test~lint
$(ACTION)/test: $(call git_deps,\.([jt]sx?)$$)
	-@$(call jest,$?,$(ARGS))
	@$(call done,test)

ACTIONS += build@storybook_web~test
BUILD@STORYBOOK_WEB_TARGETS := storybook-static/index.html
storybook-static/index.html:
	@$(call reset,build@storybook_web)
$(ACTION)/build@storybook_web: $(call git_deps,\.([jt]sx?)$$)
	@$(BUILD_STORYBOOK) -c storybook
	@$(call done,build@storybook_web)

ACTIONS += build@storybook_android~test
$(ACTION)/build@storybook_android: $(call git_deps,\.([jt]sx?)$$)
	@$(EXPO) build:android
	@$(call done,build@storybook_android)

.PHONY: build
build: build@storybook_web build@storybook_expo

CACHE_ENVS += \

-include $(call actions)

endif
