"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const ItemsRoutes_1 = require("./ItemsRoutes");
const registerRoutes = (fastify) => {
    (0, ItemsRoutes_1.registerItemsRoutes)(fastify);
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=index.js.map