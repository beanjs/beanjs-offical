---
title: SPI
category: 'inner'
tags: [object]
---

<!--constructor--> 

### SPI.constructor()

::i-chinese{sha="624ab83153d7e9265d3a2935cf086460feee3be4e4b1d3874124c7613a49c211"}
::
Create a software SPI port. This has limited functionality (no baud rate), but it can work on any pins.
Use `SPI.setup` to configure this port.

<!--1--> 

### SPI.find(pin)

::i-chinese{sha="6d0df5644db876eebf525c060e03a0cfc46e9044dfd31a4d265a07635f1bdeb1"}
::
Try and find an SPI hardware device that will work on this pin (eg. `SPI1`)
May return `undefined` if no device can be found.

<!--5--> 

### SPI.prototype.send(data,nss_pin)

::i-chinese{sha="1dc50d20b1c63aa27dc26faa6d4dbeecb67ee09b9efa71ce62ca79e98eb8763c"}
::
Send data down SPI, and return the result. Sending an integer will return an integer, a String will return a String, and anything else will return a Uint8Array.

Sending multiple bytes in one call to send is preferable as they can then be transmitted end to end. Using multiple calls to send() will result in significantly slower transmission speeds.

For maximum speeds, please pass either Strings or Typed Arrays as arguments. Note that you can even pass arrays of arrays, like `[1,[2,3,4],5]`

### SPI.prototype.send4bit(data,bit0,bit1,nss_pin)

::i-chinese{sha="7ae41fe030aff589e0204094243522ac93f593a9610ec31c0334b5a3ffb78378"}
::
Send data down SPI, using 4 bits for each 'real' bit (MSB first). This can be useful for faking one-wire style protocols

Sending multiple bytes in one call to send is preferable as they can then be transmitted end to end. Using multiple calls to send() will result in significantly slower transmission speeds.

### SPI.prototype.send8bit(data,bit0,bit1,nss_pin)

::i-chinese{sha="b213cff222d8b4dba7419cce84d5fd264da8dca65c01f0fcb161bde06b73b6f2"}
::
Send data down SPI, using 8 bits for each 'real' bit (MSB first). This can be useful for faking one-wire style protocols

Sending multiple bytes in one call to send is preferable as they can then be transmitted end to end. Using multiple calls to send() will result in significantly slower transmission speeds.

### SPI.prototype.setup(options)

::i-chinese{sha="dbb09875f7a776a08eda8dfafca046fa3350210c6187274f1e994ddaf392460a"}
::
Set up this SPI port as an SPI Master.

Options can contain the following (defaults are shown where relevant):

```javascript
var option = {
  sck:pin, 
  miso:pin, 
  mosi:pin, 
  baud:integer=100000, // ignored on software SPI
  mode:integer=0, // between 0 and 3
  order:string='msb' // can be 'msb' or 'lsb' 
  bits:8 // only available for software SPI
}
```

If `sck`,`miso` and `mosi` are left out, they will automatically be chosen. However if one or more is specified then the unspecified pins will not be set up.

Some boards such as those based on `nRF52` chips can have SPI on any pins, so don't have specific markings.

The SPI `mode` is between 0 and 3 - see [SPI Bus](http://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus#Clock_polarity_and_phase)

On STM32F1-based parts, you cannot mix AF and non-AF pins (SPI pins are usually grouped on the chip - and you can't mix pins from two groups). Espruino will not warn you about this.

### SPI.prototype.write(data)

::i-chinese{sha="a6aecc7352c767dcb0d94f129af54341240de45d78893498e26c84df8ad78e5b"}
::
Write a character or array of characters to SPI - without reading the result back.
For maximum speeds, please pass either Strings or Typed Arrays as arguments.
