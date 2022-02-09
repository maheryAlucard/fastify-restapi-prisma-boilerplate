---
inject: true
to: "<%= method === 'PUT' ? `app/Controllers/${h.changeCase.pascal(file)}sController.ts` : null %>"
after: <%= h.changeCase.lower(file) %>Service
skip_if: <%= h.changeCase.camel(name) %>
---

export const <%= h.changeCase.camel(name) %> = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const body = req.body as any;
  const item = await <%= h.changeCase.lower(file) %>Service._<%= h.changeCase.camel(name) %>();
  return (item);
});
