---
title: Function
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--1--> 

### Function.constructor(args)

::i-chinese{sha="3804e8ec9ab5f35dc5d868b7710f100bcc9c87171a6a01ea95c265bd28fa7704"}
::
Creates a function

<!--4--> 

### Function.prototype.apply(this,args)

::i-chinese{sha="664e0f41b5b334d310a750b6c5c0fb9d209f7c69891d4e1d7e7d1fcda5dda708"}
::
This executes the function with the supplied `this` argument and parameters

### Function.prototype.bind(this,params)

::i-chinese{sha="664e0f41b5b334d310a750b6c5c0fb9d209f7c69891d4e1d7e7d1fcda5dda708"}
::
This executes the function with the supplied `this` argument and parameters

### Function.prototype.call(this,params)

::i-chinese{sha="664e0f41b5b334d310a750b6c5c0fb9d209f7c69891d4e1d7e7d1fcda5dda708"}
::
This executes the function with the supplied `this` argument and parameters

### Function.prototype.replaceWith(newFunc)

::i-chinese{sha="01e93d80890b7c46c3c0f2f174dd7440e0a6a52d6b91d7cc585084ff329ffd34"}
::
This replaces the function with the one in the argument - while keeping the old
function's scope. This allows inner functions to be edited, and is used when
edit() is called on an inner function.
