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

::i-chinese{sha="693ca75a87a96df6ef3f5125980f220947dde6c841de708ea4d92c04fd84ca85"}
::
Return the length of the current file.

This requires Espruino to read the file from scratch,
which is not a fast operation.

### StorageFile.prototype.read(len)

::i-chinese{sha="e511f253ca183f330291973b933d997e7b881baa0b08e02ea9d877736d08d3b7"}
::
Read 'len' bytes of data from the file, and return a String containing those bytes.

If the end of the file is reached, the String may be smaller than the amount of bytes
requested, or if the file is already at the end, `undefined` is returned.

### StorageFile.prototype.readLine()

::i-chinese{sha="dc976df54a3ed3be76bb01541460233f77664480dabff7171d56b4a3e9d69e1c"}
::
Read a line of data from the file (up to and including `"\n"`)

### StorageFile.prototype.write(data)

::i-chinese{sha="af10d80bca06c607f7b1f28852af80b98eda332526c7314ae0b9c26d6ca59658"}
::
Append the given data to a file. You should not attempt to append  `"\xFF"` (character code 255).
