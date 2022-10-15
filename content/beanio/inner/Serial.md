---
title: Serial
category: 'inner'
tags: [object]
---

<!--constructor--> 

### Serial.constructor()

::i-chinese{sha="19e7ce0232efca24e4c7af2cafcb808c4de6c5ca8e89892c0d7eb3bd59374020"}
::
Create a software Serial port. This has limited functionality (only low baud rates), but it can work on any pins.
Use `Serial.setup` to configure this port.

<!--4--> 

### Serial.on("data",listener)

::i-chinese{sha="4a7b21738316fc64d590bbbbe0b755a92813f5179acde78adf946746a6c347b6"}
::
The `data` event is called when data is received. If a handler is defined with
`X.on('data', function(data) { ... })` then it will be called, otherwise data
will be stored in an internal buffer, where it can be retrieved with `X.read()`

### Serial.find(pin)

::i-chinese{sha="c51c581150aab228c030c9a269e5857c70fcb90f3c1ea338715ebf284f51768d"}
::
Try and find a USART (Serial) hardware device that will work on this pin (eg. `Serial1`)
May return `undefined` if no device can be found.

### Serial.on("framing",listener)

::i-chinese{sha="e37f679b8479534f6bcf17233955f7c0934f90b38be6332c9d7261063d3e8e34"}
::
The `framing` event is called when there was activity on the input to the UART
but the `STOP` bit wasn't in the correct place. This is either because there was
noise on the line, or the line has been pulled to 0 for a long period of time.

To enable this, you must initialise Serial with `SerialX.setup(..., { ...,
errors:true });`

> **Note:** Even though there was an error, the byte will still be received and
passed to the `data` handler.

> **Note:** This only works on STM32 and NRF52 based devices (eg. all official Espruino boards)

### Serial.on("parity",listener)

::i-chinese{sha="43f7325e828f5a095ef911aaf84da5d77502fda5d0e30a78cae000d296fd3b34"}
::
The `parity` event is called when the UART was configured with a parity bit, and
this doesn't match the bits that have actually been received.

To enable this, you must initialise Serial with `SerialX.setup(..., { ...,
errors:true });`

> **Note:** Even though there was an error, the byte will still be received and
passed to the `data` handler.

> **Note:** This only works on STM32 and NRF52 based devices (eg. all official Espruino boards)

<!--10--> 

### Serial.prototype.available()

::i-chinese{sha="a4579e09bc7ffbb7cefa71c72bfbd9eb14d20a8366dfca70377b249edb03afad"}
::
Return how many bytes are available to read. If there is already a listener for
data, this will always return 0.

### Serial.prototype.inject(data)

::i-chinese{sha="08d0ba01b748a976eb7d0250891e451eac87b9817023e8b5a478836a1681b82f"}
::
Add data to this device as if it came directly from the input - it will be
returned via `serial.on('data', ...)`;

```javascript
Serial1.on('data', function(d) { print("Got",d); });
Serial1.inject('Hello World');
// prints "Got Hel","Got lo World" (characters can be split over multiple callbacks)
```

This is most useful if you wish to send characters to Espruino's REPL (console)
while it is on another device.

### Serial.prototype.pipe(destination,options)

::i-chinese{sha="e9c4b285cda0e4ce597f0fb3781e7d26589ca54693fb7ea1ef15ca8e8836ca4b"}
::
Pipe this USART to a stream (an object with a 'write' method)

### Serial.prototype.print(string)

::i-chinese{sha="db06149e996fdc0abfef8e378152e8af5153137729577c6acea9750e5e5629ff"}
::
Print a string to the serial port - without a line feed

> **Note:** This function replaces any occurances of `\n` in the string with `\r\n`. To avoid this, use `Serial.write`.

### Serial.prototype.println(string)

::i-chinese{sha="8d6c66a6a0802ae4d55ec11151d81926dac29ed89a870f8bd44b24cefd90baa9"}
::
Print a line to the serial port with a newline (`\r\n`) at the end of it.

> **Note:** This function converts data to a string first, eg `Serial.print([1,2,3])` is equivalent to `Serial.print("1,2,3"). If you'd like to write raw bytes, use `Serial.write`.

### Serial.prototype.read(chars)

::i-chinese{sha="08a277b1e6ddaa3dc258707bea8cbe35ff308d8cdbc7fde6476a85b427dbe672"}
::
Return a string containing characters that have been received

### Serial.prototype.setConsole(force)

::i-chinese{sha="aabf245ce1b09a88b12b88f8b0ec3022b9fe7857a67dcc95bb4c0cb5c90f1ede"}
::
Set this Serial port as the port for the JavaScript console (REPL).

Unless `force` is set to true, changes in the connection state of the board (for
instance plugging in USB) will cause the console to change.

See `E.setConsole` for a more flexible version of this function.

### Serial.prototype.setup(baudrate,options)

::i-chinese{sha="1deda929d82a17ae36431592f5c8e60a7b58741d8ffaf31734b7e0eea8c333d6"}
::
Setup this Serial port with the given baud rate and options.

e.g.

```javascript
Serial1.setup(9600,{rx:a_pin, tx:a_pin});
```

The second argument can contain:

```javascript
var option = {
  rx:pin,                           // Receive pin (data in to Espruino)
  tx:pin,                           // Transmit pin (data out of Espruino)
  ck:pin,                           // (default none) Clock Pin
  cts:pin,                          // (default none) Clear to Send Pin
  bytesize:8,                       // (default 8)How many data bits - 7 or 8
  parity:null/'none'/'o'/'odd'/'e'/'even', 
                                    // (default none) Parity bit
  stopbits:1,                       // (default 1) Number of stop bits to use
  flow:null/undefined/'none'/'xon', // (default none) software flow control
  path:null/undefined/string        // Linux Only - the path to the Serial device to use
  errors:false                      // (default false) whether to forward framing/parity errors
}
```

If not specified in options, the default pins are used for rx and tx
(usually the lowest numbered pins on the lowest port that supports 
this peripheral). `ck` and `cts` are not used unless specified.

Note that even after changing the RX and TX pins, if you have called setup
before then the previous RX and TX pins will still be connected to the Serial
port as well - until you set them to something else using `digitalWrite` or
`pinMode`.

Flow control can be xOn/xOff (`flow:'xon'`) or hardware flow control (receive
only) if `cts` is specified. If `cts` is set to a pin, the pin's value will be 0
when Espruino is ready for data and 1 when it isn't.

By default, framing or parity errors don't create `framing` or `parity` events
on the `Serial` object because storing these errors uses up additional storage
in the queue. If you're intending to receive a lot of malformed data then the
queue might overflow `E.getErrorFlags()` would return `FIFO_FULL`. However if
you need to respond to `framing` or `parity` errors then you'll need to use
`errors:true` when initialising serial.

On Linux builds there is no default Serial device, so you must specify a path to
a device - for instance: `Serial1.setup(9600,{path:"/dev/ttyACM0"})`

You can also set up 'software serial' using code like:

```javascript
var s = new Serial();
s.setup(9600,{rx:a_pin, tx:a_pin});
```

However software serial doesn't use `ck`, `cts`, `parity`, `flow` or `errors`
parts of the initialisation object.

### Serial.prototype.unsetup()

::i-chinese{sha="641d69adafe7bdf1c01b12356380bcde6d34a794141cceb26c9b1d8102f4d9ae"}
::
If the serial (or software serial) device was set up, uninitialise it.

### Serial.prototype.write(data)

::i-chinese{sha="36322619b678f3345ad71200fc2dcb7982d443a96a333438e096a0b3ebd5f355"}
::
Write a character or array of data to the serial port

This method writes unmodified data, e.g. `Serial.write([1,2,3])` is equivalent to
`Serial.write("\1\2\3")`. If you'd like data converted to a string first, use
`Serial.print`.
