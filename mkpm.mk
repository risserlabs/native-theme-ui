# File: /mkpm.mk
# Project: multiverse
# File Created: 04-12-2021 02:19:00
# Author: Clay Risser <email@clayrisser.com>
# -----
# Last Modified: 13-06-2022 00:43:29
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

MKPM_PACKAGES := \
	docker=0.0.16 \
	dotenv=0.0.9 \
	envcache=0.0.2 \
	gnu=0.0.3 \
	mkchain=0.0.16 \
	yarn=0.0.1

MKPM_REPOS := \
	https://gitlab.com/risserlabs/community/mkpm-stable.git

############# MKPM BOOTSTRAP SCRIPT BEGIN #############
MKPM_BOOTSTRAP := https://risserlabs.gitlab.io/community/mkpm/bootstrap.mk
export PROJECT_ROOT := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
NULL := /dev/null
TRUE := true
ifneq ($(patsubst %.exe,%,$(SHELL)),$(SHELL))
	NULL = nul
	TRUE = type nul
endif
-include $(PROJECT_ROOT)/.mkpm/.bootstrap.mk
$(PROJECT_ROOT)/.mkpm/.bootstrap.mk:
	@mkdir $(@D) 2>$(NULL) || $(TRUE)
	@$(shell curl --version >$(NULL) 2>$(NULL) && \
			echo curl -Lo || \
			echo wget -O) \
		$@ $(MKPM_BOOTSTRAP) >$(NULL)
############## MKPM BOOTSTRAP SCRIPT END ##############
