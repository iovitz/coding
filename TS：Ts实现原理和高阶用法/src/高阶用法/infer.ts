// 一个有形参和返回值的函数
function customFunction (params: string) {
  return 0
}

// infer置换参数类型
type getParamType<T> = T extends (params: infer P) => any ? P : T
type paramType = getParamType<typeof customFunction>

// infer置换返回值类型
type getReturnType<T> = T extends (...args: any) => infer P ? P : T
type returnType = getReturnType<typeof customFunction>

// infer具体化泛型
class Computer {
  // eslint-disable-next-line no-useless-constructor
  constructor (public brand: string, public age: number) {}
}
const thinkpad = new Computer('thinkpad', 3)
const set = new Set<Computer>()
set.add(thinkpad)
type getSetValueType<T> = T extends Set<infer P> ? P : never
type setValueType = getSetValueType<typeof set>
