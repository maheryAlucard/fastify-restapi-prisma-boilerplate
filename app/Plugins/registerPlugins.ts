import { FastifyInstance } from 'fastify';
import fastifyJWT from 'fastify-jwt';
import fastifyCors from 'fastify-cors';
import helmet from 'fastify-helmet';

const secret = process.env.TOKEN_SECRET ?? 'token-secret-text';

export const registerFastifyPlugins = (fastify: FastifyInstance) => {
  fastify.register(fastifyJWT, { secret });
  fastify.register(fastifyCors);
  fastify.register(helmet);
};
