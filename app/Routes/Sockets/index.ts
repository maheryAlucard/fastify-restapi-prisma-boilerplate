import { apiPrefix } from '../../Global/config';
import { FastifyInstance } from 'fastify';
import { SOCKET_ACTIONS } from './socketsRoutes';

export const registerSocket = (fastify: FastifyInstance) => {
    fastify.get(`${apiPrefix}`, {
        websocket: true,
    },          (connection, req) => {
        connection.socket.on('message', async (message: Buffer) => {
            try {
                const messageData = JSON.parse(message.toString());

                /** Checking if message from client is well formatted. expect a stringified JSON with "action" and "data" key */
                if (Boolean(messageData) && Boolean(messageData.action && messageData.data)) {
                    const haveAcces = messageData?.token ? fastify.jwt.verify(messageData?.token) : null; // add a verification token from message
                    if (!haveAcces) {
                        if (SOCKET_ACTIONS[messageData.action]) {
                            const data_result = await SOCKET_ACTIONS[messageData.action](fastify, messageData.data);
                            if (data_result) {
                                try {
                                    const stringified_data = JSON.stringify(data_result);
                                    connection.socket.send(stringified_data);
                                } catch (error) {
                                    connection.socket.send((error as any).toString());
                                }
                            } else connection.socket.send('Unknown error.');
                        } else connection.socket.send('Unhandled action.');
                    } else connection.socket.send('Unauthorized.');

                } else connection.socket.send('Malformed socket message.');

            } catch (error) {
                fastify.log.error(error);
                connection.socket.send('Malformed socket message.');
            }
        });
    });
};
