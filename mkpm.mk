MKPM_PACKAGES := \
	docker=0.0.3 \
	gnu=0.0.2 \
	mkchain=0.0.2

MKPM_REPOS := \
	https://gitlab.com/bitspur/community/mkpm-stable.git

############# MKPM BOOTSTRAP SCRIPT BEGIN #############
MKPM_BOOTSTRAP := https://bitspur.gitlab.io/community/mkpm/bootstrap.mk
NULL := /dev/null
TRUE := true
ifeq ($(OS),Windows_NT)
	NULL = nul
	TRUE = type nul
endif
-include .mkpm/.bootstrap.mk
.mkpm/.bootstrap.mk:
	@mkdir .mkpm 2>$(NULL) || $(TRUE)
	@cd .mkpm && \
		$(shell curl --version >$(NULL) 2>$(NULL) && \
			echo curl -L -o || \
			echo wget --content-on-error -O) \
		.bootstrap.mk $(MKPM_BOOTSTRAP) >$(NULL)
############## MKPM BOOTSTRAP SCRIPT END ##############

-include $(PROJECT_ROOT)/yarn.mk
