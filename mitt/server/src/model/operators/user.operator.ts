import { UserModel } from '../dao'
import { BaseeOperator } from './base.operator'

export class UserOperator extends BaseeOperator {
  constructor() {
    super(UserModel)
  }
}
