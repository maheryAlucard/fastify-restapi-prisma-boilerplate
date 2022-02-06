import { _getAllUsers } from '../../Services/UserServices';
import { FastifyInstance } from 'fastify';

export const soc_getAllUsers = async (fastify: FastifyInstance, data?: any) => {
    const lists = await _getAllUsers();
    return lists;
}