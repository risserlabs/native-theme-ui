# File: /Makefile
# Project: @native-theme-ui/core
# File Created: 30-06-2022 08:16:45
# Author: Clay Risser
# -----
# Last Modified: 11-08-2022 10:52:21
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

include ../../mkpm.mk
ifneq (,$(MKPM_READY))
include $(MKPM)/gnu
include $(MKPM)/envcache
include $(MKPM)/mkchain
include $(MKPM)/yarn
include ../../shared.mk

VR_DIFFING_ENGINE ?= pixelmatch # pixelmatch looks-same gm

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

ACTIONS += build~test ##
BUILD_TARGET := lib/index.js
lib/index.js:
	@$(call reset,build)
$(ACTION)/build: $(call git_deps,\.([jt]sx?)$$)
	@$(BABEL) --env-name umd src -d lib --extensions '.js,.jsx,.ts,.tsx' --source-maps
	@$(ECHO) '{"type": "commonjs"}' > lib/package.json
	@$(CP) src/modulesToTranspile.json lib
	@$(BABEL) --env-name esm src -d esm --extensions '.js,.jsx,.ts,.tsx' --source-maps
	@$(ECHO) '{"type": "module"}' > esm/package.json
	@$(TSC) -p tsconfig.build.json -d
	@$(call done,build)

ACTIONS += prepare@storybook-ondevice~install ##
$(ACTION)/prepare@storybook-ondevice: $(call git_deps,\.([jt]sx?)$$)
	@$(SB_RN_GET_STORIES) --config-path $(CURDIR)/storybook/ondevice
	@$(call done,prepare@storybook-ondevice)

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

.PHONY: start@storybook +start@storybook
start@storybook: | ~install +start@storybook ##
+start@storybook:
	@$(STORYBOOK_SERVER) --no-version-updates -c storybook -p 6006

.PHONY: start@storybook-native +start@storybook-native
start@storybook-native: | ~install +start@storybook-native ##
+start@storybook-native:
	@$(STORYBOOK_NATIVE_SERVER) -c storybook

.PHONY: start@storybook-web +start@storybook-web
start@storybook-web: | ~prepare@storybook-ondevice +start@storybook-web ##
+start@storybook-web:
	@$(EXPO) start -c --web $(ARGS)

.PHONY: start@storybook-android +start@storybook-android
start@storybook-android: | ~install +start@storybook-android ##
+start@storybook-android:
	@$(EXPO) start -c --android $(ARGS)

.PHONY: start@storybook-ios +start@storybook-ios
start@storybook-ios: | ~install +start@storybook-ios ##
+start@storybook-ios:
	@$(EXPO) start -c --ios $(ARGS)

.PHONY: eject +eject
eject: | ~install +eject ##
+eject:
	@$(EXPO) eject

.PHONY: vr-update
vr-update: ~build@storybook ##
	@$(LOKI) \
		--requireReference \
		--diffingEngine $(VR_DIFFING_ENGINE) \
		--reactUri file:./storybook-static \
		--chromeFlags="--headless --disable-gpu --hide-scrollbars --no-sandbox" \
		update

.PHONY: vr-test
vr-test: ~build@storybook ##
	@$(LOKI) \
		--requireReference \
		--diffingEngine $(VR_DIFFING_ENGINE) \
		--reactUri file:./storybook-static \
		--chromeFlags="--headless --disable-gpu --hide-scrollbars --no-sandbox" \
		test

.PHONY: vr-approve
vr-approve: ##
	@$(LOKI) \
		--requireReference \
		--diffingEngine $(VR_DIFFING_ENGINE) \
		--reactUri file:./storybook-static \
		--chromeFlags="--headless --disable-gpu --hide-scrollbars --no-sandbox" \
		approve

.PHONY: prepare
prepare:
	@$(EXPO_YARN_WORKSPACES) postinstall

.PHONY: publish +publish
publish: | ~build +publish ##
+publish:
	@$(NPM) publish --access=public

.PHONY: inc
inc: ##
	@$(NPM) version patch --git=false $(NOFAIL)

.PHONY: browserslist
browserslist:
	@$(BROWSERSLIST_BINARY)

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
