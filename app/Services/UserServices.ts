import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const _getAllUsers = async () => {
    return await prisma.user.findMany();
};
