---
title: I2C
category: 'inner'
tags: [object]
---

<!--constructor--> 

### I2C.constructor()

::i-chinese{sha="026f2390e4f00fb37b18311bab23420f28b6d7ec80f1b29d4537dbbfd4e99660"}
::
Create a software I2C port. This has limited functionality (no baud rate), but it can work on any pins.
Use `I2C.setup` to configure this port.

<!--1--> 

### I2C.find(pin)

::i-chinese{sha="086de71135ddb1e26f0807df646dfc27e634e7263f4963190cdebd671b7dfd77"}
::
Try and find an I2C hardware device that will work on this pin (eg. `I2C1`)
May return `undefined` if no device can be found.

<!--3--> 

### I2C.prototype.readFrom(address,quantity)

::i-chinese{sha="64371576d027766571c1ab55aeb9e42ea7e89ba7aeb8da740bd04b62bccbd8c9"}
::
Request bytes from the given slave device, and return them as a `Uint8Array` (packed array of bytes). This is like using Arduino Wire's requestFrom, available and read functions.  Sends a STOP

### I2C.prototype.setup(options)

::i-chinese{sha="fa08f1be449139ab84acebf6d6a723ad623678ef43238fb473de53b46d2e1988"}
::
Set up this I2C port
If not specified in options, the default pins are used (usually the lowest numbered pins on the lowest port that supports this peripheral)

> **Note**: that 400kHz is the maximum bitrate for most parts.

### I2C.prototype.writeTo(address,data)

::i-chinese{sha="39f5011e89644164d5eb1198ffdff33b429b63d2ddf1c5909fce4e1cca694c05"}
::
Transmit to the slave device with the given address. This is like Arduino's beginTransmission, write, and endTransmission rolled up into one.
