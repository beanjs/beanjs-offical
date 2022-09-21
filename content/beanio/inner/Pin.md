---
title: Pin
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--1--> 

### Pin.constructor(value)

::i-chinese{sha="1e4fc6ee65d3f7b8511d7d57328e5c37d107a9ee6e5f9a790c25009e5cf616b5"}
::
Creates a pin from the given argument (or returns undefined if no argument)

<!--9--> 

### Pin.prototype.getInfo()

::i-chinese{sha="faf1b028f85ea4c8ad27fb5224f0e29752672d4665ba65739c0d5936cfd4de04"}
::
Get information about this pin and its capabilities. Of the form:

```javascript
{
  "port"      : "A", // the Pin's port on the chip
  "num"       : 12, // the Pin's number
  "in_addr"   : 0x..., // (if available) the address of the pin's input address in bit-banded memory (can be used with peek)
  "out_addr"  : 0x..., // (if available) the address of the pin's output address in bit-banded memory (can be used with poke)
  "analog"    : { ADCs : [1], channel : 12 }, // If analog input is available
  "functions" : {
    "TIM1":{type:"CH1, af:0},
    "I2C3":{type:"SCL", af:1}
  }
}
```
Will return undefined if pin is not valid.

### Pin.prototype.getMode()

::i-chinese{sha="aa5a08488db895943c59553c9d12e35f766ce8537f7f08dc49afa93dcf3004a9"}
::
Return the current mode of the given pin. See `pinMode` for more information.

### Pin.prototype.mode(mode)

::i-chinese{sha="0b63c7219f72120fae3686059ef281d82301ac03ac017f29ba5e89b3deadfe11"}
::
Set the mode of the given pin. See [`pinMode`](#l__global_pinMode) for more information on pin modes.

### Pin.prototype.read()

::i-chinese{sha="f5a3a584efce609944209581a6bac73b83633fad54d60c670c15431d54e275ba"}
::
Returns the input state of the pin as a boolean.

> **Note:** if you didn't call `pinMode` beforehand then this function will also reset the pin's state to `"input"`

### Pin.prototype.reset()

::i-chinese{sha="718933d203226039c1e4074377acf7390ce0fd78ceda676f228d330513ca2456"}
::
Sets the output state of the pin to a 0

> **Note:** if you didn't call `pinMode` beforehand then this function will also reset the pin's state to `"output"`

### Pin.prototype.set()

::i-chinese{sha="95ae6c548c712366dfe93f2421cfad3b32c0ca66431dcae77b293f4fb840a5a7"}
::
Sets the output state of the pin to a 1

> **Note:** if you didn't call `pinMode` beforehand then this function will also reset the pin's state to `"output"`

### Pin.prototype.toggle()

::i-chinese{sha="80349fe648beaef6813ac2725efd17585a01be44a5b3a8b84519523ef417a6cf"}
::
Toggles the state of the pin from off to on, or from on to off.

> **Note:** if you didn't call `pinMode` beforehand then this function will also reset the pin's state to `"output"`

### Pin.prototype.write(value)

::i-chinese{sha="266369cfce948af2f909dd024442fb725b76aa424212d5a68db1442114718462"}
::
Sets the output state of the pin to the parameter given

> **Note:** if you didn't call `pinMode` beforehand then this function will also reset the pin's state to `"output"`

### Pin.prototype.writeAtTime(value,time)

::i-chinese{sha="64730037cd3996a790bc136b5952a721565dc7655428047d0851785f94521980"}
::
Sets the output state of the pin to the parameter given at the specified time.

> **Note:** this **doesn't** change the mode of the pin to an output. To do that, you need to use `pin.write(0)` or `pinMode(pin, 'output')` first.
