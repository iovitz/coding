const reg = /l/g

const str = 'hello, world'

console.log(str.replace(reg, char => {
  return `<span style="color: red">${char}</span>`
}))

export default {}
