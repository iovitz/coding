function typeGuard (target: any): target is Date {
  return target instanceof Date
}

const anywayVariable = ''

if (typeGuard(anywayVariable)) {
  anywayVariable.getDate()
}
