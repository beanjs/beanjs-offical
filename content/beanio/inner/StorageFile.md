---
title: StorageFile
category: 'inner'
tags: [object]
---

<!--5--> 

### StorageFile.prototype.erase()

::i-chinese{sha="4bfd0b3b18a1232e40976a5532a73824e79bfa250b20003ef0ccd70ecdba1638"}
::
Erase this file

### StorageFile.prototype.getLength()

::i-chinese{sha="0c37f02529b03961dfbb52a049602b29cc5053c0bae1fe62746441d0b48c3b61"}
::
Return the length of the current file.

This requires Espruino to read the file from scratch, which is not a fast
operation.

### StorageFile.prototype.read(len)

::i-chinese{sha="d2bf849139336d5dc182fae2bc7aba5044528e843f8d5390f2c5db8b985e2795"}
::
Read 'len' bytes of data from the file, and return a String containing those
bytes.

If the end of the file is reached, the String may be smaller than the amount of
bytes requested, or if the file is already at the end, `undefined` is returned.

### StorageFile.prototype.readLine()

::i-chinese{sha="dc976df54a3ed3be76bb01541460233f77664480dabff7171d56b4a3e9d69e1c"}
::
Read a line of data from the file (up to and including `"\n"`)

### StorageFile.prototype.write(data)

::i-chinese{sha="7fbfc31ba918047681b75de432169fab729e9c2754bd166b9c1177a50183c23b"}
::
Append the given data to a file. You should not attempt to append `"\xFF"`
(character code 255).
