function TestDecorator<T extends { new (...args: any): any }>(targetClass: T) {
  return class extends targetClass {
    test () {
      console.log('test')
    }
  }
}

@TestDecorator
class Person {
  name: string
  constructor (name: string) {
    this.name = name
  }

  public sayHi () {
    console.log(this.name)
  }
}

const a = new Person('123')
;(a as any).test()
