import { checkToken } from '../Middleware/AuthentMiddleware';
import { FastifyInstance } from 'fastify';
import * as itemRouts from '../Controllers/ItemsController';
import { apiPrefix, routeBase } from '../Global/config';

export const registerItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`${apiPrefix}/${routeBase.item}/`, itemRouts.getAllItems(fastify));
};

export const registerProtectedItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`${apiPrefix}/${routeBase.item}/:id`, { preHandler: [checkToken(fastify)] }, itemRouts.getAllItems(fastify));
};
