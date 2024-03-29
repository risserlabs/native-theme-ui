# File: /Makefile
# Project: native-theme-ui
# File Created: 04-12-2021 07:22:50
# Author: Clay Risser <email@clayrisser.com>
# -----
# Last Modified: 17-08-2022 14:46:49
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

MONOREPO := 1

include mkpm.mk
ifneq (,$(MKPM_READY))
include $(MKPM)/gnu
include $(MKPM)/envcache
include $(MKPM)/mkchain
include $(MKPM)/yarn
include shared.mk

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
	@$(BABEL) --env-name umd src -d lib --extensions '.js,.jsx,.ts,.tsx' --source-maps
	@$(BABEL) --env-name esm src -d esm --extensions '.js,.jsx,.ts,.tsx' --source-maps
	@$(TSC) -p tsconfig.build.json -d
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

.PHONY: inc
inc: ##
	@$(NPM) version patch --git=false $(NOFAIL)

.PHONY: publish +publish
publish: | ~build +publish ##
+publish:
	@$(NPM) publish --access=public

.PHONY: count
count: ## count lines of code in project
	@$(CLOC) $(shell $(GIT) ls-files | $(GREP) -vE "^\.yarn")

.PHONY: browserslist
browserslist:
	@$(BROWSERSLIST_BINARY)

INOTIFY_LIMIT ?= 999999
.PHONY: doctor
doctor: sudo ##
	@$(WATCHMAN) watch-del-all
	@$(SUDO) sh -c '$(ECHO) $(INOTIFY_LIMIT) > /proc/sys/fs/inotify/max_user_watches'
	@$(SUDO) sh -c '$(ECHO) $(INOTIFY_LIMIT) > /proc/sys/fs/inotify/max_queued_events'
	@$(SUDO) sh -c '$(ECHO) $(INOTIFY_LIMIT) > /proc/sys/fs/inotify/max_user_instances'
	@$(WATCHMAN) shutdown-server
	@$(SUDO) sysctl -p

.PHONY: $(patsubst %,%/%,$(WORKSPACE_NAMES))
$(patsubst %,%/%,$(WORKSPACE_NAMES)):
	@$(MAKE) -sC $(call map_workspace,$(@D)) $*

HELP = help
help: $(MKCHAIN_HELP)
	@$(call workspace_foreach_help,$(MKCHAIN_HELP),$(ARGS))

.PHONY: %
%:
	@$(MAKE) -s core/$@

CACHE_ENVS += \

-include $(call actions)

endif
