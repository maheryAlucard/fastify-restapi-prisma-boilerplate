import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { registerFastifyPlugins } from './Plugins/registerPlugins';
import { registerRoutes } from './Routes';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({ logger: true });

const build = () => {
  registerFastifyPlugins(server);
  registerRoutes(server);
  return server;
};

export default build;
