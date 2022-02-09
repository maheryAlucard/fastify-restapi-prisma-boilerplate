import { checkToken } from '../Middleware/AuthentMiddleware';
import { FastifyInstance } from 'fastify';
import * as itemController from '../Controllers/ItemsController';
import { apiPrefix, routeBase } from '../Global/config';

export const registerItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`${apiPrefix}/${routeBase.item}/:id`, itemController.getItemById(fastify));
};

export const registerProtectedItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`${apiPrefix}/${routeBase.item}`, { preHandler: [checkToken(fastify)] }, itemController.getAllItems(fastify));
  fastify.post(`${apiPrefix}/${routeBase.item}/add`, { preHandler: [checkToken(fastify)] }, itemController.addItem(fastify));
  fastify.put(`${apiPrefix}/${routeBase.item}`, { preHandler: [checkToken(fastify)] }, itemController.updateItem(fastify));
  fastify.delete(`${apiPrefix}/${routeBase.item}/:id`, { preHandler: [checkToken(fastify)] }, itemController.deleteItemById(fastify));
};
