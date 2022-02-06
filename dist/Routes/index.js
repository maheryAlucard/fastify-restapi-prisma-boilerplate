"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const ItemsRoutes_1 = require("./ItemsRoutes");
const Sockets_1 = require("./Sockets");
const registerRoutes = (fastify) => {
    (0, ItemsRoutes_1.registerItemsRoutes)(fastify);
    (0, ItemsRoutes_1.registerProtectedItemsRoutes)(fastify);
    (0, Sockets_1.registerSocket)(fastify);
};
exports.registerRoutes = registerRoutes;
