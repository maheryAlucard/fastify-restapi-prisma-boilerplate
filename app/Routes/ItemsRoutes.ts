import { checkToken } from '../Middleware/AuthentMiddleware';
import { FastifyInstance } from 'fastify';
import * as itemRouts from '../Controllers/ItemsController';
import { apiPrefix, routeBase } from '../Global/config';

export const registerItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`${apiPrefix}/${routeBase.item}/:id`, itemRouts.getItemById(fastify));
};

export const registerProtectedItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`${apiPrefix}/${routeBase.item}`, { preHandler: [checkToken(fastify)] }, itemRouts.getAllItems(fastify));
  fastify.post(`${apiPrefix}/${routeBase.item}/add`, { preHandler: [checkToken(fastify)] }, itemRouts.addItem(fastify));
  fastify.put(`${apiPrefix}/${routeBase.item}`, { preHandler: [checkToken(fastify)] }, itemRouts.updateItem(fastify));
  fastify.delete(`${apiPrefix}/${routeBase.item}/:id`, { preHandler: [checkToken(fastify)] }, itemRouts.deleteItemById(fastify));
};
