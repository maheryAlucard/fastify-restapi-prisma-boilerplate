---
to: app/Routes/<%= h.changeCase.lower(name) %>Routes.ts
---
import { checkToken } from '../Middleware/AuthentMiddleware';
import { FastifyInstance } from 'fastify';
import * as <%= h.changeCase.lower(name) %>Controller from '../Controllers/<%= h.changeCase.lower(name) %>Controller';
import { apiPrefix, routeBase } from '../Global/config';

export const register<%= h.changeCase.pascal(name) %>sRoutes = (fastify: FastifyInstance) => {
  fastify.get(`${apiPrefix}/${routeBase._<%= h.changeCase.lower(name) %>}/:id`, <%= h.changeCase.lower(name) %>Controller.get<%= h.changeCase.pascal(name) %>ById(fastify));
};

export const registerProtected<%= h.changeCase.pascal(name) %>sRoutes = (fastify: FastifyInstance) => {
  fastify.get(`${apiPrefix}/${routeBase._<%= h.changeCase.lower(name) %>}`, { preHandler: [checkToken(fastify)] }, <%= h.changeCase.lower(name) %>Controller.getAll<%= h.changeCase.pascal(name) %>s(fastify));
  fastify.post(`${apiPrefix}/${routeBase._<%= h.changeCase.lower(name) %>}/add`, { preHandler: [checkToken(fastify)] }, <%= h.changeCase.lower(name) %>Controller.add<%= h.changeCase.pascal(name) %>(fastify));
  fastify.put(`${apiPrefix}/${routeBase._<%= h.changeCase.lower(name) %>}`, { preHandler: [checkToken(fastify)] }, <%= h.changeCase.lower(name) %>Controller.update<%= h.changeCase.pascal(name) %>(fastify));
  fastify.delete(`${apiPrefix}/${routeBase._<%= h.changeCase.lower(name) %>}/:id`, { preHandler: [checkToken(fastify)] }, <%= h.changeCase.lower(name) %>Controller.delete<%= h.changeCase.pascal(name) %>ById(fastify));
};
