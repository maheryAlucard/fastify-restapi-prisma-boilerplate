---
to: app/Controllers/sockets/soc<%= h.changeCase.camel(name) %>Controller.ts
---
import { FastifyInstance } from 'fastify';

export const soc_<%= h.changeCase.camel(name) %> = async (fastify: FastifyInstance, data?: any) => {
    
    return ("soc_<%= h.changeCase.camel(name) %> handler not implemented.");
};
