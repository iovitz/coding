
const FunctionProto: any = Function.prototype

FunctionProto.newBind = function (this: (...args: any[]) => any, thisPointer: any, ...globalArgs: any[]) {
  const fn = this
  const Temp: any = function () {}
  const res = function (this: any, ...args: any[]) {
    return fn.apply(this instanceof Temp ? this : thisPointer, globalArgs.concat(args))
  }
  if (this.prototype) {
    Temp.prototype = this.prototype
  }
  res.prototype = new Temp()
  return res
}

const oldFn: any = function (this: any, name: string, age: string) {
  console.log(arguments)
  this.name = name
  this.age = age
}

const Fn = oldFn.newBind({ name: 'iovitz' })

const obj = new Fn('123', 222)
console.log(obj)
