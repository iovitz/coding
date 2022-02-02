type ConstructorType = new (...args: any[]) => any

function MyTest<T extends ConstructorType>() {

}