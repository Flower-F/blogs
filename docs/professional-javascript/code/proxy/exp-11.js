const target = {
  id: 1
};

const proxy = new Proxy(target, {
  set() {
    console.log('set()');
    return Reflect.set(...arguments);
  }
});

proxy.id = 2;

// set()
