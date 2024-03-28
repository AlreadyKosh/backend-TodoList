"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runner_1 = require("@japa/runner");
(0, runner_1.test)('display tarefas', async ({ client }) => {
    const response = await client.get('/tarefas');
    response.assertStatus(200);
    response.assertBodyContains([{
            id: 1,
            title: "Comida",
            isFavorite: false,
            content: "Teste",
            background_color: "#ffff",
            createdAt: "2024-01-19T00:25:47.000-03:00",
            updatedAt: "2024-01-19T00:25:47.000-03:00"
        }]);
});
//# sourceMappingURL=tarefa-api.spec.js.map