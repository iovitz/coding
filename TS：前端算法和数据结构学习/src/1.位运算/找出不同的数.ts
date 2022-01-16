const LENGTH = 100
const arr = []
for(let i = 0; i < LENGTH; i++) {
  arr[i] = i
}

arr.push(Math.floor(Math.random() * 100))

let res = 0

for(let i = 0; i < arr.length; i++) {
  res ^= arr[i]
}

for(let i = 0; i <LENGTH; i++) {
  res ^= i
}

console.log(res, arr[arr.length - 1])

