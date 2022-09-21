---
title: process
category: 'inner'
tags: [object]
---

<!--4--> 

### process.env

::i-chinese{sha="45b49c302911286368cd50fd2befc43328f4c9c4c84cb8850e09f5af00d81d27"}
::
Returns an Object containing various pre-defined variables. standard ones are BOARD, VERSION, FLASH, RAM, MODULES.

For example, to get a list of built-in modules, you can use `process.env.MODULES.split(',')`

### process.memory()

::i-chinese{sha="d515789366a2f6c5cba0835a6d2ae3a0c3b68ff397526b055c4a89ee267c0955"}
::
Run a Garbage Collection pass, and return an object containing information on memory usage.

* `free`  : Memory that is available to be used (in blocks)
* `usage` : Memory that has been used (in blocks)
* `total` : Total memory (in blocks)
* `history` : Memory used for command history - that is freed if memory is low. Note that this is INCLUDED in the figure for 'free'
* `gc`      : Memory freed during the GC pass
* `gctime`  : Time taken for GC pass (in milliseconds)
* `blocksize` : Size of a block (variable) in bytes
* `stackEndAddress` : (on ARM) the address (that can be used with peek/poke/etc) of the END of the stack. The stack grows down, so unless you do a lot of recursion the bytes above this can be used.
* `flash_start`      : (on ARM) the address of the start of flash memory (usually `0x8000000`)
* `flash_binary_end` : (on ARM) the address in flash memory of the end of Espruino's firmware.
* `flash_code_start` : (on ARM) the address in flash memory of pages that store any code that you save with `save()`.
* `flash_length` : (on ARM) the amount of flash memory this firmware was built for (in bytes). Note: Some STM32 chips actually have more memory than is advertised.

Memory units are specified in 'blocks', which are around 16 bytes each (depending on your device). 

> **Note:** To find free areas of flash memory, see `require('Storage').getFree()`

### process.on("uncaughtException",listener)

::i-chinese{sha="0201e1d0031fe27a6312633028e3e2767c7b7b9533b610a56c88ce2f0359ed39"}
::
This event is called when an exception gets thrown and isn't caught (eg. it gets all the way back to the event loop).

You can use this for logging potential problems that might occur during execution when you
might not be able to see what is written to the console, for example:

```javascript
var lastError;
process.on('uncaughtException', function(e) {
  lastError=e;
  print(e,e.stack?"\n"+e.stack:"")
});

function checkError() {
  if (!lastError) return print("No Error");
  print(lastError,lastError.stack?"\n"+lastError.stack:"")
}
```

> **Note:** When this is used, exceptions will cease to be reported on the console - which
may make debugging difficult!

### process.version

::i-chinese{sha="f1ca07f09b7ea84a46b3dc3bccd8ababfa86ddcf1fb9af3a6f22b028530a8451"}
::
Returns the version of Espruino as a String
