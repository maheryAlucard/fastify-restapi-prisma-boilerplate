---
inject: true
to: app/Routes/Sockets/socketsRoutes.ts
after: import
skip_if: <%= h.changeCase.camel(name) %>Controller
---
import { soc_<%= h.changeCase.camel(name) %> } from '../../Controllers/sockets/soc<%= h.changeCase.camel(name) %>Controller';