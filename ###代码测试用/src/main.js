// eslint-disable-next-line no-extend-native
Function.prototype.useBind = function (ctx) {
  const fn = this
  const bindFn = function (this) {
    if (this instanceof bindFn) {

    }
    fn.apply(ctx)
  }
  return bindFn
}

function loger () {
  console.log(this.name)
}

const me = {
  name: 'iovitz'
}
loger.bind(me)()
loger.useBind(me)()
