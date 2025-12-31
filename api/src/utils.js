"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCorsHeaders = void 0;
const addCorsHeaders = (allowOrigin, response) => {
    response.headers.set('Access-Control-Allow-Origin', allowOrigin);
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
};
exports.addCorsHeaders = addCorsHeaders;
