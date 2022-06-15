const target = {
  id: 1
};

const proxy = new Proxy(target, {
  has() {
    console.log('has()');
    return Reflect.has(...arguments);
  }
});

'id' in proxy;

// has()
