const target = {
  id: 1
};

const handler = {};

const proxy = new Proxy(target, handler);

// 代理与目标不完全相等
console.log(target === proxy); // false

// 目标和代理都会有 id
console.log(proxy.hasOwnProperty('id')); // true
console.log(target.hasOwnProperty('id')); // true

console.log(target.id); // 1
console.log(proxy.id); // 1

// 目标对象属性赋值会影响代理对象
target.id = 2;
console.log(target.id); // 2
console.log(proxy.id); // 2

// 代理对象属性赋值会颖目标对象
proxy.id = 3;
console.log(target.id); // 3
console.log(proxy.id); // 3

// 注意不能使用 instanceof 操作符
console.log(target instanceof Proxy); // TypeError
console.log(proxy instanceof Proxy); // TypeError
