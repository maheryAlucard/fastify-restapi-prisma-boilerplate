"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeBase = exports.apiPrefix = void 0;
exports.apiPrefix = process.env.API_PREFIX || '/api';
exports.routeBase = {
    item: 'items',
    user: 'user'
};
