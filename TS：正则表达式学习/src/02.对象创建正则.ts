const char = 'i'

const reg = new RegExp(`${char}`, 'g')

const str = 'iovitz'

console.log(reg.test(str))

export default {}
