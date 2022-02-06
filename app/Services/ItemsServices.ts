import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const _getAllItems = async () => {
  return await prisma.item.findMany();
};

export const _geItemById = async (id: number) => {
  return await prisma.item.findUnique({
    where: { id }
  });
};

export const _addItem = async (item: any) => {
  return await prisma.item.create({
    data: item
  });
};

export const _updateItem = async (item: any) => {
  return await prisma.item.update({
    where: { id: item.id },
    data: item
  });
};

export const _deleteItemById = async (id: number) => {
  return await prisma.item.delete({
    where: { id }
  });
};