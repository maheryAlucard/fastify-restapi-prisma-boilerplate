"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerFastifyPlugins = void 0;
const fastify_jwt_1 = __importDefault(require("fastify-jwt"));
const fastify_cors_1 = __importDefault(require("fastify-cors"));
const fastify_helmet_1 = __importDefault(require("fastify-helmet"));
const secret = (_a = process.env.TOKEN_SECRET) !== null && _a !== void 0 ? _a : 'token-secret-text';
const registerFastifyPlugins = (fastify) => {
    fastify.register(fastify_jwt_1.default, { secret });
    fastify.register(fastify_cors_1.default);
    fastify.register(fastify_helmet_1.default);
};
exports.registerFastifyPlugins = registerFastifyPlugins;
