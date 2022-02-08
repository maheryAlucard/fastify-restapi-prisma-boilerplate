---
inject: true
to: app/Global/config.ts
after: routeBase
skip_if: <%= h.changeCase.lower(name) %>
---
    _<%= h.changeCase.lower(name) %>: '<%= h.changeCase.lower(name) %>',