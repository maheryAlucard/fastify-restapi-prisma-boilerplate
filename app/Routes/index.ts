import { FastifyInstance } from 'fastify';
import { registerItemsRoutes, registerProtectedItemsRoutes } from './ItemsRoutes';
import { registerSocket } from './Sockets';

export const registerRoutes = (fastify: FastifyInstance) => {
  registerItemsRoutes(fastify);
  registerProtectedItemsRoutes(fastify);
  registerSocket(fastify);
};
