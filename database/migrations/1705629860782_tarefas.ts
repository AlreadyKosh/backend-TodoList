import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tarefas extends BaseSchema {
  protected tableName = 'tarefas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.boolean('favorite')
      table.string('content')
      table.string('background_color')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
