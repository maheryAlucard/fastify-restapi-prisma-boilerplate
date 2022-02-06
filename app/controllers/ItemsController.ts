import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { _getAllItems } from '../Services/ItemsServices';

export const getAllItems = (fastify: FastifyInstance) => (async (req: FastifyRequest, send: FastifyReply) => {
  const lists = await _getAllItems();
  return (lists);
});
