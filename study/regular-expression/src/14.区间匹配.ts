const nameReg = /^[a-z]\w{5,9}$/

console.log(nameReg.test('iovitz'))
console.log(nameReg.test('iovitziovitz'))
