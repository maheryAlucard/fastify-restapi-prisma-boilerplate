"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerProtectedItemsRoutes = exports.registerItemsRoutes = void 0;
const AuthentMiddleware_1 = require("../Middleware/AuthentMiddleware");
const itemRouts = __importStar(require("../Controllers/ItemsController"));
const config_1 = require("../Global/config");
const registerItemsRoutes = (fastify) => {
    fastify.get(`${config_1.apiPrefix}/${config_1.routeBase.item}/`, itemRouts.getAllItems(fastify));
};
exports.registerItemsRoutes = registerItemsRoutes;
const registerProtectedItemsRoutes = (fastify) => {
    fastify.get(`${config_1.apiPrefix}/${config_1.routeBase.item}/:id`, { preHandler: [(0, AuthentMiddleware_1.checkToken)(fastify)] }, itemRouts.getAllItems(fastify));
};
exports.registerProtectedItemsRoutes = registerProtectedItemsRoutes;
