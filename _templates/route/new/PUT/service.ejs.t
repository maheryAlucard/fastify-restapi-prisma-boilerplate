---
inject: true
to: "<%= method === 'PUT' ? `app/Services/${h.changeCase.pascal(file)}sServices.ts` : null %>"
after: PrismaClient
skip_if: _<%= h.changeCase.camel(name) %>
---

export const _<%= h.changeCase.camel(name) %> = async () => {
  return ("service PUT _<%= h.changeCase.camel(name) %>");
};
