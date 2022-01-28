
const MAX = 100000

let num = Math.floor(Math.random() * MAX)
let count = 0

console.log(num.toString(2))

while(num) {
  if((num & 1) === 1) {
    ++count
  }
  num = num >> 1
}

console.log(count)
