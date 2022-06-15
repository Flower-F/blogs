const target = {
  id: 1
};

const handler = {
  get() {
    return 2;
  }
};

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log(target.id); // 1
console.log(proxy.id); // 2

revoke();

console.log(target.id); // 1
console.log(proxy.id); // TypeError
