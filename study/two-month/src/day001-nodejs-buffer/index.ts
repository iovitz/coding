// 开辟空间并填充
const buf = Buffer.alloc(5, 1)

// 两位 16进制 是 4个字节
// <Buffer 01 01 01 01 01>
console.log(buf)

// 从字符转创建buffer
const buf2 = Buffer.from('iovitz')
console.log(buf2)
// buffer的本质是一个数组
// Buffer(6) [Uint8Array] [ 105, 111, 118, 105, 116, 122 ]
console.dir(buf2)
buf2[0] = 106
console.log(buf2.toString())
