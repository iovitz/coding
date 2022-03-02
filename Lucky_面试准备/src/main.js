Function.prototype.bind = function (context, ...args) {
  const fn = this
  const noop = function () {}
  const res = function (...rest) {
    // this只和运行的时候有关系，所以这里的this和上面的fn不是一码事，new res()和res()在调用的时候，res中的this是不同的东西
    return fn.apply(this instanceof noop ? this : context, args.concat(rest))
  }
  if (this.prototype) {
    noop.prototype = this.prototype
  }
  res.prototype = new noop()
  return res
}
