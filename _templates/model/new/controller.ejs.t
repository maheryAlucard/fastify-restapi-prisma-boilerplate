---
to: app/Controllers/<%= h.changeCase.pascal(name) %>sController.ts
---
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import * as <%= h.changeCase.lower(name) %>Service from '../Services/<%= h.changeCase.lower(name) %>Services';

export const getAll<%= h.changeCase.pascal(name) %>s = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const lists = await <%= h.changeCase.lower(name) %>Service._getAll<%= h.changeCase.pascal(name) %>();
  return (lists);
});

export const add<%= h.changeCase.pascal(name) %> = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const new<%= h.changeCase.pascal(name) %> = req.body as any;
  const <%= h.changeCase.lower(name) %> = await <%= h.changeCase.lower(name) %>Service._add<%= h.changeCase.pascal(name) %>(new<%= h.changeCase.pascal(name) %>);
  return (<%= h.changeCase.lower(name) %>);
});

export const get<%= h.changeCase.pascal(name) %>ById = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const { id } = req.params as any;
  const <%= h.changeCase.lower(name) %> = await <%= h.changeCase.lower(name) %>Service._ge<%= h.changeCase.pascal(name) %>ById(parseInt(id));
  return (<%= h.changeCase.lower(name) %>);
});

export const update<%= h.changeCase.pascal(name) %> = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const updateData = req.body as any;
  const <%= h.changeCase.lower(name) %> = await <%= h.changeCase.lower(name) %>Service._update<%= h.changeCase.pascal(name) %>(updateData);
  return (<%= h.changeCase.lower(name) %>);
});

export const delete<%= h.changeCase.pascal(name) %>ById = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const { id } = req.params as any;
  const <%= h.changeCase.lower(name) %> = await <%= h.changeCase.lower(name) %>Service._delete<%= h.changeCase.pascal(name) %>ById(parseInt(id));
  return (<%= h.changeCase.lower(name) %>);
});
