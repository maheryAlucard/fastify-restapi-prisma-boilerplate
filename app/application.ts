import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { registerRoutes } from './Routes';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({ logger: true });

const build = () => {
  registerRoutes(server);
  return server;
};

export default build;
