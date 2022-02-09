---
inject: true
to: app/Routes/index.ts
after: FastifyInstance
skip_if: from './<%= h.changeCase.lower(name) %>Routes';
---
import { register<%= h.changeCase.pascal(name) %>sRoutes, registerProtected<%= h.changeCase.pascal(name) %>sRoutes } from './<%= h.changeCase.pascal(name) %>sRoutes';