const target = new Date();

const handler = {};

const proxy = new Proxy(target, handler);

console.log(proxy instanceof Date); // true
proxy.getDate(); // TypeError: this is not a Date object
