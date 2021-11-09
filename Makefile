# File: /Makefile
# Project: multiverse-example
# File Created: 25-09-2021 18:31:26
# Author: Clay Risser
# -----
# Last Modified: 28-10-2021 02:49:10
# Modified By: Jam Risser
# -----
# BitSpur Inc (c) Copyright 2021
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

NPM ?= yarn

include mkpm.mk
ifneq (,$(MKPM))
-include $(MKPM)/gnu
ifneq (,$(GNU_READY))
-include $(MKPM)/mkchain

.DEFAULT_GOAL := build

VERSION := $(shell $(CAT) package.json | jq -r '.version')
PACKAGE := pass-$(VERSION).vsix

NPM ?= $(call ternary,pnpm --version,pnpm,$(call ternary,yarn --version,yarn,npm))
BABEL ?= node_modules/.bin/babel
CLOC ?= cloc
CSPELL ?= node_modules/.bin/cspell
ESLINT ?= node_modules/.bin/eslint
JEST ?= node_modules/.bin/jest
LOCKFILE_LINT ?= node_modules/.bin/lockfile-lint
MAJESTIC ?= node_modules/.bin/majestic
NEXT ?= node_modules/.bin/next
PRETTIER ?= node_modules/.bin/prettier
TMP_DIR ?= node_modules/.tmp
TSC ?= node_modules/.bin/tsc
VSCE ?= node_modules/.bin/vsce

COLLECT_COVERAGE_FROM := ["src/**/*.{js,jsx,ts,tsx}"]

.PHONY: all
all: build

ACTIONS += install
$(ACTION)/install: package.json
	@$(NPM) install
	@$(call done,install)

ACTIONS += format~install
$(ACTION)/format: $(call git_deps,\.((json)|(ya?ml)|(md)|([jt]sx?))$$)
#	@for i in $^; do echo $$i | \
#		grep -E "\.[jt]sx?$$"; done | xargs $(ESLINT) --fix >/dev/null ||true
	@$(PRETTIER) --write $^
	@$(call done,format)

ACTIONS += spellcheck~format
$(ACTION)/spellcheck: $(call git_deps,\.(md)$$)
	@$(ECHO) '{"language":"en","version":"0.1","words":$(shell cat .vscode/settings.json | $(SED) 's|^\s*//.*||g' | jq ".[\"cSpell.words\"]")}' > \
		$(MKPM_TMP)/cspellrc.json
	-@$(CSPELL) --config $(MKPM_TMP)/cspellrc.json $?
	@$(call done,spellcheck)

ACTIONS += lint~spellcheck
$(ACTION)/lint: $(call git_deps,\.([jt]sx?)$$)
#	-@$(LOCKFILE_LINT) --type npm --path package-lock.json --validate-https
	-@$(ESLINT) -f json -o node_modules/.tmp/eslintReport.json $? $(NOFAIL)
	-@$(ESLINT) $^
	@$(call done,lint)

ACTIONS += test~lint
$(ACTION)/test: $(call git_deps,\.([jt]sx?)$$)
	-@$(JEST) --pass-with-no-tests --json --outputFile=node_modules/.tmp/jestTestResults.json --coverage \
		--coverageDirectory=node_modules/.tmp/coverage --testResultsProcessor=jest-sonar-reporter \
		--collectCoverageFrom='$(COLLECT_COVERAGE_FROM)' --findRelatedTests $?
	@$(call done,test)

ACTIONS += build~test
BUILD_TARGET := dist/extension.js
dist/extension.js:
	@$(MAKE) -s _build
	@$(RM) -rf $(ACTION)/build $(NOFAIL)
$(ACTION)/build: $(call git_deps,\.([jt]sx?)$$)
	@$(NEXT) build $(ARGS)
	@$(NEXT) export -o dist
	@$(call done,build)

ACTIONS += package~build
PACKAGE_TARGET := $(PACKAGE)
$(PACKAGE):
	@$(MAKE) -s _package
	@rm -rf $(ACTION)/package $(NOFAIL)
$(ACTION)/package: $(call git_deps,\.([jt]sx?)$$)
	@$(VSCE) package
	@$(call done,package)

ACTIONS += publish~package
$(ACTION)/publish: $(call git_deps,\.([jt]sx?)$$)
	@$(VSCE) publish
	@$(call done,publish)

.PHONY: prepare
prepare: ;

.PHONY: upgrade
upgrade:
	@$(NPM) upgrade --latest

.PHONY: inc
inc:
	@npm version patch --git=false $(NOFAIL)

.PHONY: count
count:
	@$(CLOC) $(shell $(GIT) ls-files)

.PHONY: pack
pack: build
	@$(NPM) pack

.PHONY: coverage
coverage:
	@$(JEST) --coverage --collectCoverageFrom='$(COLLECT_COVERAGE_FROM)' $(ARGS)

.PHONY: test-ui
test-ui: ~lint
	@$(MAJESTIC) $(ARGS)

.PHONY: test-watch
test-watch: ~lint
	@$(JEST) --watch $(ARGS)

.PHONY: start
start: ~format
	@$(NEXT) dev $(ARGS)

.PHONY: list
list:
	@bash ./scripts/message.sh ./scripts/list.json | browserpass

.PHONY: clean
clean:
	-@$(MKCACHE_CLEAN)
	-@$(JEST) --clearCache $(NOFAIL)
	-@$(GIT) clean -fXd \
		$(MKPM_GIT_CLEAN_FLAGS) \
		$(call git_clean_flags,node_modules) \
		-e $(BANG)/package-lock.json \
		-e $(BANG)/pnpm-lock.yaml \
		-e $(BANG)/yarn.lock $(NOFAIL)

.PHONY: purge
purge: clean
	-@$(GIT) clean -fXd

CACHE_ENVS += \
	NPM

-include $(call actions)

endif
endif
