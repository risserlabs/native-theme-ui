# File: /shared.mk
# Project: native-theme-ui
# File Created: 23-01-2022 02:18:40
# Author: Clay Risser
# -----
# Last Modified: 30-06-2022 08:17:28
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

export BABEL ?= $(call yarn_binary,babel)
export BABEL_NODE ?= $(call yarn_binary,babel-node)
export BUILD_STORYBOOK ?= $(call yarn_binary,build-storybook)
export CLOC ?= cloc
export CSPELL ?= $(call yarn_binary,cspell)
export ESLINT ?= $(call yarn_binary,eslint)
export EXPO ?= $(call yarn_binary,expo)
export EXPO_YARN_WORKSPACES ?= $(call yarn_binary,expo-yarn-workspaces)
export GM ?= command gm
export JEST ?= $(call yarn_binary,jest)
export LOKI ?= $(call yarn_binary,loki)
export PRETTIER ?= $(call yarn_binary,prettier)
export TSC ?= $(call yarn_binary,tsc)
export WATCHMAN ?= watchman
export STORYBOOK_NATIVE_SERVER ?= node $(call ternary,$(TEST) -f \
	$(PROJECT_ROOT)/node_modules/@storybook/react-native-server/bin/index.js,$(PROJECT_ROOT)/node_modules/@storybook/react-native-server/bin/index.js,$(CURDIR)/node_modules/@storybook/react-native-server/bin/index.js) 
export STORYBOOK_SERVER ?= node $(call ternary,$(TEST) -f \
	$(PROJECT_ROOT)/node_modules/@storybook/react/bin/index.js,$(PROJECT_ROOT)/node_modules/@storybook/react/bin/index.js,$(CURDIR)/node_modules/@storybook/react/bin/index.js) 

CACHE_ENVS += \
	BABEL \
	BABEL_NODE \
	BUILD_STORYBOOK \
	CLOC \
	CSPELL \
	ESLINT \
	EXPO \
	EXPO_YARN_WORKSPACES \
	JEST \
	LOKI \
	PRETTIER \
	STORYBOOK_NATIVE_SERVER \
	STORYBOOK_SERVER \
	TSC \
	WATCHMAN

include $(MKPM_TMP)/requires
$(MKPM_TMP)/requires:
ifneq ($(call ternary,command jq --version,1),1)
	@$(call requires_pkg,jq,https://git-scm.com)
endif
ifneq ($(call ternary,command gm -version,1),1)
	@$(call requires_pkg,graphicsmagick,http://www.graphicsmagick.org)
endif
	@$(TOUCH) $(MKPM_TMP)/requires
