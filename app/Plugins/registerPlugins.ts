import { FastifyInstance } from "fastify";
import fastifyJWT from 'fastify-jwt';

const secret = process.env.TOKEN_SECRET ?? 'token-secret-text';

export const registerFastifyPlugins = (fastify: FastifyInstance) => {
    fastify.register(fastifyJWT, { secret: secret });
}