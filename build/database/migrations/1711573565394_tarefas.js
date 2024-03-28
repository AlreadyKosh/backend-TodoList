"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Tarefas extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'tarefas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('title');
            table.boolean('favorite');
            table.string('content');
            table.string('background_color');
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Tarefas;
//# sourceMappingURL=1711573565394_tarefas.js.map