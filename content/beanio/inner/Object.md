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

::i-chinese{sha="9c3492c15141998cbbb1639c4e698b9dcdca8ff2bd86121f30be069953ce32ff"}
::
Call any event listeners that were added to this object with `Object.on`, for
instance `obj.emit('data', 'Foo')`.For more information see `Object.on`

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

::i-chinese{sha="0d3fe0a6e86c16528c5e9efeaa719e6b31d7ec065cc24b329f240966e18248b5"}
::
Register an event listener for this object, for instance `Serial1.on('data',
function(d) {...})`.

This is the same as Node.js's [EventEmitter](https://nodejs.org/api/events.html)
but on Espruino the functionality is built into every object:

* `Object.on`
* `Object.emit`
* `Object.removeListener`
* `Object.removeAllListeners`

```
var o = {}; // o can be any object...
// call an arrow function when the 'answer' event is received
o.on('answer', x => console.log(x));
// call a named function when the 'answer' event is received
function printAnswer(d) {
  console.log("The answer is", d);
}
o.on('answer', printAnswer);
// emit the 'answer' event - functions added with 'on' will be executed
o.emit('answer', 42);
// prints: 42
// prints: The answer is 42
// If you have a named function, it can be removed by name
o.removeListener('answer', printAnswer);
// Now 'printAnswer' is removed
o.emit('answer', 43);
// prints: 43
// Or you can remove all listeners for 'answer'
o.removeAllListeners('answer')
// Now nothing happens
o.emit('answer', 44);
// nothing printed
```

### Object.prototype.removeAllListeners(event)

::i-chinese{sha="c006daff502b1abdf136d6e14782b92cf6f548fb600b4e4630acb783b44c31d9"}
::
Removes all listeners (if `event===undefined`), or those of the specified event.

```
Serial1.on("data", function(data) { ... });
Serial1.removeAllListeners("data");
// or
Serial1.removeAllListeners(); // removes all listeners for all event types
```

For more information see `Object.on`

### Object.prototype.removeListener(event,listener)

::i-chinese{sha="c046e9dba306fa906358ed4b854523213503cd26e99c236d732190a0f0c2a4ad"}
::
Removes the specified event listener.

```javascript
function foo(d) {
  console.log(d);
}
Serial1.on("data", foo);
Serial1.removeListener("data", foo);
```

For more information see `Object.on`

### Object.prototype.toString(radix)

::i-chinese{sha="d09e60a39e1345563c73361904bf89a2dfd46e07bc6f42cb1c220fda2d97e048"}
::
Convert the Object to a string

### Object.prototype.valueOf()

::i-chinese{sha="3bd2a303eb3e64d2f73191166111c6c23158ef917fd9ba0a2e9467ca25fb1957"}
::
Returns the primitive value of this object.

<!--11--> 

### Object.assign(args)

::i-chinese{sha="d1d7ba479de56817df801038d9885fc5c0fa22d162dd55fadbe3a15be241034e"}
::
Appends all keys and values in any subsequent objects to the first object

> **Note:** Unlike the standard ES6 `Object.assign`, this will throw an exception
if given raw strings, bools or numbers rather than objects.

### Object.create(proto,propertiesObject)

::i-chinese{sha="a6ac6f0555ce15c683ee9942cbb2b02a32349a51642b22e3c5374d16211f1be3"}
::
Creates a new object with the specified prototype object and properties.
properties are currently unsupported.

### Object.defineProperties(obj,props)

::i-chinese{sha="5af051727082b9ec47f51ed6a5fb17dc46baf16d1cc12cfdb967798d0c35a3d1"}
::
Adds new properties to the Object. See `Object.defineProperty` for more
information

### Object.defineProperty(obj,name,desc)

::i-chinese{sha="54cc2efc6965ece0316b90d50cc489ee03201ee188afc51bab474a82e947a461"}
::
Add a new property to the Object. 'Desc' is an object with the following fields:

* `configurable` (bool = false) - can this property be changed/deleted (not
  implemented)
* `enumerable` (bool = false) - can this property be enumerated (not
  implemented)
* `value` (anything) - the value of this property
* `writable` (bool = false) - can the value be changed with the assignment
  operator?
* `get` (function) - the getter function, or undefined if no getter (only
  supported on some platforms)
* `set` (function) - the setter function, or undefined if no setter (only
  supported on some platforms)

> **Note:** `configurable`, `enumerable`, `writable`, `get`, and `set` are not implemented and will be ignored.

### Object.entries(object)

::i-chinese{sha="199c7dafdef5f55a3e549f8f306ab7b331bbbcd37e3e65ad5162dc24d5af3e15"}
::
Return all enumerable keys and values of the given object

### Object.getOwnPropertyDescriptor(obj,name)

::i-chinese{sha="f688fb96b7e38101e7af7930a1a5ab1a66d601cad52fa738d96b0b54fd55709b"}
::
Get information on the given property in the object, or undefined

### Object.getOwnPropertyNames(object)

::i-chinese{sha="79ea022644532b4207ed1cd36f757d41f2d5283fe0e653b3fc13424eb214b96c"}
::
Returns an array of all properties (enumerable or not) found directly on a given
object.

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

### Object.values(object)

::i-chinese{sha="0dc2f900aab7ddcb423fcb41c4b5e703f8c3735db93af24a9511db7ee5423ed4"}
::
Return all enumerable values of the given object
