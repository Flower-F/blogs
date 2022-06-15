const target = {};

Object.defineProperty(target, 'id', {
  writable: false,
  configurable: false,
  value: 1
});

const handler = {
  get() {
    return 2;
  }
};

const proxy = new Proxy(target, handler);

console.log(target.id); // 1
console.log(proxy.id); // TypeError
