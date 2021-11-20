NPM ?= node $(PROJECT_ROOT)/.yarn/releases/yarn-3.1.0.cjs

BASE64_NOWRAP ?= $(call ternary,openssl version,openssl base64 -A,base64 -w0)

define b64_encode_each
$(shell for i in $1; do \
	$(ECHO) $$i | $(BASE64_NOWRAP) && echo; \
done)
endef

define b64_decode_each
$(shell for i in $1; do \
	$(ECHO) $$i | $(BASE64_NOWRAP) -d; \
done)
endef

define B64_WORKSPACES
$(call b64_encode_each,$(shell $(NPM) workspaces list | $(SED) '/YN0000: \..*/d' | $(SED) '/YN0000: Done in.*/d' | $(CUT) -d' ' -f3-))
endef

define WORKSPACES
$(call b64_decode_each,$(B64_WORKSPACES))
endef

define b64_workspace_paths
$(shell for i in $(call B64_WORKSPACES); do \
	$(ECHO) $(PROJECT_ROOT)/$$(echo $$i | $(BASE64_NOWRAP) -d)$$([ '$1' = '' ] || $(ECHO) '/$1') | \
	$(BASE64_NOWRAP) && echo; \
done)
endef

define workspace_paths
$(shell for w in $(b64_workspace_paths); do \
	$(ECHO) $$w | $(BASE64_NOWRAP) -d; \
done)
endef

define workspace_exec_foreach
for w in $(call b64_workspace_paths); do \
	$(CD) "$$($(ECHO) $$w | $(BASE64_NOWRAP) -d)" && $1; \
done
endef

define workspace_foreach
$(call workspace_exec_foreach,$(MAKE) -s $1 || true)
endef
