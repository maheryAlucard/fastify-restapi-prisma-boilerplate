import { FastifyInstance } from 'fastify';
import * as itemRouts from '../controllers/ItemsController';
const routeBase = 'items';

export const registerItemsRoutes = (fastify: FastifyInstance) => {
  fastify.get(`/${routeBase}/`, itemRouts.getAllItems(fastify));
};
