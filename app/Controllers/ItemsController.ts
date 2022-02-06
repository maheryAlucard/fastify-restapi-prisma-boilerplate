import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import * as itemService from '../Services/ItemsServices';

export const getAllItems = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const lists = await itemService._getAllItems();
  return (lists);
});

export const addItem = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const newItem = req.body as any;
  const item = await itemService._addItem(newItem);
  return (item);
});

export const getItemById = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const { id } = req.params as any;
  const item = await itemService._geItemById(parseInt(id));
  return (item);
});

export const updateItem = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const updateData = req.body as any;
  const item = await itemService._updateItem(updateData);
  return (item);
});

export const deleteItemById = (fastify: FastifyInstance) =>
(async (req: FastifyRequest, send: FastifyReply) => {
  const { id } = req.params as any;
  const item = await itemService._deleteItemById(parseInt(id));
  return (item);
});