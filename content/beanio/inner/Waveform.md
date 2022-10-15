---
title: Waveform
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--2--> 

### Waveform.constructor(samples,options)

::i-chinese{sha="7ad7dbbc9270f27585480759e39b9a2918fbaa38d999e92a7774e769a029a6fc"}
::
Create a waveform class. This allows high speed input and output of waveforms.
It has an internal variable called `buffer` (as well as `buffer2` when
double-buffered - see `options` below) which contains the data to input/output.

When double-buffered, a `buffer` event will be emitted each time a buffer is finished with (the argument is that buffer). When the recording stops, a `finish` event will be emitted (with the first argument as the buffer).

<!--3--> 

### Waveform.prototype.startInput(output,freq,options)

::i-chinese{sha="bce11241aa8bf9300b839e85b4c17f8a7168beeef51413fcb94ee75b4d71195a"}
::
Will start inputting the waveform on the given pin that supports analog. If not
repeating, it'll emit a `finish` event when it is done.

### Waveform.prototype.startOutput(output,freq,options)

::i-chinese{sha="389ef73737ff6e0f0de8d4a40bb2bc4d811fe4a35c2d502c2085eded091745d7"}
::
Will start outputting the waveform on the given pin - the pin must have
previously been initialised with analogWrite. If not repeating, it'll emit a
`finish` event when it is done.

### Waveform.prototype.stop()

::i-chinese{sha="fad3c7868f581987e2262e8205ce13b44777393be2240df5698b13b6f761638c"}
::
Stop a waveform that is currently outputting
