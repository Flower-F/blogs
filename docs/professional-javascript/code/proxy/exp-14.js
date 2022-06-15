const user = {
  id: 1
};

const proxy = new Proxy(user, {
  get(_target, property) {
    console.log(`Get ${property}`);
    return Reflect.get(...arguments);
  },
  set(_target, property, value) {
    console.log(`Set ${property} = ${value}`);
    return Reflect.set(...arguments);
  }
});

proxy.id; // Get id
proxy.id = 2; // Set id = 2
