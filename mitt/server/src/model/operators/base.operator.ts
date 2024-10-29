import { Model, ModelStatic } from 'sequelize'

export abstract class BaseeOperator {
  protected modelCtor: ModelStatic<Model>
  constructor(modelCtor: ModelStatic<Model>) {
    this.modelCtor = modelCtor
  }
}
