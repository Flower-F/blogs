# 代理与反射

代理的目标是使得代理对象上执行的任何操作都应用到目标对象上，对于开发者来说唯一可感知的就是代码中操作的对象是代理对象。

## 代理基础

### 空代理

@[code js](./code/proxy/exp-1.js)

### 定义捕获器

@[code js](./code/proxy/exp-2.js)

### 捕获器参数与反射 API

@[code js](./code/proxy/exp-3.js)

通过参数即可执行操作

@[code js](./code/proxy/exp-4.js)

所有捕获器都可以基于自己的参数重写原来的操作，但是并非所有的捕获器操作都像 `get()` 那么简单，所以通过手动实现所有代理的想法是不实际的。实际上，开发者不需要自己手动重写原来的操作，而是可以通过调用全局对象 Reflect 上的**同名**对象实现相同的效果。

@[code js](./code/proxy/exp-5.js)

Reflect API 实际上为用户准备好了一套模板代码，使得开发者可以在此基础上使用最少的代码实现对捕获器的重写操作。

@[code js](./code/proxy/exp-6.js)

### 捕获器不变式

如果对象有一个不可配置且不可写的数据属性，那么在捕获器返回一个与该属性值不同的值时，会抛出一个 TypeError。

@[code js](./code/proxy/exp-7.js)

### 可撤销代理

撤销之后再调用代理会报错。

@[code js](./code/proxy/exp-8.js)

### 代理另一个代理

代理也可以代理另一个代理，从而实现多重代理的效果。

### 代理的问题与不足

**在某些情况下，代理无法与现在的 ECMAScript 很好地协同**。

常见的有因为 this 指向导致 WeakMap 存在的问题，以及关于内置数据类型 Date 导致的 bug。 

@[code js](./code/proxy/exp-9.js)

## 代理捕获器与反射方法

### get()

@[code js](./code/proxy/exp-10.js)

### set()

@[code js](./code/proxy/exp-11.js)

### has()

@[code js](./code/proxy/exp-12.js)

### defineProperty()

@[code js](./code/proxy/exp-13.js)

类似的还有 `getOwnPropertyDescriptor()` `deleteProperty()` `ownKeys()` `getPrototypeOf()` `setPrototypeOf()` `isExtensible()` `preventExtensions()` `apply()` `construct()`

## 代理模式

### 跟踪属性访问

通过捕获 `get()` `set()` 等操作，可以知道对象属性什么时候被访问、被修改。

@[code js](./code/proxy/exp-14.js)

### 隐藏属性

代理内部的实现对于外部而言是不可见的，因此要隐藏部分属性轻而易举。

@[code js](./code/proxy/exp-15.js)

### 属性验证与参数验证

因为所有的赋值操作都会触发 `set()` 捕获器，所以可以根据所赋的值决定是否允许赋值。

@[code js](./code/proxy/exp-16.js)

类似地，也可以对函数的参数进行验证。

### 数据绑定与可观察对象

通过代理可以把运行时中原本不相关的部分联系到一起，这样就可以实现各种模式，从而让不同的代码互操作。
比如，可以将被代理的类绑定到一个全局实例集合，让所有创建的实例都被添加到这个集合中。

@[code js](./code/proxy/exp-17.js)
