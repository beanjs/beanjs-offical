---
title: OneWire
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--1--> 

### OneWire.constructor(pin)

::i-chinese{sha="dc7688061ae15748730a855ee1e341e2bb88e067f8908a6da231685b6247b764"}
::
Create a software OneWire implementation on the given pin

<!--7--> 

### OneWire.prototype.read(count)

::i-chinese{sha="31663eab4e09bcb6f021c81759f8580ae1a8ebc3e49bc354eb68d313fd48b735"}
::
Read a byte

### OneWire.prototype.reset()

::i-chinese{sha="a8d9352157b0d3be7eb36df34e7868c6fd4810bb83ba58ee3eca6d8ae372dc00"}
::
Perform a reset cycle

### OneWire.prototype.search()

::i-chinese{sha="6eb27d1a752cc4f9b7d6804fcb55c016abd9dac90dba637248e15fb23fd90e80"}
::
Search for devices

### OneWire.prototype.search(command)

::i-chinese{sha="6eb27d1a752cc4f9b7d6804fcb55c016abd9dac90dba637248e15fb23fd90e80"}
::
Search for devices

### OneWire.prototype.select(rom)

::i-chinese{sha="b4458e5a3142022f7ff6071aa34a187486a5c1c11012075aee98696fdf145f74"}
::
Select a ROM - always performs a reset first

### OneWire.prototype.skip()

::i-chinese{sha="b14dc46fa1dc69c4cf4016956a972bd0ded9b9063198b74e1ae7dda4a93e33d1"}
::
Skip a ROM

### OneWire.prototype.write(data,power)

::i-chinese{sha="589ae72b65e50a318f0ddcff40d6e4fd67ed9ad66601138683904c98faa0c6bc"}
::
Write one or more bytes
