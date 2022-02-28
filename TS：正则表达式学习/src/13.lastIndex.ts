const reg = /./g
const str = 'haha'
// eslint-disable-next-line no-cond-assign
let res = reg.exec(str)
while (res) {
  console.log(res[0], res.index)
  res = reg.exec(str)
}

export default {}
