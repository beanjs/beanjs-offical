---
title: Waveform
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--2--> 

### Waveform.constructor(samples,options)

::i-chinese{sha="f41c7b80dba9e3f6d195a7b55d443b117a0790adb1d9978ad2a068be5d4e2393"}
::
Create a waveform class. This allows high speed input and output of waveforms. It has an internal variable called `buffer` (as well as `buffer2` when double-buffered - see `options` below) which contains the data to input/output.

When double-buffered, a `buffer` event will be emitted each time a buffer is finished with (the argument is that buffer). When the recording stops, a `finish` event will be emitted (with the first argument as the buffer).

<!--3--> 

### Waveform.prototype.startInput(output,freq,options)

::i-chinese{sha="4d7853d96a31330958321933bd9730a775f5e987287038258e6c56cb643f4c66"}
::
Will start inputting the waveform on the given pin that supports analog. If not repeating, it'll emit a `finish` event when it is done.

### Waveform.prototype.startOutput(output,freq,options)

::i-chinese{sha="61641eb0150e905607d57c24b0d6483924e78d20b5590ae9a03cfb1f84759a10"}
::
Will start outputting the waveform on the given pin - the pin must have previously been initialised with analogWrite. If not repeating, it'll emit a `finish` event when it is done.

### Waveform.prototype.stop()

::i-chinese{sha="fad3c7868f581987e2262e8205ce13b44777393be2240df5698b13b6f761638c"}
::
Stop a waveform that is currently outputting
