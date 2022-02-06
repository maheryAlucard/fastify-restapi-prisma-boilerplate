"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const registerPlugins_1 = require("./Plugins/registerPlugins");
const Routes_1 = require("./Routes");
const server = (0, fastify_1.default)({ logger: true });
const build = () => {
    (0, registerPlugins_1.registerFastifyPlugins)(server);
    (0, Routes_1.registerRoutes)(server);
    return server;
};
exports.default = build;
