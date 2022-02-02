const people = {
  name: 'zhangsan',
  age: 18,
  married: false,
}

/**
 * 代理对某个对象的特定key值进行访问和修改的行为
 * @param obj 需要代理的对象
 * @param key 需要代理访问的key
 * @returns
 */
function objectProxy<T extends object, K extends keyof T>(obj: T, key: K) {
  return {
    getVal(): T[K] {
      return obj[key]
    },
    setVal(newVal: T[K]) {
      obj[key] = newVal
    },
  }
}

const ageProxy = objectProxy(people, 'age')

ageProxy.setVal(10)

// 类型错误
// ageProxy.setVal(true)
