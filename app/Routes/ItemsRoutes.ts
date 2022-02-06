import { FastifyInstance } from 'fastify';
import * as itemRouts from '../Controllers/ItemsController';
const routeBase = 'items';

export const registerItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`/${routeBase}/`, itemRouts.getAllItems(fastify));
};
