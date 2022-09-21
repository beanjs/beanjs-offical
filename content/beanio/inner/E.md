---
title: E
category: 'inner'
tags: [object]
---

<!--41--> 

### E.CRC32(data)

::i-chinese{sha="5999ddd22053c00487dfa95e09a12e195159fc76d23bce02ca2475dbfe1a072d"}
::
Perform a standard 32 bit CRC (Cyclic redundancy check) on the supplied data (one byte at a time)
and return the result as an unsigned integer.

### E.FFT(arrReal,arrImage,inverse)

::i-chinese{sha="20c2d919068a7093030bcf6e33ef05f88e5f096664586bce7464902de2890439"}
::
Performs a Fast Fourier Transform (FFT) in 32 bit floats on the supplied data and writes it back into the
original arrays. Note that if only one array is supplied, the data written back is the modulus of the complex
result `sqrt(r*r+i*i)`.

In order to perform the FFT, there has to be enough room on the stack to allocate two arrays of 32 bit
floating point numbers - this will limit the maximum size of FFT possible to around 1024 items on
most platforms.

> **Note:** on the Original Espruino board, FFTs are performed in 64bit arithmetic as there isn't
space to include the 32 bit maths routines (2x more RAM is required).

### E.HSBtoRGB(hue,sat,bri,asArray)

::i-chinese{sha="4b8b9011e257f8d30e51898c193edfbdaf341ab39c43915e19029a583cb2a016"}
::
Convert hue, saturation and brightness to red, green and blue (packed into an integer if `asArray==false` or an array if `asArray==true`).

This replaces `Graphics.setColorHSB` and `Graphics.setBgColorHSB`. On devices with 24 bit colour it can
be used as: `Graphics.setColor(E.HSBtoRGB(h, s, b))`

You can quickly set RGB items in an Array or Typed Array using `array.set(E.HSBtoRGB(h, s, b,true), offset)`,
which can be useful with arrays used with `require("neopixel").write`.

### E.clip(x,min,max)

::i-chinese{sha="112b7199c11e159cdac286719b048a9c2b275be57878583d2c9b366785533742"}
::
Clip a number to be between min and max (inclusive)

### E.convolve(arr1,arr2,offset)

::i-chinese{sha="3c5f1704b9dc18ce3e4f2131cfb697431772e1199b8d3520623661a62031e69f"}
::
Convolve arr1 with arr2. This is equivalent to 
```javascript
var v=0;
for (i in arr1){
  v+=arr1[i] * arr2[(i+offset) % arr2.length]
}
```

### E.defrag()

::i-chinese{sha="1874bae5fefdcc131696e25c7642d0c5c70c84f4c4b932ee185122e6336af63c"}
::
BETA: defragment memory!

### E.enableWatchdog(timeout,isAuto)

::i-chinese{sha="894df21825e89000bb8d655364c112e96d572dcbd27799bd1c2a57c3acbe0123"}
::
Enable the watchdog timer. This will reset Espruino if it isn't able to return to the idle loop within the timeout.

If `isAuto` is false, you must call `E.kickWatchdog()` yourself every so often or the chip will reset.

```javascript
E.enableWatchdog(0.5); // automatic mode                                                        
while(1); // Espruino will reboot because it has not been idle for 0.5 sec
```

```javascript
E.enableWatchdog(1, false);                                                         
setInterval(function() {
  if (everything_ok)
    E.kickWatchdog();
}, 500);
// Espruino will now reset if everything_ok is false,
// or if the interval fails to be called 
```

> **NOTE:** This is only implemented on STM32 and nRF5x devices.

> **NOTE:** On STM32 with `setDeepSleep(1)` you need to explicitly wake Espruino up with an interval of less than the watchdog timeout or the watchdog will fire and
the board will reboot. You can do this with `setInterval("", time_in_milliseconds)`.

### E.on("errorFlag",listener)

::i-chinese{sha="8431b287f7c0b02bf7129fbe0f9972660c3c4749532950f029d25d5e30d68464"}
::
This event is called when an error is created by Espruino itself (rather
than JS code) which changes the state of the error flags reported by
`E.getErrorFlags()`

This could be low memory, full buffers, UART overflow, etc. `E.getErrorFlags()`
has a full description of each type of error.

This event will only be emitted when error flag is set. If the error
flag was already set nothing will be emitted. To clear error flags
so that you do get a callback each time a flag is set, call `E.getErrorFlags()`.

### E.getAddressOf(v,flatAddress)

::i-chinese{sha="c6f2d39684952ee2911d04c091d77dfdd4dd3f503a024d2e410e8e4b1e3ac730"}
::
Return the address in memory of the given variable. This can then
be used with `peek` and `poke` functions. However, changing data in
JS variables directly (flatAddress=false) will most likely result in a crash.

This functions exists to allow embedded targets to set up
peripherals such as DMA so that they write directly to
JS variables.

### E.getAnalogVRef()

::i-chinese{sha="bc0411a88662bf4cc6de146db8c7f08b72c3dc5c631692bb7bf463ccaa508e57"}
::
Check the internal voltage reference. To work out an actual voltage of an input pin, you can use `analogRead(pin)*E.getAnalogVRef()`

> **Note:** This value is calculated by reading the voltage on an internal voltage reference with the ADC.
It will be slightly noisy, so if you need this for accurate measurements we'd recommend that you call
this function several times and average the results.

While this is implemented on Espruino boards, it may not be implemented on other devices. If so it'll return NaN.

### E.getConsole()

::i-chinese{sha="39cdcd74e2d19bc74c26032f67026269d3b8b6bce922080805ba6286ba363332"}
::
Returns the current console device - see `E.setConsole` for more information.

### E.getErrorFlags()

::i-chinese{sha="0f97c773e98ff1a94b3c5b206b0c648e74fff6409f341222603bcb38311b8d26"}
::
Get and reset the error flags. Returns an array that can contain:

`'FIFO_FULL'`: The receive FIFO filled up and data was lost. This could be state transitions for setWatch, or received characters.

`'BUFFER_FULL'`: A buffer for a stream filled up and characters were lost. This can happen to any stream - Serial,HTTP,etc.

`'CALLBACK'`: A callback (`setWatch`, `setInterval`, `on('data',...)`) caused an error and so was removed.

`'LOW_MEMORY'`: Memory is running low - Espruino had to run a garbage collection pass or remove some of the command history

`'MEMORY'`: Espruino ran out of memory and was unable to allocate some data that it needed.

`'UART_OVERFLOW'` : A UART received data but it was not read in time and was lost

### E.getFlags()

::i-chinese{sha="f53dd89f660c8358a6cf5d858c9d66f43b9d3a28bd2bdb15c17d12d92e549214"}
::
Get Espruino's interpreter flags that control the way it handles your JavaScript code.

* `deepSleep` - Allow deep sleep modes (also set by setDeepSleep)
* `pretokenise` - When adding functions, pre-minify them and tokenise reserved words
* `unsafeFlash` - Some platforms stop writes/erases to interpreter memory to stop you bricking the device accidentally - this removes that protection
* `unsyncFiles` - When writing files, *don't* flush all data to the SD card after each command (the default is *to* flush). This is much faster, but can cause filesystem damage if power is lost without the filesystem unmounted.

### E.getSizeOf(v,depth)

::i-chinese{sha="7aa3763ef34c6253a588cdbfc4758d109d0bd1ec894ae897370f2d19c109ca4f"}
::
Return the number of variable blocks used by the supplied variable. This is
useful if you're running out of memory and you want to be able to see what
is taking up most of the available space.

If `depth>0` and the variable can be recursed into, an array listing all property
names (including internal Espruino names) and their sizes is returned. If
`depth>1` there is also a `more` field that inspects the objects's children's
children.

For instance `E.getSizeOf(function(a,b) { })` returns `5`.

But `E.getSizeOf(function(a,b) { }, 1)` returns:

```json
 [
  {
    "name": "a",
    "size": 1 },
  {
    "name": "b",
    "size": 1 },
  {
    "name": "\xFFcod",
    "size": 2 }
 ]
```

In this case setting depth to `2` will make no difference as there are
no more children to traverse.

### E.getTemperature()

::i-chinese{sha="8b4222cdfb5f03c9eec836c9e964dd8c49f51b5c00073bb7d0840dececbf406a"}
::
Use the microcontroller's internal thermistor to work out the temperature.

### E.hwRand()

::i-chinese{sha="e815d28d7a07b25b68478393f96875db49cd8bb50c51fa5748939409832f042f"}
::
Unlike 'Math.random()' which uses a pseudo-random number generator, this
method reads from the internal voltage reference several times, xoring and
rotating to try and make a relatively random value from the noise in the
signal.

### E.on("init",listener)

::i-chinese{sha="4d859035cdc149812dbd39047f983feb624446edbc7255bfca80b3822b9fff8a"}
::
This event is called right after the board starts up, and has a similar effect
to creating a function called `onInit`.

For example to write `"Hello World"` every time Espruino starts, use:

```javascript
E.on('init', function() {
  console.log("Hello World!");
});
```

> **Note:** that subsequent calls to `E.on('init', ` will **add** a new handler,
rather than replacing the last one. This allows you to write modular code -
something that was not possible with `onInit`.

### E.interpolate(array,index)

::i-chinese{sha="aaf57319d9d2909ae85502543268b0a942ac058d562efc1190432e0db6e50bb7"}
::
Interpolate between two adjacent values in the Typed Array

### E.interpolate2d(array,width,x,y)

::i-chinese{sha="4484ae4f9d23a04f2c52311343e47538728b52b5f040a0dc1f786e8fd98a8a13"}
::
Interpolate between four adjacent values in the Typed Array, in 2D.

### E.kickWatchdog()

::i-chinese{sha="d5d48190a65e71f45f7b998b1b893e25fb6b5a04718e87b368a18bc83e187632"}
::
Kicks a Watchdog timer set up with `E.enableWatchdog(..., false)`. See
`E.enableWatchdog` for more information.

> **NOTE:** This is only implemented on STM32 and nRF5x devices.

### E.on("kill",listener)

::i-chinese{sha="86042c5a410f3b23084736bb10a41b2b53f82b55ee101b383625e9b459c09555"}
::
This event is called just before the device shuts down for commands such as
`reset()`, `load()`, `save()`, `E.reboot()` 

For example to write `"Bye!"` just before shutting down use:

```javascript
E.on('kill', function() {
  console.log("Bye!");
});
```

> **NOTE:** This event is not called when the device is 'hard reset' - for
example by removing power, hitting an actual reset button, or via
a Watchdog timer reset.

### E.lockConsole()

::i-chinese{sha="bee1983c4d6769eca27dff5ae2c36932c38412101968c1c740a88c2fa377d967"}
::
If a password has been set with `E.setPassword()`, this will lock the console
so the password needs to be entered to unlock it.

### E.lookupNoCase(haystack,needle,returnKey)

::i-chinese{sha="e9e997f7f3c2e0c578832677b4bff93dbc5870681f7a6913be34b3780008706f"}
::
Search in an Object, Array, or Function

### E.mapInPlace(from,to,map,bits)

::i-chinese{sha="712ef9fa3ec4852b91af8b62858095bb7dbd05d067fa9d4b4fa7e2883eb18116"}
::
Take each element of the `from` array, look it up in `map` (or call `map(value,index)` 
if it is a function), and write it into the corresponding
element in the `to` array.

You can use an array to map:

```javascript
var a = new Uint8Array([1,2,3,1,2,3]);
var lut = new Uint8Array([128,129,130,131]);
E.mapInPlace(a, a, lut);
// a = [129, 130, 131, 129, 130, 131]
```

Or `undefined` to pass straight through, or a function to do a normal 'mapping':

```javascript
var a = new Uint8Array([0x12,0x34,0x56,0x78]);
var b = new Uint8Array(8);
E.mapInPlace(a, b, undefined); // straight through
// b = [0x12,0x34,0x56,0x78,0,0,0,0]
E.mapInPlace(a, b, (value,index)=>index); // write the index in the first 4 (because a.length==4)
// b = [0,1,2,3,4,0,0,0]
E.mapInPlace(a, b, undefined, 4); // 4 bits from 8 bit input -> 2x as many outputs, msb-first
// b = [1, 2, 3, 4, 5, 6, 7, 8]
 E.mapInPlace(a, b, undefined, -4); // 4 bits from 8 bit input -> 2x as many outputs, lsb-first
// b = [2, 1, 4, 3, 6, 5, 8, 7]
E.mapInPlace(a, b, a=>a+2, 4);
// b = [3, 4, 5, 6, 7, 8, 9, 10]
var b = new Uint16Array(4);
E.mapInPlace(a, b, undefined, 12); // 12 bits from 8 bit input, msb-first
// b = [0x123, 0x456, 0x780, 0]
E.mapInPlace(a, b, undefined, -12); // 12 bits from 8 bit input, lsb-first
// b = [0x412, 0x563, 0x078, 0]
```

### E.memoryMap(baseAddress,registers)

::i-chinese{sha="86d27740fa54190e2d159a4643782d2891e92752542859013a00e7e4075ed381"}
::
Create an object where every field accesses a specific 32 bit address in the microcontroller's memory. This
is perfect for accessing on-chip peripherals.

```javascript
// for NRF52 based chips
var GPIO = E.memoryMap(0x50000000,{OUT:0x504, OUTSET:0x508, OUTCLR:0x50C, IN:0x510, DIR:0x514, DIRSET:0x518, DIRCLR:0x51C});
GPIO.DIRSET = 1; // set GPIO0 to output
GPIO.OUT ^= 1; // toggle the output state of GPIO0
```

### E.pipe(source,destination,options)

### E.reboot()

::i-chinese{sha="c4ca5caaa25a387f3740613b727021293ea210c205c37343547c8ce779d6fb81"}
::
Forces a hard reboot of the microcontroller - as close as possible
to if the reset pin had been toggled.

> **Note:** This is different to `reset()`, which performs a software
reset of Espruino (resetting the interpreter and pin states, but not
all the hardware)

### E.reverseByte(x)

::i-chinese{sha="1505c8089ff4fcf3fd25cfa007fa2e382356f4b0a55918d525588b3afbb1dc2b"}
::
Reverse the 8 bits in a byte, swapping MSB and LSB.

For example, `E.reverseByte(0b10010000) == 0b00001001`.

> **Note:** that you can reverse all the bytes in an array with: `arr = arr.map(E.reverseByte)`

### E.setBootCode(code,alwaysExec)

::i-chinese{sha="1459a27e8cb1f7bb97213e98c67bad05765ed06e069bc0cb67345d31b3a1ce24"}
::
This writes JavaScript code into Espruino's flash memory, to be executed on
startup. It differs from `save()` in that `save()` saves the whole state of
the interpreter, whereas this just saves JS code that is executed at boot.

Code will be executed before `onInit()` and `E.on('init', ...)`.

If `alwaysExec` is `true`, the code will be executed even after a call to
`reset()`. This is useful if you're making something that you want to
program, but you want some code that is always built in (for instance
setting up a display or keyboard).

To remove boot code that has been saved previously, use `E.setBootCode("")`

> **Note:** this removes any code that was previously saved with `save()`

### E.setClock(options)

::i-chinese{sha="15e643b9ca49f7c1c9d70b3cd1bf24966e77583af0f6b3979e984c4b61a7d353"}
::
This sets the clock frequency of Espruino's processor. It will return `0` if
it is unimplemented or the clock speed cannot be changed.

> **Note:** On pretty much all boards, UART, SPI, I2C, PWM, etc will change
frequency and will need setting up again in order to work.

STM32F4 Options is of the form `{ M: int, N: int, P: int, Q: int }` - see the `Clocks`
section of the microcontroller's reference manual for what these mean.

* System clock = 8Mhz * N / ( M * P )
* USB clock (should be 48Mhz) = 8Mhz * N / ( M * Q )

Optional arguments are:

* `latency` - flash latency from 0..15
* `PCLK1` - Peripheral clock 1 divisor (default: 2)
* `PCLK2` - Peripheral clock 2 divisor (default: 4)

The Pico's default is `{M:8, N:336, P:4, Q:7, PCLK1:2, PCLK2:4}`, use
`{M:8, N:336, P:8, Q:7, PCLK:1, PCLK2:2}` to halve the system clock speed
while keeping the peripherals running at the same speed (omitting PCLK1/2
will lead to the peripherals changing speed too).

On STM32F4 boards (eg. Espruino Pico), the USB clock needs to be kept at 48Mhz
or USB will fail to work. You'll also experience USB instability if the processor
clock falls much below 48Mhz.

ESP8266 Just specify an integer value, either 80 or 160 (for 80 or 160Mhz)

### E.setConsole(device,options)

::i-chinese{sha="f7de90664fd0a2df5333eadb6f615a33f8276a3e2a419f3387a09bb397562f6d"}
::
Changes the device that the JS console (otherwise known as the REPL)
is attached to. If the console is on a device, that
device can be used for programming Espruino.

Rather than calling `Serial.setConsole` you can call
`E.setConsole("DeviceName")`.

This is particularly useful if you just want to
remove the console. `E.setConsole(null)` will
make the console completely inaccessible.

`device` may be `"Serial1"`,`"USB"`,`"Bluetooth"`,`"Telnet"`,`"Terminal"`,
any other *hardware* `Serial` device, or `null` to disable the console completely.

`options` is of the form:

```javascript
{
  force : bool // default false, force the console onto this device so it does not move
               //   if false, changes in connection state (eg USB/Bluetooth) can move
               //   the console automatically.
}
```

### E.setFlags(flags)

::i-chinese{sha="50a61ee05f3b9386bbd6bee1b7b880ab22f624d1d222b9003709d32bf186106c"}
::
Set the Espruino interpreter flags that control the way it handles your JavaScript code.

Run `E.getFlags()` and check its description for a list of available flags and their values.

### E.setPassword(password)

::i-chinese{sha="92297b5da3661cc2d922c157c28aa69cac6c77decfa392bd2b98b5acaf10993b"}
::
Set a password on the console (REPL). When powered on, Espruino will
then demand a password before the console can be used. If you want to
lock the console immediately after this you can call `E.lockConsole()`

To remove the password, call this function with no arguments.

> **Note:** There is no protection against multiple password attempts, so someone
could conceivably try every password in a dictionary.

> **Note:** This password is stored in memory in plain text. If someone is able
to execute arbitrary JavaScript code on the device (eg, you use `eval` on input
from unknown sources) or read the device's firmware then they may be able to
obtain it.

### E.setTimeZone(zone)

::i-chinese{sha="b9adef105639134d5ea54ab08e02b502349f3a3c258437f9a4087a423ad799ce"}
::
Set the time zone to be used with `Date` objects.
For example `E.setTimeZone(1)` will be GMT+0100.
Time can be set with `setTime`.

### E.srand(v)

::i-chinese{sha="709e3efd55ce9b08fb16a205d182a05f02da83fc47babc121ad387f81d57066d"}
::
Set the seed for the random number generator used by `Math.random()`.

### E.sum(arr)

::i-chinese{sha="b5189208f8e16bed46f2da2336080e1c6e9ca0681bcf3be755226699ae55981e"}
::
Sum the contents of the given Array, String or ArrayBuffer and return the result

### E.toArrayBuffer(str)

::i-chinese{sha="d278efdd426bcb14555cc2dec33001c82facbe4d9f841aca460afdfd18614f50"}
::
Create an ArrayBuffer from the given string. This is done via a reference, not a copy - so it is very fast and memory efficient.

> **Note:** that this is an ArrayBuffer, not a Uint8Array. To get one of those, do: `new Uint8Array(E.toArrayBuffer('....'))`.

### E.toJS(arg)

::i-chinese{sha="0ba6b2268ef00b89dc92d8e4dbb7233f2dbf41577003399fc0692822e3f9d7dd"}
::
This performs the same basic function as `JSON.stringify`,
however `JSON.stringify` adds extra characters to conform
to the JSON spec which aren't required if outputting JS.

`E.toJS` will also stringify JS functions, whereas
`JSON.stringify` ignores them.

For example:

* `JSON.stringify({a:1,b:2}) == '{"a":1,"b":2}'`
* `E.toJS({a:1,b:2}) == '{a:1,b:2}'`

> **Note:** Strings generated with `E.toJS` can't be
reliably parsed by `JSON.parse` - however they are
valid JS so will work with `eval` (but this has security
implications if you don't trust the source of the string).

On the desktop [JSON5 parsers](https://github.com/json5/json5)
will parse the strings produced by `E.toJS` without trouble.

### E.toString(args)

::i-chinese{sha="689d2ee7b567f495f69a1f8d7896e3b49cc250962027789a9066712c49f4eeb1"}
::
Returns a 'flat' string representing the data in the arguments, or return `undefined`
if a flat string cannot be created.

This creates a string from the given arguments. If an argument is a String or an Array,
each element is traversed and added as an 8 bit character. If it is anything else, it is
converted to a character directly.

In the case where there's one argument which is an 8 bit typed array backed by a
flat string of the same length, the backing string will be returned without doing
a copy or other allocation. The same applies if there's a single argument which
is itself a flat string.

### E.toUint8Array(args)

::i-chinese{sha="cfc4ca7d6371dba19493f4d9c060bbf5bd92a65b91902a2369713c2d8c0d0f36"}
::
This creates a Uint8Array from the given arguments. These are handled as follows:

 * `Number` -> read as an integer, using the lowest 8 bits
 * `String` -> use each character's numeric value (eg. `String.charCodeAt(...)`)
 * `Array` -> Call itself on each element
 * `ArrayBuffer` or Typed Array -> use the lowest 8 bits of each element
 * `Object`:
   * `{data:..., count: int}` -> call itself `object.count` times, on `object.data`
   * `{callback : function}` -> call the given function, call itself on return value

For example:

```javascript
E.toUint8Array([1,2,3])
=new Uint8Array([1, 2, 3])
E.toUint8Array([1,{data:2,count:3},3])
=new Uint8Array([1, 2, 2, 2, 3])
E.toUint8Array("Hello")
=new Uint8Array([72, 101, 108, 108, 111])
E.toUint8Array(["hi",{callback:function() { return [1,2,3] }}])
=new Uint8Array([104, 105, 1, 2, 3])
```

### E.variance(arr,mean)

::i-chinese{sha="af43e3d835ae07f082f07e6c2d2710d1f700155d4854ad3a13c917e27142df87"}
::
Work out the variance of the contents of the given Array, String or ArrayBuffer and return the result. This is equivalent to 
```javascript
var v=0;
for (i in arr){ 
  v+=Math.pow(mean-arr[i],2)
}
```
