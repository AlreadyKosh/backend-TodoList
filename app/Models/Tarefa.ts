import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Tarefa extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;
  @column()
  public favorite: boolean;

  @column()
  public content: string;

  @column()
  public background_color: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
