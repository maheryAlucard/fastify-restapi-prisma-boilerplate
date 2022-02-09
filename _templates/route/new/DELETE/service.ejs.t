---
inject: true
to: "<%= method === 'DELETE' ? `app/Services/${h.changeCase.pascal(file)}sServices.ts` : null %>"
after: PrismaClient
skip_if: _<%= h.changeCase.camel(name) %>
---

export const _<%= h.changeCase.camel(name) %> = async () => {
  return ("service DELETE _<%= h.changeCase.camel(name) %>");
};
