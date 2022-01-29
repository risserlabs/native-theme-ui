# File: /Makefile
# Project: -
# File Created: 23-01-2022 02:18:40
# Author: Clay Risser
# -----
# Last Modified: 29-01-2022 09:41:14
# Modified By: Clay Risser
# -----
# Risser Labs LLC (c) Copyright 2021 - 2022
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

include ../mkpm.mk
ifneq (,$(MKPM_READY))
include $(MKPM)/gnu
include $(MKPM)/envcache
include $(MKPM)/mkchain
include $(MKPM)/yarn
include ../config.mk

ACTIONS += install
$(ACTION)/install: $(PROJECT_ROOT)/package.json package.json
ifneq (,$(SUBPROC))
	@$(MAKE) -C $(PROJECT_ROOT) \~install ARGS=$(ARGS)
else
	@$(YARN) workspaces focus $(ARGS)
endif
	@$(call done,install)

ACTIONS += format~install ##
$(ACTION)/format: $(call git_deps,\.((json)|(md)|([jt]sx?))$$)
	-@$(call prettier,$?,$(ARGS))
	@$(call done,format)

ACTIONS += spellcheck~format ##
$(ACTION)/spellcheck: $(call git_deps,\.(md)$$)
	-@$(call cspell,$?,$(ARGS))
	@$(call done,spellcheck)

ACTIONS += lint~spellcheck ##
$(ACTION)/lint: $(call git_deps,\.([jt]sx?)$$)
	-@$(call eslint,$?,$(ARGS))
	@$(call done,lint)

ACTIONS += test~lint ##
$(ACTION)/test: $(call git_deps,\.([jt]sx?)$$)
	-@$(call jest,$?,$(ARGS))
	@$(call done,test)

ACTIONS += build@storybook~test ##
BUILD@STORYBOOK_TARGETS := storybook-static/index.html
storybook-static/index.html:
	@$(call reset,build@storybook)
$(ACTION)/build@storybook: $(call git_deps,\.([jt]sx?)$$)
	@$(BUILD_STORYBOOK) -c storybook
	@$(call done,build@storybook)

ACTIONS += build@storybook-web~test ##
$(ACTION)/build@storybook-web: $(call git_deps,\.([jt]sx?)$$)
	@$(EXPO) build:web
	@$(call done,build@storybook-web)

ACTIONS += build@storybook-android~test ##
$(ACTION)/build@storybook-android: $(call git_deps,\.([jt]sx?)$$)
	@$(EXPO) build:android
	@$(call done,build@storybook-android)

ACTIONS += build@storybook-ios~test ##
$(ACTION)/build@storybook-ios: $(call git_deps,\.([jt]sx?)$$)
	@$(EXPO) build:ios
	@$(call done,build@storybook-ios)

.PHONY: start@storybook
start@storybook: ~install ##
	@$(STORYBOOK_SERVER) -c storybook -p 6006

.PHONY: start@storybook-native
start@storybook-native: ~install ##
	@$(STORYBOOK_NATIVE_SERVER) -c storybook

.PHONY: start@storybook-web
start@storybook-web: ~install ##
	@$(EXPO) start --web

.PHONY: start@storybook-android
start@storybook-android: ~install ##
	@$(EXPO) start --android

.PHONY: start@storybook-ios
start@storybook-ios: ~install ##
	@$(EXPO) start --ios

.PHONY: eject
eject: ~install ##
	@$(EXPO) eject

.PHONY: visual-regression
visual-regression: ~build@storybook ##
	@$(LOKI) --requireReference --diffingEngine gm --reactUri file:./storybook-static

.PHONY: postinstall
postinstall:
	@$(EXPO_YARN_WORKSPACES) postinstall

.PHONY: build
build: build@storybook build@storybook-web build@storybook-android build@storybook-ios ##

.PHONY: clean
clean: ##
	-@$(MKCACHE_CLEAN)
	-@$(JEST) --clearCache $(NOFAIL)
	-@$(WATCHMAN) watch-del-all $(NOFAIL)
	-@$(GIT) clean -fXd \
		$(MKPM_GIT_CLEAN_FLAGS) \
		$(YARN_GIT_CLEAN_FLAGS) \
		$(NOFAIL)

CACHE_ENVS += \

-include $(call actions)

endif
