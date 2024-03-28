import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import Tarefa from "App/Models/Tarefa";

export default class TarefasController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body();

    const tarefa = await Tarefa.create(body);

    response.status(201);
    return {
      message: "Tarefa criada com sucesso!!",
      data: tarefa,
    };
  }

  public async index() {
    const tarefas = await Tarefa.all();

    return {
      data: tarefas,
    };
  }

  public async show({ params }: HttpContextContract) {
    const tarefa = await Tarefa.findOrFail(params.id);

    return {
      data: tarefa,
    };
  }

  public async destroy({ params }: HttpContextContract) {
    const tarefa = await Tarefa.findOrFail(params.id);

    await tarefa.delete();

    return {
      message: "Tarefa Excluido com Sucesso!!",
      data: tarefa,
    };
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body();

    const tarefa = await Tarefa.findOrFail(params.id);

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
