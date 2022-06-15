const target = {
  id: 1,
  name: 'xiaoming'
};

const handler = {
  get(_target, property) {
    let decoration = '';
    if (property === 'name') {
      decoration = '!!!';
    }
    return Reflect.get(...arguments) + decoration;
  }
};

const proxy = new Proxy(target, handler);

console.log(target.id); // 1
console.log(proxy.id); // 1

console.log(target.name); // xiaoming
console.log(proxy.name); // xiaoming!
