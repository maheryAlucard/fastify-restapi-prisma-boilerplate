---
inject: true
to: "<%= method === 'PUT' ? `app/Routes/${h.changeCase.pascal(file)}sRoutes.ts` : null %>"
after: registerProtected<%= h.changeCase.pascal(file) %>sRoutes
skip_if: <%= h.changeCase.camel(name) %>
---
  fastify.put(`${apiPrefix}/${routeBase._<%= h.changeCase.lower(name) %>}`, { preHandler: [checkToken(fastify)] }, <%= h.changeCase.lower(file) %>Controller.<%= h.changeCase.camel(name) %>(fastify));