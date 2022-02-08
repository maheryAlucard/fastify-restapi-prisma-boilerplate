---
inject: true
to: app/Routes/Sockets/socketsRoutes.ts
after: SOCKET_ACTIONS
skip_if: soc_<%= h.changeCase.camel(name) %>,
---
    <%= h.changeCase.camel(name) %>: soc_<%= h.changeCase.camel(name) %>,