import { FastifyInstance } from 'fastify';
import { registerItemsRoutes, registerProtectedItemsRoutes } from './ItemsRoutes';

export const registerRoutes = (fastify: FastifyInstance) => {
  registerItemsRoutes(fastify);
  registerProtectedItemsRoutes(fastify);
};
