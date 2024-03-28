"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const source_map_support_1 = __importDefault(require("source-map-support"));
const standalone_1 = require("@adonisjs/core/build/standalone");
source_map_support_1.default.install({ handleUncaughtExceptions: false });
async function startServer() {
    try {
        const ignitor = new standalone_1.Ignitor(__dirname);
        await ignitor.httpServer().start();
    }
    catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=server.js.map