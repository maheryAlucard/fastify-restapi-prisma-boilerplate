import { checkToken } from '../Middleware/AuthentMiddleware';
import { FastifyInstance } from 'fastify';
import * as itemRouts from '../Controllers/ItemsController';
import { apiPrefix, routeBase } from '../Global/config';

export const registerItemsRoutes = (fastify: FastifyInstance) => {
  fastify.post(`${apiPrefix}/${routeBase.item}/add`, itemRouts.addItem(fastify));
  fastify.get(`${apiPrefix}/${routeBase.item}/:id`, itemRouts.getItemById(fastify));
  fastify.put(`${apiPrefix}/${routeBase.item}`, itemRouts.updateItem(fastify));
  fastify.delete(`${apiPrefix}/${routeBase.item}/:id`, itemRouts.deleteItemById(fastify));
};

export const registerProtectedItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`${apiPrefix}/${routeBase.item}`, { preHandler: [checkToken(fastify)] }, itemRouts.getAllItems(fastify));
};
