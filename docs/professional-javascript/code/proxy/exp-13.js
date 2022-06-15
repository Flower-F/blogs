const target = {};

const proxy = new Proxy(target, {
  defineProperty() {
    console.log('defineProperty()');
    return Reflect.defineProperty(...arguments);
  }
});

Object.defineProperty(proxy, 'id', {
  value: 1
});

// defineProperty()
