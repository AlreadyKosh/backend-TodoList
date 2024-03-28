"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tarefa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Tarefa"));
class TarefasController {
    async store({ request, response }) {
        const body = request.body();
        const tarefa = await Tarefa_1.default.create(body);
        response.status(201);
        return {
            message: "Tarefa criada com sucesso!!",
            data: tarefa,
        };
    }
    async index() {
        const tarefas = await Tarefa_1.default.all();
        return {
            data: tarefas,
        };
    }
    async show({ params }) {
        const tarefa = await Tarefa_1.default.findOrFail(params.id);
        return {
            data: tarefa,
        };
    }
    async destroy({ params }) {
        const tarefa = await Tarefa_1.default.findOrFail(params.id);
        await tarefa.delete();
        return {
            message: "Tarefa Excluido com Sucesso!!",
            data: tarefa,
        };
    }
    async update({ params, request }) {
        const body = request.body();
        const tarefa = await Tarefa_1.default.findOrFail(params.id);
        tarefa.title = body.title;
        tarefa.favorite = body.favorite;
        tarefa.content = body.content;
        tarefa.background_color = body.background_color;
        await tarefa.save();
        return {
            message: "Tarefa Atualizado com Sucesso!!",
            data: tarefa,
        };
    }
}
exports.default = TarefasController;
//# sourceMappingURL=TarefasController.js.map