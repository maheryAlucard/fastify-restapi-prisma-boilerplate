---
inject: true
to: app/Routes/index.ts
after: registerRoutes
skip_if: register<%= h.changeCase.pascal(name) %>sRoutes(fastify);
---
    register<%= h.changeCase.pascal(name) %>sRoutes(fastify);
    registerProtected<%= h.changeCase.pascal(name) %>sRoutes(fastify);