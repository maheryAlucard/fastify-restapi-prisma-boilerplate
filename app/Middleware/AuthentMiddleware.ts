import { defaultMessage } from "../Utils/generator";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const checkToken = (fastify: FastifyInstance) => (async (req: FastifyRequest, send: FastifyReply) => {
    try {
        await req.jwtVerify();
    } catch (cerror) {
        fastify.log.error(cerror);
        let error = (cerror as any).toString();
        send.status(500).send(defaultMessage(error))
    }
})