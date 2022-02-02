interface Add {
  (a: number, b: number): number
}

const add: Add = function (a, b) {
  return a + b
}

console.log(add(1, 2))
