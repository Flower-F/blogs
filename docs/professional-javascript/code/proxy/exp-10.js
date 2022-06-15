const target = {
  id: 1
};

const proxy = new Proxy(target, {
  get() {
    console.log('get()');
    return Reflect.get(...arguments);
  }
});

proxy.id;

// get()
