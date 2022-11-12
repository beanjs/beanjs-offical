---
title: process
category: 'inner'
tags: [object]
---

<!--4--> 

### process.env

::i-chinese{sha="3221bfbbd5314468b68d49e701a9da2d862a0d682cae7c6f298aa69c0c5e8010"}
::
Returns an Object containing various pre-defined variables.

* `VERSION` - is the Espruino version
* `GIT_COMMIT` - is Git commit hash this firmware was built from
* `BOARD` - the board's ID (e.g. `PUCKJS`)
* `RAM` - total amount of on-chip RAM in bytes
* `FLASH` - total amount of on-chip flash memory in bytes
* `SPIFLASH` - (on Bangle.js) total amount of off-chip flash memory in bytes
* `HWVERSION` - For Puck.js this is the board revision (1, 2, 2.1), or for
  Bangle.js it's 1 or 2
* `STORAGE` - memory in bytes dedicated to the `Storage` module
* `SERIAL` - the serial number of this chip
* `CONSOLE` - the name of the current console device being used (`Serial1`,
  `USB`, `Bluetooth`, etc)
* `MODULES` - a list of built-in modules separated by commas
* `EXPTR` - The address of the `exportPtrs` structure in flash (this includes
  links to built-in functions that compiled JS code needs)
* `APP_RAM_BASE` - On nRF5x boards, this is the RAM required by the Softdevice
  *if it doesn't exactly match what was allocated*. You can use this to update
  `LD_APP_RAM_BASE` in the `BOARD.py` file

For example, to get a list of built-in modules, you can use
`process.env.MODULES.split(',')`

> **Note:** `process.env` is not writeable - so as not to waste RAM, the contents
are generated on demand. If you need to be able to change them, use `process.env=process.env;`
first to ensure the values stay allocated.

### process.memory(gc)

::i-chinese{sha="d9bf18f228f01d98529937700128517d064697e8920562815750e323820771c3"}
::
Run a Garbage Collection pass, and return an object containing information on
memory usage.

* `free` : Memory that is available to be used (in blocks)
* `usage` : Memory that has been used (in blocks)
* `total` : Total memory (in blocks)
* `history` : Memory used for command history - that is freed if memory is low.
  Note that this is INCLUDED in the figure for 'free'
* `gc` : Memory freed during the GC pass
* `gctime` : Time taken for GC pass (in milliseconds)
* `blocksize` : Size of a block (variable) in bytes

Memory units are specified in 'blocks', which are around 16 bytes each (depending on your device). 
* `stackEndAddress` : (on ARM) the address (that can be used with peek/poke/etc)
  of the END of the stack. The stack grows down, so unless you do a lot of
  recursion the bytes above this can be used.
* `stackFree` : (on ARM) how many bytes of free execution stack are there
  at the point of execution.
* `flash_start` : (on ARM) the address of the start of flash memory (usually
  `0x8000000`)
* `flash_binary_end` : (on ARM) the address in flash memory of the end of
  Espruino's firmware.
* `flash_code_start` : (on ARM) the address in flash memory of pages that store
  any code that you save with `save()`.
* `flash_length` : (on ARM) the amount of flash memory this firmware was built
  for (in bytes). **Note:** Some STM32 chips actually have more memory than is
  advertised.

Memory units are specified in 'blocks', which are around 16 bytes each
(depending on your device). The actual size is available in `blocksize`. See
http://www.espruino.com/Performance for more information.

> **Note:** To find free areas of flash memory, see `require('Storage').getFree()`

### process.on("uncaughtException",listener)

::i-chinese{sha="4fa73bfb6ffaa363760162820010f1c5d94545a2438a5dea5b0019e325aca57f"}
::
This event is called when an exception gets thrown and isn't caught (e.g. it gets
all the way back to the event loop).

You can use this for logging potential problems that might occur during
execution when you might not be able to see what is written to the console, for
example:

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
