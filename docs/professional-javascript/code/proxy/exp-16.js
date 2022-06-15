const target = {
  onlyNumbersHoHere: 0
};

const proxy = new Proxy(target, {
  set(_target, _property, value) {
    if (typeof value !== 'number') {
      console.log('fail to set the value');
      return false;
    } else {
      return Reflect.set(...arguments);
    }
  }
});

proxy.onlyNumbersHoHere = 1;
console.log(proxy.onlyNumbersHoHere); // 1

proxy.onlyNumbersHoHere = '2';
console.log(proxy.onlyNumbersHoHere); // 1
