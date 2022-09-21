---
title: Storage
category: 'inner'
tags: [module]
---

<!--11--> 

### Storage.compact()

::i-chinese{sha="3a3b10ffd8ddb353345fdf99db7926bdd80bbc824b16446febc05d466c796608"}
::
The Flash Storage system is journaling. To make the most of the limited
write cycles of Flash memory, Espruino marks deleted/replaced files as
garbage and moves on to a fresh part of flash memory. Espruino only
fully erases those files when it is running low on flash, or when
`compact` is called.

`compact` may fail if there isn't enough RAM free on the stack to
use as swap space, however in this case it will not lose data.

> **Note:** `compact` rearranges the contents of memory. If code is
referencing that memory (eg. functions that have their code stored in flash)
then they may become garbled when compaction happens. To avoid this,
call `eraseFiles` before uploading data that you intend to reference to
ensure that uploaded files are right at the start of flash and cannot be
compacted further.

### Storage.erase(name)

::i-chinese{sha="7d2ea78e8a8f965472da08ea28d754a56243c1473a4b3fc6c0ae1fa7a828cd39"}
::
Erase a single file from the flash storage area.

### Storage.eraseAll()

::i-chinese{sha="802798f74ad703b877bae26d249ebc7e4ba410a5355a846ec2caaa3df18f89c1"}
::
Erase the flash storage area. This will remove all files
created with `require("Storage").write(...)` as well
as any code saved with `save()` or `E.setBootCode()`.

### Storage.getFree()

::i-chinese{sha="5bbb5e98fb9652bdf5170146dd0f544faee50ffdb93f832cf257d860dd15f3be"}
::
Return the amount of free bytes available in
Storage. Due to fragmentation there may be more
bytes available, but this represents the maximum
size of file that can be written.

### Storage.list(regex)

::i-chinese{sha="888993b08310a95cf4ced01dab3d1fbd75aadffa41131c69eb563d82453c7593"}
::
List all files in the flash storage area. An array of Strings is returned.

> **Note:** This will output system files (eg. saved code) as well as
files that you may have written.

### Storage.open(name,mode)

::i-chinese{sha="0e5ce40210bb00261867c8d07b9f209b98fc90771407daefd1263fbeeaeecdaa"}
::
Open a file in the Storage area. This can be used for appending data
(normal read/write operations only write the entire file).

Please see `StorageFile` for more information (and examples).

> **Note:** These files write through immediately - they do not need closing.

### Storage.read(name,offset,length)

::i-chinese{sha="5142fa1e3501de23b348c82a55b50b701ce28da769525adfb7e481094311e759"}
::
Read a file from the flash storage area that has
been written with `require("Storage").write(...)`.

This function returns a String that points to the actual
memory area in read-only memory, so it won't use up RAM.

If you evaluate this string with `eval`, any functions
contained in the String will keep their code stored
in flash memory.

### Storage.readArrayBuffer(name)

::i-chinese{sha="689cef9f209dbdffa98d450efd8ad193bdc4e873f4860524f566e1ce721d0e67"}
::
Read a file from the flash storage area that has
been written with `require("Storage").write(...)`,
and return the raw binary data as an ArrayBuffer.

This can be used:

* In a `DataView` with `new DataView(require("Storage").readArrayBuffer("x"))`
* In a `Uint8Array/Float32Array/etc` with `new Uint8Array(require("Storage").readArrayBuffer("x"))`

### Storage.readJSON(name,noExceptions)

::i-chinese{sha="2448bf6ae0feb484ee3e54738daaaf1b8c2e7255445abfed8be0a2c27b224b11"}
::
Read a file from the flash storage area that has
been written with `require("Storage").write(...)`,
and parse JSON in it into a JavaScript object.

This is identical to `JSON.parse(require("Storage").read(...))`.
It will throw an exception if the data in the file is not
valid JSON.

### Storage.write(name,data,offset,size)

::i-chinese{sha="ee63bae390ad299d328385d88a2af4e83f74c1084afa909fae1dd4436c20fdf8"}
::
Write/create a file in the flash storage area. This is
nonvolatile and will not disappear when the device resets
or power is lost.

Simply write `require("Storage").write("MyFile", "Some data")` to write
a new file, and `require("Storage").read("MyFile")` to read it.

If you supply:

* A String, it will be written as-is
* An array, will be written as a byte array (but read back as a String)
* An object, it will automatically be converted to
a JSON string before being written.

> **Note:** If an array is supplied it will not be converted to JSON.
To be explicit about the conversion you can use `Storage.writeJSON`

You may also create a file and then populate data later **as long as you
don't try and overwrite data that already exists**. For instance:

```javascript
var f = require("Storage");
f.write("a","Hello",0,14);
f.write("a"," ",5);
f.write("a","World!!!",6);
print(f.read("a"));
```

This can be useful if you've got more data to write than you
have RAM available.

### Storage.writeJSON(name,data)

::i-chinese{sha="41b29d92cb8836efb5cbce6c7f52e0ee8951d4dc77c87e808030e91d51b5b069"}
::
Write/create a file in the flash storage area. This is
nonvolatile and will not disappear when the device resets
or power is lost.

Simply write `require("Storage").writeJSON("MyFile", [1,2,3])` to write
a new file, and `require("Storage").readJSON("MyFile")` to read it.

This is equivalent to: `require("Storage").write(name, JSON.stringify(data))`
