import { FastifyInstance } from 'fastify';
import { registerItemsRoutes } from './ItemsRoutes';

export const registerRoutes = (fastify: FastifyInstance) => {
  registerItemsRoutes(fastify);
};
