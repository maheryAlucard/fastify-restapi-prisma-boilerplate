import { checkToken } from '../Middleware/AuthentMiddleware';
import { FastifyInstance } from 'fastify';
import * as itemRouts from '../Controllers/ItemsController';
const routeBase = 'items';

export const registerItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`/${routeBase}/`, itemRouts.getAllItems(fastify));
};

export const registerProtectedItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`/${routeBase}/:id`, { preHandler: [checkToken(fastify)] }, itemRouts.getAllItems(fastify));
};
