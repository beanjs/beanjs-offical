---
title: Object
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--1--> 

### Object.constructor(value)

::i-chinese{sha="0db886fdb4879e8da88389088882cf8ba70889483cabffb36610a262091b130c"}
::
Creates an Object from the supplied argument

<!--9--> 

### Object.prototype.clone()

::i-chinese{sha="08039348c68f7bb00317683cce8b8f9a17b77790eb8ecb0c76fc6630b5bc51f2"}
::
Copy this object completely

### Object.prototype.emit(event,args)

::i-chinese{sha="c22755848cb032d1daae044d8994d45caac4249e36353d641511cf84cd915098"}
::
Call the event listeners for this object, for instance `E.emit('data', 'Foo')`. See Node.js's EventEmitter.

### Object.prototype.hasOwnProperty(name)

::i-chinese{sha="3b094f87ca7ec5ee2010abefa5744072b1a96caeb5e7715192cd988f2156ef02"}
::
Return true if the object (not its prototype) has the given property.

> **NOTE:** This currently returns false-positives for built-in functions in prototypes

### Object.prototype.length

::i-chinese{sha="e00d61d3346fa95555ce46117724ee2109cc72be802ec7a6dfbe9a625eb0b3d0"}
::
Find the length of the object

### Object.prototype.on(event,listener)

::i-chinese{sha="ca4e88c70efa99b9ea4eab1810e95b1b0b9d71e599fec672009302a84d7e3776"}
::
Register an event listener for this object, for instance `E.on('data', function(d) {...})`. See Node.js's EventEmitter.

### Object.prototype.removeAllListeners(event)

::i-chinese{sha="8d665a9febb9ef84152799debbcc5f07b34ef11e2c82b90cf5c7ab78da7c9366"}
::
Removes all listeners, or those of the specified event.

### Object.prototype.removeListener(event,listener)

::i-chinese{sha="9bbcff083f6b062cd0986b1c4c6944281069fac6e0829d20c439fa590bf35612"}
::
Removes the specified event listener.

```javascript
function foo(d) {
  console.log(d);
}
Serial1.on("data", foo);
Serial1.removeListener("data", foo);
```

### Object.prototype.toString(radix)

::i-chinese{sha="d09e60a39e1345563c73361904bf89a2dfd46e07bc6f42cb1c220fda2d97e048"}
::
Convert the Object to a string

### Object.prototype.valueOf()

::i-chinese{sha="3bd2a303eb3e64d2f73191166111c6c23158ef917fd9ba0a2e9467ca25fb1957"}
::
Returns the primitive value of this object.

<!--9--> 

### Object.assign(args)

::i-chinese{sha="d1d7ba479de56817df801038d9885fc5c0fa22d162dd55fadbe3a15be241034e"}
::
Appends all keys and values in any subsequent objects to the first object

> **Note:** Unlike the standard ES6 `Object.assign`, this will throw an exception
if given raw strings, bools or numbers rather than objects.

### Object.create(proto,propertiesObject)

::i-chinese{sha="b33f661d5bcb583b4bc54a264a023e6fe8e39284c9d53fa9fa09a174a1cf7467"}
::
Creates a new object with the specified prototype object and properties. properties are currently unsupported.

### Object.defineProperties(obj,props)

::i-chinese{sha="afe460c22210ac2be0de0849843b1a7b0d66bf6699c26f920ff2d2d6a80c4fad"}
::
Adds new properties to the Object. See `Object.defineProperty` for more information

### Object.defineProperty(obj,name,desc)

::i-chinese{sha="f0ce109c2ad5767c9ed642e5c7b6739c7f0a842b02a639672f4a3228d66e21e8"}
::
Add a new property to the Object. 'Desc' is an object with the following fields:

* `configurable` (bool = false) - can this property be changed/deleted
* `enumerable` (bool = false) - can this property be enumerated
* `value` (anything) - the value of this property
* `writable` (bool = false) - can the value be changed with the assignment operator?
* `get` (function) - the getter function, or undefined if no getter (only supported on some platforms)
* `set` (function) - the setter function, or undefined if no setter (only supported on some platforms)

> **Note:** `configurable`, `enumerable`, `writable`, `get`, and `set` are not implemented and will be ignored.

### Object.getOwnPropertyDescriptor(obj,name)

::i-chinese{sha="f688fb96b7e38101e7af7930a1a5ab1a66d601cad52fa738d96b0b54fd55709b"}
::
Get information on the given property in the object, or undefined

### Object.getOwnPropertyNames(object)

::i-chinese{sha="facada9db1b57a176cf53310c42458642d2646becc2ad60623c8ad1f13337430"}
::
Returns an array of all properties (enumerable or not) found directly on a given object.

### Object.getPrototypeOf(object)

::i-chinese{sha="a8abd2f68c48b326c6cd62acdc186f92fb5a9a385a6f78dbb901c2e988af119c"}
::
Get the prototype of the given object - this is like writing `object.__proto__`
but is the `proper` ES6 way of doing it

### Object.keys(object)

::i-chinese{sha="0b8ef376640840639fa2830fcfc5f6aca2ef09a39618ac5df9f727fd03c95267"}
::
Return all enumerable keys of the given object

### Object.setPrototypeOf(object,prototype)

::i-chinese{sha="d9f5c25a4dfea78e487f992b7947838730d1a363ca43dc7b980c3421a5c48ed3"}
::
Set the prototype of the given object - this is like writing
`object.__proto__ = prototype` but is the `proper` ES6 way of doing it
