---
title: ArrayBufferView
category: 'inner'
tags: [object]
---

<!--18--> 

### ArrayBufferView.prototype.buffer

::i-chinese{sha="ae476bee4a5fd6a5091acc17be6444abfcf98c6b3ff99760f9d20d20f992c675"}
::
The buffer this view references

### ArrayBufferView.prototype.byteLength

::i-chinese{sha="78bff9c5a71d0d66531d9714f8c2b20948c5cc606f6b8c0f1901e8217dd83873"}
::
The length, in bytes, of the `ArrayBufferView`

### ArrayBufferView.prototype.byteOffset

::i-chinese{sha="fd1889c2d5b76f72bc836512d41977c1ece61faa0daeb275974a6d77df665539"}
::
The offset, in bytes, to the first byte of the view within the backing `ArrayBuffer`

### ArrayBufferView.prototype.fill(value,start,end)

::i-chinese{sha="2bd5a6daf473b95037baf33f3e99e4d598b69ca0ebe4fcca59d8683b8b0aff4d"}
::
Fill this array with the given value, for every index `>= start` and `< end`

### ArrayBufferView.prototype.filter(function,thisArg)

::i-chinese{sha="a64eff7aa839ae569c50e827a91fb00b259395fac66e698e27b5678618f029e3"}
::
Return an array which contains only those elements for which the callback function returns `true`

### ArrayBufferView.prototype.find(function)

::i-chinese{sha="d1e59c9e58976003f2946b8528ba43e73160c4f2e40a66b7fe181b70778ae981"}
::
Return the array element where `function` returns `true`, or `undefined` if it doesn't returns `true` for any element.

### ArrayBufferView.prototype.findIndex(function)

::i-chinese{sha="1df149a60ba632d7f646932f556900852e0734bdcb8d8220db802572e08a8339"}
::
Return the array element's index where `function` returns `true`, or `-1` if it doesn't returns `true` for any element.

### ArrayBufferView.prototype.forEach(function,thisArg)

::i-chinese{sha="fe0544261e526ea8c4eaea35f97434891d5788b6960e82c5261b24036676b0d8"}
::
Executes a provided function once per array element.

### ArrayBufferView.prototype.includes(value,startIndex)

::i-chinese{sha="d249d38d8d4e0cadd8d639c28f69c98ef156c4afcdb7c3657dd4ac2a117fffdd"}
::
Return `true` if the array includes the value, `false` otherwise

### ArrayBufferView.prototype.indexOf(value,startIndex)

::i-chinese{sha="a309e3897d9f447427d64d7ca7bd0d6008d84e7847e009e750cb31936713509d"}
::
Return the index of the value in the array, or `-1`

### ArrayBufferView.prototype.join(separator)

::i-chinese{sha="c3e02ff8f27b203b3931f1481995d4bf7b89aa92a91366a1c9d0046a72572c02"}
::
Join all elements of this array together into one string, using `separator` between them. eg. 
```javascript
[1,2,3].join(' ')=='1 2 3'
```

### ArrayBufferView.prototype.map(function,thisArg)

::i-chinese{sha="da68766e21c784b215ec952dd5aa04642649fccefc3e1cb9110f91909861677d"}
::
Return an array which is made from the following: 
```javascript
A.map(function) = [function(A[0]), function(A[1]), ...]
```

> **Note:** This returns an `ArrayBuffer` of the same type it was called on. To
 get an `Array`, use `Array.map`, e.g. `[].map.call(myArray, x=>x+1)`

### ArrayBufferView.prototype.reduce(callback,initialValue)

::i-chinese{sha="f465bf6aeaa46b5a6a14062a42ea4c8c29d1a5f4950e11b9de46068286cf40d5"}
::
Execute `previousValue=initialValue` and then `previousValue = callback(previousValue, currentValue, index, array)` for each element in the array, and finally return previousValue.

### ArrayBufferView.prototype.reverse()

::i-chinese{sha="f0d1ae8e94a4b1a974b299f22d7bcf6a23b2780094caee57910e5b32e4e0359d"}
::
Reverse the contents of this `ArrayBufferView` in-place

### ArrayBufferView.prototype.set(arr,offset)

::i-chinese{sha="4a904c71d1a57fad4cb80395245ccf77e75d2ac5d7f29810e24e0cf312fd14f2"}
::
Copy the contents of `array` into this one, mapping `this[x+offset]=array[x];`

### ArrayBufferView.prototype.slice(start,end)

::i-chinese{sha="ac5503780cb9f20ae64cd75f49a8edf0abd05793bb20308a9adce604b1bb54fb"}
::
Return a copy of a portion of this array (in a new array).

> **Note:** This currently returns a normal `Array`, not an `ArrayBuffer`

### ArrayBufferView.prototype.sort(var)

::i-chinese{sha="e99772d155f9d7916b853fbfb99c6793b1cee45c964f250adb57ed418ae086c4"}
::
Do an in-place quicksort of the array

### ArrayBufferView.prototype.subarray(begin,end)

::i-chinese{sha="ad2d30b4ab5f45cac2acf8c22de2ceaeb0b5b0ab63780dcf7dc857d4c060cdfb"}
::
Returns a smaller part of this array which references the same data (it doesn't
copy it).
