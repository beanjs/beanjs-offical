---
title: E
category: 'inner'
tags: [object]
---

<!--44--> 

### E.CRC32(data)

::i-chinese{sha="36b2135d6314ccab07c06a3dec968635d05fe5d31643e32e18e96f0844317bf9"}
::
Perform a standard 32 bit CRC (Cyclic redundancy check) on the supplied data
(one byte at a time) and return the result as an unsigned integer.

### E.FFT(arrReal,arrImage,inverse)

::i-chinese{sha="bbb49cd4c77e4797398ff9f5e7e66ef0618816893f9829110dae6e9f15ee5ce7"}
::
Performs a Fast Fourier Transform (FFT) in 32 bit floats on the supplied data
and writes it back into the original arrays. Note that if only one array is
supplied, the data written back is the modulus of the complex result
`sqrt(r*r+i*i)`.

In order to perform the FFT, there has to be enough room on the stack to
allocate two arrays of 32 bit floating point numbers - this will limit the
maximum size of FFT possible to around 1024 items on most platforms.

> **Note:** on the Original Espruino board, FFTs are performed in 64bit arithmetic as there isn't
space to include the 32 bit maths routines (2x more RAM is required).

### E.HSBtoRGB(hue,sat,bri,format)

::i-chinese{sha="e470df0412ade9803bf77af9b5ff348e500e175a49061be6aca007b90b845006"}
::
Convert hue, saturation and brightness to red, green and blue (packed into an
integer if `asArray==false` or an array if `asArray==true`).

This replaces `Graphics.setColorHSB` and `Graphics.setBgColorHSB`. On devices
with 24 bit colour it can be used as: `Graphics.setColor(E.HSBtoRGB(h, s, b))`,
or on devices with 26 bit colour use `Graphics.setColor(E.HSBtoRGB(h, s, b, 16))`

You can quickly set RGB items in an Array or Typed Array using
`array.set(E.HSBtoRGB(h, s, b, true), offset)`, which can be useful with arrays
used with `require("neopixel").write`.

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

### E.decodeUTF8(str,lookup,replaceFn)

::i-chinese{sha="ca958b6ae1532071655a1acbe45a09669598f9b3aa5490e3970a28a8b4a804e4"}
::
Decode a UTF8 string.

* Any decoded character less than 256 gets passed straight through
* Otherwise if `lookup` is an array and an item with that char code exists in `lookup` then that is used
* Otherwise if `lookup` is an object and an item with that char code (as lowercase hex) exists in `lookup` then that is used
* Otherwise `replaceFn(charCode)` is called and the result used if `replaceFn` is a function
* If `replaceFn` is a string, that is used
* Or finally if nothing else matches, the character is ignored

For instance:

```
let unicodeRemap = {
  0x20ac:"\u0080", // Euro symbol
  0x2026:"\u0085", // Ellipsis
};
E.decodeUTF8("UTF-8 Euro: \u00e2\u0082\u00ac", unicodeRemap, '[?]') == "UTF-8 Euro: \u0080"
```

### E.defrag()

::i-chinese{sha="1874bae5fefdcc131696e25c7642d0c5c70c84f4c4b932ee185122e6336af63c"}
::
BETA: defragment memory!

### E.dumpFragmentation()

::i-chinese{sha="876f5c029ab62f4e8728a1edda3d68325fdec39d5074b68d70f42d747bf41079"}
::
Show fragmentation.

* ` ` is free space
* `#` is a normal variable
* `L` is a locked variable (address used, cannot be moved)
* `=` represents data in a Flat String (must be contiguous)

### E.dumpTimers()

::i-chinese{sha="7ab8a960cdab5d228a4a063572113f63d70a7448c08509860a29fac60ea43a11"}
::
Output the current list of Utility Timer Tasks - for debugging only

### E.enableWatchdog(timeout,isAuto)

::i-chinese{sha="b4639a018563e6dd168b009519bfde2bd704a19ec98cfea399432cc038f140a9"}
::
Enable the watchdog timer. This will reset Espruino if it isn't able to return
to the idle loop within the timeout.

If `isAuto` is false, you must call `E.kickWatchdog()` yourself every so often
or the chip will reset.

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

::i-chinese{sha="636fc5f8bd186640702e551550d7131757aa85541676cf3986897f31489a78ba"}
::
This event is called when an error is created by Espruino itself (rather than JS
code) which changes the state of the error flags reported by `E.getErrorFlags()`

This could be low memory, full buffers, UART overflow, etc. `E.getErrorFlags()`
has a full description of each type of error.

This event will only be emitted when error flag is set. If the error flag was
already set nothing will be emitted. To clear error flags so that you do get a
callback each time a flag is set, call `E.getErrorFlags()`.

### E.getAddressOf(v,flatAddress)

::i-chinese{sha="535cc88ae96ddeeeb9501e9c5766a0a95dba423c47daff593db2e688639fb1ed"}
::
Return the address in memory of the given variable. This can then be used with
`peek` and `poke` functions. However, changing data in JS variables directly
(flatAddress=false) will most likely result in a crash.

This functions exists to allow embedded targets to set up peripherals such as
DMA so that they write directly to JS variables.

### E.getAnalogVRef()

::i-chinese{sha="41741af79bbb762925855e5713818a044279eacb196f8bb726e9176896a8f010"}
::
Check the internal voltage reference. To work out an actual voltage of an input
pin, you can use `analogRead(pin)*E.getAnalogVRef()`

> **Note:** This value is calculated by reading the voltage on an internal voltage reference with the ADC.
It will be slightly noisy, so if you need this for accurate measurements we'd recommend that you call
this function several times and average the results.

While this is implemented on Espruino boards, it may not be implemented on other
devices. If so it'll return NaN.

### E.getConsole()

::i-chinese{sha="39cdcd74e2d19bc74c26032f67026269d3b8b6bce922080805ba6286ba363332"}
::
Returns the current console device - see `E.setConsole` for more information.

### E.getErrorFlags()

::i-chinese{sha="cb2c8af46e8b37a7a1db44396ca7376f795b9c485f09e08b35572665ff5a8b70"}
::
Get and reset the error flags. Returns an array that can contain:

`'FIFO_FULL'`: The receive FIFO filled up and data was lost. This could be state
transitions for setWatch, or received characters.

`'BUFFER_FULL'`: A buffer for a stream filled up and characters were lost. This
can happen to any stream - Serial,HTTP,etc.

`'CALLBACK'`: A callback (`setWatch`, `setInterval`, `on('data',...)`) caused an
error and so was removed.

`'LOW_MEMORY'`: Memory is running low - Espruino had to run a garbage collection
pass or remove some of the command history

`'MEMORY'`: Espruino ran out of memory and was unable to allocate some data that
it needed.

`'UART_OVERFLOW'` : A UART received data but it was not read in time and was
lost

### E.getFlags()

::i-chinese{sha="e6929605b1c789f619335e97849807e9afaa72361cc6f8b4889b10e1f9b5663d"}
::
Get Espruino's interpreter flags that control the way it handles your JavaScript
code.

* `deepSleep` - Allow deep sleep modes (also set by setDeepSleep)
* `pretokenise` - When adding functions, pre-minify them and tokenise reserved
  words
* `unsafeFlash` - Some platforms stop writes/erases to interpreter memory to
  stop you bricking the device accidentally - this removes that protection
* `unsyncFiles` - When writing files, *don't* flush all data to the SD card
  after each command (the default is *to* flush). This is much faster, but can
  cause filesystem damage if power is lost without the filesystem unmounted.

### E.getSizeOf(v,depth)

::i-chinese{sha="b8bd59b0a7ca4b6541b611a4cbebe3853ce77e59a3691a60055db5628256df12"}
::
Return the number of variable blocks used by the supplied variable. This is
useful if you're running out of memory and you want to be able to see what is
taking up most of the available space.

If `depth>0` and the variable can be recursed into, an array listing all
property names (including internal Espruino names) and their sizes is returned.
If `depth>1` there is also a `more` field that inspects the objects' children's
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

In this case setting depth to `2` will make no difference as there are no more
children to traverse.

### E.getTemperature()

::i-chinese{sha="5d12a2d975e36c840c84050d7bce185ffe6576bb49564c74df01ff45259d948b"}
::
Use the microcontroller's internal thermistor to work out the temperature.

On Puck.js v2.0 this will use the on-board PCT2075TP temperature sensor, but on
other devices it may not be desperately well calibrated.

While this is implemented on Espruino boards, it may not be implemented on other
devices. If so it'll return NaN.

> **Note:** This is not entirely accurate and varies by a few degrees from chip
 to chip. It measures the `die temperature`, so when connected to USB it could
 be reading 10 over degrees C above ambient temperature. When running from
 battery with `setDeepSleep(true)` it is much more accurate though.

### E.hwRand()

::i-chinese{sha="248be90fdcb7a8a6b1d8b404fb828a5b07326ec9fd42cb84a400e2733c6e776a"}
::
Unlike 'Math.random()' which uses a pseudo-random number generator, this method
reads from the internal voltage reference several times, XOR-ing and rotating to
try and make a relatively random value from the noise in the signal.

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

### E.kickWatchdog()

::i-chinese{sha="59de045d2f51bfae18a58ee379fb3673cbb8b35a936f2a7cfcff4774bc1c1839"}
::
Kicks a Watchdog timer set up with `E.enableWatchdog(..., false)`. See
`E.enableWatchdog` for more information.

> **NOTE:** This is only implemented on STM32 and nRF5x devices (all official
Espruino boards).

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

::i-chinese{sha="2a68e49b687a0226dce8b64e5cca5a09390e343e9352b61d3e0d2bff7d4ddc8f"}
::
If a password has been set with `E.setPassword()`, this will lock the console so
the password needs to be entered to unlock it.

### E.lookupNoCase(haystack,needle,returnKey)

::i-chinese{sha="e9e997f7f3c2e0c578832677b4bff93dbc5870681f7a6913be34b3780008706f"}
::
Search in an Object, Array, or Function

### E.mapInPlace(from,to,map,bits)

::i-chinese{sha="19b7f733529b17b91889a9432c8cf9dc8192d7d95148cebd7238253c355fd950"}
::
Take each element of the `from` array, look it up in `map` (or call
`map(value,index)` if it is a function), and write it into the corresponding
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

::i-chinese{sha="dc3ed90888e08f84a8c06fb92504b26c5f1c24faa90a84755e86642602907905"}
::
Create an object where every field accesses a specific 32 bit address in the
microcontroller's memory. This is perfect for accessing on-chip peripherals.

```javascript
// for NRF52 based chips
var GPIO = E.memoryMap(0x50000000,{OUT:0x504, OUTSET:0x508, OUTCLR:0x50C, IN:0x510, DIR:0x514, DIRSET:0x518, DIRCLR:0x51C});
GPIO.DIRSET = 1; // set GPIO0 to output
GPIO.OUT ^= 1; // toggle the output state of GPIO0
```

### E.pipe(source,destination,options)

### E.reboot()

::i-chinese{sha="4916ee2089e8ba23dd8d5a1c9ac006b91e6605bf954b538bbed7679ee2ac9465"}
::
Forces a hard reboot of the microcontroller - as close as possible to if the
reset pin had been toggled.

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

::i-chinese{sha="b46e79ec2ea9f638365c137fb1020ec6c67056c38b9b57748fa853ccc038ce2c"}
::
This writes JavaScript code into Espruino's flash memory, to be executed on
startup. It differs from `save()` in that `save()` saves the whole state of the
interpreter, whereas this just saves JS code that is executed at boot.

Code will be executed before `onInit()` and `E.on('init', ...)`.

If `alwaysExec` is `true`, the code will be executed even after a call to
`reset()`. This is useful if you're making something that you want to program,
but you want some code that is always built in (for instance setting up a
display or keyboard).

To remove boot code that has been saved previously, use `E.setBootCode("")`

> **Note:** this removes any code that was previously saved with `save()`

### E.setClock(options)

::i-chinese{sha="a37099a41f98c9c964aca3c5839ddfacd840771e6b9994ddc29a0fde80069178"}
::
This sets the clock frequency of Espruino's processor. It will return `0` if it
is unimplemented or the clock speed cannot be changed.

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

The Pico's default is `{M:8, N:336, P:4, Q:7, PCLK1:2, PCLK2:4}`, use `{M:8,
N:336, P:8, Q:7, PCLK:1, PCLK2:2}` to halve the system clock speed while keeping
the peripherals running at the same speed (omitting PCLK1/2 will lead to the
peripherals changing speed too).

On STM32F4 boards (e.g. Espruino Pico), the USB clock needs to be kept at 48Mhz
or USB will fail to work. You'll also experience USB instability if the
processor clock falls much below 48Mhz.

ESP8266 Just specify an integer value, either 80 or 160 (for 80 or 160Mhz)

### E.setConsole(device,options)

::i-chinese{sha="a5bc6d4a7ff975a49d7e73dde034fc661f70145d9e19929e019eb6df104588d0"}
::
Changes the device that the JS console (otherwise known as the REPL) is attached
to. If the console is on a device, that device can be used for programming
Espruino.

Rather than calling `Serial.setConsole` you can call
`E.setConsole("DeviceName")`.

This is particularly useful if you just want to remove the console.
`E.setConsole(null)` will make the console completely inaccessible.

`device` may be `"Serial1"`,`"USB"`,`"Bluetooth"`,`"Telnet"`,`"Terminal"`, any
other *hardware* `Serial` device, or `null` to disable the console completely.

`options` is of the form:

```javascript
{
  force : bool // default false, force the console onto this device so it does not move
               //   if false, changes in connection state (e.g. USB/Bluetooth) can move
               //   the console automatically.
}
```

### E.setDST(params)

::i-chinese{sha="4262c5d123d56c8296a5d2c8caf0a0dbd2e012288ca1016d9fe293fef8b5b13e"}
::
Set the daylight savings time parameters to be used with `Date` objects.

The parameters are
- dstOffset: The number of minutes daylight savings time adds to the clock
  (usually 60) - set to 0 to disable DST
- timezone: The time zone, in minutes, when DST is not in effect - positive east
  of Greenwich
- startDowNumber: The index of the day-of-week in the month when DST starts - 0
  for first, 1 for second, 2 for third, 3 for fourth and 4 for last
- startDow: The day-of-week for the DST start calculation - 0 for Sunday, 6 for
  Saturday
- startMonth: The number of the month that DST starts - 0 for January, 11 for
  December
- startDayOffset: The number of days between the selected day-of-week and the
  actual day that DST starts - usually 0
- startTimeOfDay: The number of minutes elapsed in the day before DST starts
- endDowNumber: The index of the day-of-week in the month when DST ends - 0 for
  first, 1 for second, 2 for third, 3 for fourth and 4 for last
- endDow: The day-of-week for the DST end calculation - 0 for Sunday, 6 for
  Saturday
- endMonth: The number of the month that DST ends - 0 for January, 11 for
  December
- endDayOffset: The number of days between the selected day-of-week and the
  actual day that DST ends - usually 0
- endTimeOfDay: The number of minutes elapsed in the day before DST ends

To determine what the `dowNumber, dow, month, dayOffset, timeOfDay` parameters
should be, start with a sentence of the form "DST starts on the last Sunday of
March (plus 0 days) at 03:00". Since it's the last Sunday, we have
startDowNumber = 4, and since it's Sunday, we have startDow = 0. That it is
March gives us startMonth = 2, and that the offset is zero days, we have
startDayOffset = 0. The time that DST starts gives us startTimeOfDay = 3*60.

"DST ends on the Friday before the second Sunday in November at 02:00" would
give us endDowNumber=1, endDow=0, endMonth=10, endDayOffset=-2 and
endTimeOfDay=120.

Using Ukraine as an example, we have a time which is 2 hours ahead of GMT in
winter (EET) and 3 hours in summer (EEST). DST starts at 03:00 EET on the last
Sunday in March, and ends at 04:00 EEST on the last Sunday in October. So
someone in Ukraine might call `E.setDST(60,120,4,0,2,0,180,4,0,9,0,240);`

Note that when DST parameters are set (i.e. when `dstOffset` is not zero),
`E.setTimeZone()` has no effect.

### E.setFlags(flags)

::i-chinese{sha="2979ac6a234b2e84c59a63554aa9e8773e3ecb536e3ef81ade0d11cf2d4ea37f"}
::
Set the Espruino interpreter flags that control the way it handles your
JavaScript code.

Run `E.getFlags()` and check its description for a list of available flags and
their values.

### E.setPassword(password)

::i-chinese{sha="b5cb91a732c16e6e5b7b588877658f3f9ebaa8f32e1a6a7b23d3794ded0bc834"}
::
Set a password on the console (REPL). When powered on, Espruino will then demand
a password before the console can be used. If you want to lock the console
immediately after this you can call `E.lockConsole()`

To remove the password, call this function with no arguments.

> **Note:** There is no protection against multiple password attempts, so someone
could conceivably try every password in a dictionary.

> **Note:** This password is stored in memory in plain text. If someone is able
to execute arbitrary JavaScript code on the device (eg, you use `eval` on input
from unknown sources) or read the device's firmware then they may be able to
obtain it.

### E.setTimeZone(zone)

::i-chinese{sha="95abe921fc65b76c21359347d7d118e0ab36ef96219c2d107f09c2b2436e003a"}
::
Set the time zone to be used with `Date` objects.

For example `E.setTimeZone(1)` will be GMT+0100

Note that `E.setTimeZone()` will have no effect when daylight savings time rules
have been set with `E.setDST()`. The timezone value will be stored, but never
used so long as DST settings are in effect.

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

::i-chinese{sha="0cdba07dcc8d7900289a98d2ac34a72a9a64d86f3bd26342d5882fe1b2e31ab2"}
::
Create an ArrayBuffer from the given string. This is done via a reference, not a
copy - so it is very fast and memory efficient.

> **Note:** that this is an ArrayBuffer, not a Uint8Array. To get one of those, do: `new Uint8Array(E.toArrayBuffer('....'))`.

### E.toJS(arg)

::i-chinese{sha="0125f375d68b2960d518869449da39ebce7f44fa55934d998f58293ab644e2be"}
::
This performs the same basic function as `JSON.stringify`, however
`JSON.stringify` adds extra characters to conform to the JSON spec which aren't
required if outputting JS.

`E.toJS` will also stringify JS functions, whereas `JSON.stringify` ignores
them.

For example:

* `JSON.stringify({a:1,b:2}) == '{"a":1,"b":2}'`
* `E.toJS({a:1,b:2}) == '{a:1,b:2}'`

> **Note:** Strings generated with `E.toJS` can't be
reliably parsed by `JSON.parse` - however they are
valid JS so will work with `eval` (but this has security
implications if you don't trust the source of the string).

On the desktop [JSON5 parsers](https://github.com/json5/json5) will parse the
strings produced by `E.toJS` without trouble.

### E.toString(args)

::i-chinese{sha="b85cbb7f95b34bbca757b6bfe53ef7d7c8fcae81003d5a19e15a8a460dfbae3c"}
::
Returns a 'flat' string representing the data in the arguments, or return
`undefined` if a flat string cannot be created.

This creates a string from the given arguments. If an argument is a String or an
Array, each element is traversed and added as an 8 bit character. If it is
anything else, it is converted to a character directly.

In the case where there's one argument which is an 8 bit typed array backed by a
flat string of the same length, the backing string will be returned without
doing a copy or other allocation. The same applies if there's a single argument
which is itself a flat string.

### E.toUint8Array(args)

::i-chinese{sha="025d397b809786da69791429d2533e5be497b522a83bd97b7117785560c882d1"}
::
This creates a Uint8Array from the given arguments. These are handled as
follows:

 * `Number` -> read as an integer, using the lowest 8 bits
 * `String` -> use each character's numeric value (e.g.
   `String.charCodeAt(...)`)
 * `Array` -> Call itself on each element
 * `ArrayBuffer` or Typed Array -> use the lowest 8 bits of each element
 * `Object`:
   * `{data:..., count: int}` -> call itself `object.count` times, on
     `object.data`
   * `{callback : function}` -> call the given function, call itself on return
     value

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

### E.on("touch",listener)

::i-chinese{sha="431d1267d21f9e61d36dbebb21ad8b03eb8049f8ab0031ba28358e14d8d1ef14"}
::
This event is called when a full touchscreen device on an Espruino is interacted
with.

**Note:** This event is not implemented on Bangle.js because it only has a two
area touchscreen.

To use the touchscreen to draw lines, you could do:

```
var last;
E.on('touch',t=>{
  if (last) g.lineTo(t.x, t.y);
  else g.moveTo(t.x, t.y);
  last = t.b;
});
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
