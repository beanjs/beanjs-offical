---
title: Storage
category: 'inner'
tags: [module]
---

<!--14--> 

### Storage.compact()

::i-chinese{sha="bc1b5991c4b674b89cb7fed5942d452cf01caabb5d502b5a9cab32cc52a3bc02"}
::
The Flash Storage system is journaling. To make the most of the limited write
cycles of Flash memory, Espruino marks deleted/replaced files as garbage and
moves on to a fresh part of flash memory. Espruino only fully erases those files
when it is running low on flash, or when `compact` is called.

`compact` may fail if there isn't enough RAM free on the stack to use as swap
space, however in this case it will not lose data.

> **Note:** `compact` rearranges the contents of memory. If code is
referencing that memory (eg. functions that have their code stored in flash)
then they may become garbled when compaction happens. To avoid this,
call `eraseFiles` before uploading data that you intend to reference to
ensure that uploaded files are right at the start of flash and cannot be
compacted further.

### Storage.erase(name)

::i-chinese{sha="263d72658e2ae50725e9192d022c10650df2322142860bf49b4cdb9adfa351c0"}
::
Erase a single file from the flash storage area.

**Note:** This function should be used with normal files, and not `StorageFile`s
created with `require("Storage").open(filename, ...)`

### Storage.eraseAll()

::i-chinese{sha="daa18ef38aba7fcedd1514f9a85a6cb936cb27164ed9ee6f4a5647e680013690"}
::
Erase the flash storage area. This will remove all files created with
`require("Storage").write(...)` as well as any code saved with `save()` or
`E.setBootCode()`.

### Storage.getFree()

::i-chinese{sha="5ba46de3309d9ad5163ce620e0dc5fbe229c4a6387b0824fd26278139987a354"}
::
Return the amount of free bytes available in Storage. Due to fragmentation there
may be more bytes available, but this represents the maximum size of file that
can be written.

### Storage.getStats()

::i-chinese{sha="92572af1094ca08281b700a1843e4e4d75eb51e2e7de84b39a0244669949e878"}
::
Returns:

```
{
  totalBytes // Amount of bytes in filesystem
  freeBytes // How many bytes are left at the end of storage?
  fileBytes // How many bytes of allocated files do we have?
  fileCount // How many allocated files do we have?
  trashBytes // How many bytes of trash files do we have?
  trashCount // How many trash files do we have?
}
```

### Storage.hash(regex)

::i-chinese{sha="c0eb393985ae8590c68b16262fefe9972636c41ff1b5337e79804a30b3113ea0"}
::
List all files in the flash storage area matching the specified regex (ignores
StorageFiles), and then hash their filenames *and* file locations.

Identical files may have different hashes (e.g. if Storage is compacted and the
file moves) but the changes of different files having the same hash are
extremely small.

```
// Hash files
require("Storage").hash()
// Files ending in '.boot.js'
require("Storage").hash(/\.boot\.js$/)
```

> **Note:** This function is used by Bangle.js as a way to cache files. For
instance the bootloader will add all `.boot.js` files together into a single
`.boot0` file, but it needs to know quickly whether anything has changed.

### Storage.list(regex,filter)

::i-chinese{sha="04c06b08218ad38a4ae06ff66e9e1edd3c8550d46f69e130d0587677fab777e3"}
::
List all files in the flash storage area. An array of Strings is returned.

By default this lists files created by `StorageFile` (`require("Storage").open`)
which have a file number (`"\1"`/`"\2"`/etc) appended to them.

```
// All files
require("Storage").list()
// Files ending in '.js'
require("Storage").list(/\.js$/)
// All Storage Files
require("Storage").list(undefined, {sf:true})
// All normal files (e.g. created with Storage.write)
require("Storage").list(undefined, {sf:false})
```

**Note:** This will output system files (e.g. saved code) as well as files that
you may have written.

### Storage.open(name,mode)

::i-chinese{sha="0e5ce40210bb00261867c8d07b9f209b98fc90771407daefd1263fbeeaeecdaa"}
::
Open a file in the Storage area. This can be used for appending data
(normal read/write operations only write the entire file).

Please see `StorageFile` for more information (and examples).

> **Note:** These files write through immediately - they do not need closing.

### Storage.optimise()

::i-chinese{sha="2fc96ec3c953b75686c911eaabef7e442c118fb13fa2f9321158bb51e3f2c42d"}
::
Writes a lookup table for files into Bangle.js's storage. This allows any file
stored up to that point to be accessed quickly.

### Storage.read(name,offset,length)

::i-chinese{sha="be54c7bcd2b3bad40df8370534ebd6c45c3d20e4b04aad9d2b70cb878bcf0082"}
::
Read a file from the flash storage area that has been written with
`require("Storage").write(...)`.

This function returns a memory-mapped String that points to the actual memory
area in read-only memory, so it won't use up RAM.

As such you can check if a file exists efficiently using
`require("Storage").read(filename)!==undefined`.

If you evaluate this string with `eval`, any functions contained in the String
will keep their code stored in flash memory.

**Note:** This function should be used with normal files, and not `StorageFile`s
created with `require("Storage").open(filename, ...)`

### Storage.readArrayBuffer(name)

::i-chinese{sha="ebf1cd2794a88824314e77b96ff896c623d1e9e7b8c614e24933fe6538aa8b99"}
::
Read a file from the flash storage area that has been written with
`require("Storage").write(...)`, and return the raw binary data as an
ArrayBuffer.

This can be used:

* In a `DataView` with `new DataView(require("Storage").readArrayBuffer("x"))`
* In a `Uint8Array/Float32Array/etc` with `new
  Uint8Array(require("Storage").readArrayBuffer("x"))`

**Note:** This function should be used with normal files, and not `StorageFile`s
created with `require("Storage").open(filename, ...)`

### Storage.readJSON(name,noExceptions)

::i-chinese{sha="838c56624343f67dddd2d22b915c586b2c2a93cf4fc7dc3f4d56b637687150a9"}
::
Read a file from the flash storage area that has been written with
`require("Storage").write(...)`, and parse JSON in it into a JavaScript object.

This is identical to `JSON.parse(require("Storage").read(...))`. It will throw
an exception if the data in the file is not valid JSON.

**Note:** This function should be used with normal files, and not `StorageFile`s
created with `require("Storage").open(filename, ...)`

### Storage.write(name,data,offset,size)

::i-chinese{sha="ff88b948b2611d1e2d78aa11d70d337affa58ee93181c6da642f516edde7f52f"}
::
Write/create a file in the flash storage area. This is nonvolatile and will not
disappear when the device resets or power is lost.

Simply write `require("Storage").write("MyFile", "Some data")` to write a new
file, and `require("Storage").read("MyFile")` to read it.

If you supply:

* A String, it will be written as-is
* An array, will be written as a byte array (but read back as a String)
* An object, it will automatically be converted to a JSON string before being
written.

> **Note:** If an array is supplied it will not be converted to JSON.
To be explicit about the conversion you can use `Storage.writeJSON`

You may also create a file and then populate data later **as long as you don't
try and overwrite data that already exists**. For instance:

```javascript
var f = require("Storage");
f.write("a","Hello",0,14);
f.write("a"," ",5);
f.write("a","World!!!",6);
print(f.read("a")); // "Hello World!!!"
f.write("a"," ",0); // Writing to location 0 again will cause the file to be re-written
print(f.read("a")); // " "
```

This can be useful if you've got more data to write than you have RAM
available - for instance the Web IDE uses this method to write large files into
onboard storage.

**Note:** This function should be used with normal files, and not `StorageFile`s
created with `require("Storage").open(filename, ...)`

### Storage.writeJSON(name,data)

::i-chinese{sha="0da55bcc4873a7bfbe6344c00438a8366f89bfc63d7dceb60e293df9b0306084"}
::
Write/create a file in the flash storage area. This is nonvolatile and will not
disappear when the device resets or power is lost.

Simply write `require("Storage").writeJSON("MyFile", [1,2,3])` to write a new
file, and `require("Storage").readJSON("MyFile")` to read it.

This is equivalent to: `require("Storage").write(name, JSON.stringify(data))`

**Note:** This function should be used with normal files, and not `StorageFile`s
created with `require("Storage").open(filename, ...)`
