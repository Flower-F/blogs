const userList = [];

class User {
  constructor(name) {
    this._name = name;
  }

}

const proxy = new Proxy(User, {
  construct() {
    const newUser = Reflect.construct(...arguments);
    userList.push(newUser);
    return newUser;
  }
});

new proxy('John');
new proxy('Jack');
new proxy('Mary');

console.log(userList);

// [
//   User { _name: 'John' },
//   User { _name: 'Jack' },
//   User { _name: 'Mary' }
// ]
