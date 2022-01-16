const LENGTH = 100

const arr = []

for(let i = 0; i < LENGTH; i++) {
  arr.push(i)
  arr.push(i)
}

arr.splice(Math.floor(Math.random() * LENGTH * 2), 1)

let res = 0

for(let i = 0; i < arr.length; i++) {
  res ^= arr[i]
}

console.log(res)
