export BABEL ?= $(call yarn_binary,babel)
export BABEL_NODE ?= $(call yarn_binary,babel-node)
export BUILD_STORYBOOK ?= $(call yarn_binary,build-storybook)
export CLOC ?= cloc
export CSPELL ?= $(call yarn_binary,cspell)
export ESLINT ?= $(call yarn_binary,eslint)
export EXPO ?= $(call yarn_binary,expo)
export EXPO_YARN_WORKSPACES ?= $(call yarn_binary,expo-yarn-workspaces)
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
