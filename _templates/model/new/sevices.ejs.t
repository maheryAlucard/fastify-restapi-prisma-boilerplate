---
to: app/Services/<%= h.changeCase.pascal(name) %>sServices.ts
---
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const _getAll<%= h.changeCase.pascal(name) %> = async () => {
  return await prisma.<%= h.changeCase.lower(name) %>.findMany();
};

export const _ge<%= h.changeCase.pascal(name) %>ById = async (id: number) => {
  return await prisma.<%= h.changeCase.lower(name) %>.findUnique({
    where: { id }
  });
};

export const _add<%= h.changeCase.pascal(name) %> = async (<%= h.changeCase.lower(name) %>: any) => {
  return await prisma.<%= h.changeCase.lower(name) %>.create({
    data: <%= h.changeCase.lower(name) %>
  });
};

export const _update<%= h.changeCase.pascal(name) %> = async (<%= h.changeCase.lower(name) %>: any) => {
  return await prisma.<%= h.changeCase.lower(name) %>.update({
    where: { id: <%= h.changeCase.lower(name) %>.id },
    data: <%= h.changeCase.lower(name) %>
  });
};

export const _delete<%= h.changeCase.pascal(name) %>ById = async (id: number) => {
  return await prisma.<%= h.changeCase.lower(name) %>.delete({
    where: { id }
  });
};
