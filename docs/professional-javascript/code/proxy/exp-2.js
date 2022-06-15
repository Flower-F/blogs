const target = {
  id: 1
};

const handler = {
  get() {
    return 'handler override';
  }
};

const proxy = new Proxy(target, handler);

console.log(target.id); // 1
console.log(proxy.id); // handle override
