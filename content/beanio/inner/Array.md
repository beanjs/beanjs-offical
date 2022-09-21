---
title: Array
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--1--> 

### Array.constructor(args)

::i-chinese{sha="cd410d97dc48d7ff1de1c9cdae5bff721fd8babe7a92967e0595f88fdc522aac"}
::
Create an Array. Either give it one integer argument (>=0) which is the length of the array, or any number of arguments

<!--23--> 

### Array.prototype.concat(args)

::i-chinese{sha="2d569dc60575f7a77afe2aff2b5e74ec809fb84f9c6b4d5afe408314c9b7edb9"}
::
Create a new array, containing the elements from this one and any arguments, if any argument is an array then those elements will be added.

### Array.prototype.every(function,thisArg)

::i-chinese{sha="68f8753dcc454b6904893c772378edf3de8d205f92dc532d521e8e858d3e6c95"}
::
Return `true` if the callback returns `true` for every element in the array

### Array.prototype.fill(value,start,end)

::i-chinese{sha="2bd5a6daf473b95037baf33f3e99e4d598b69ca0ebe4fcca59d8683b8b0aff4d"}
::
Fill this array with the given value, for every index `>= start` and `< end`

### Array.prototype.filter(function,thisArg)

::i-chinese{sha="a64eff7aa839ae569c50e827a91fb00b259395fac66e698e27b5678618f029e3"}
::
Return an array which contains only those elements for which the callback function returns `true`

### Array.prototype.find(function)

::i-chinese{sha="730d16ada8275bd2374afd9d07bf572cbe5aa71566ac0c5f4ba4138ea9b14b8f"}
::
Return the array element where `function` returns `true`, or `undefined` if it doesn't returns `true` for any element.

```javascript
["Hello","There","World"].find(a=>a[0]=="T")
// returns "There"
```

### Array.prototype.findIndex(function)

::i-chinese{sha="6625560fbfa652451c109b9fa892e60f953ca878a2b27890b065fa2f63709112"}
::
Return the array element's index where `function` returns `true`, or `-1` if it doesn't returns `true` for any element.

```javascript
["Hello","There","World"].findIndex(a=>a[0]=="T")
// returns 1
```

### Array.prototype.forEach(function,thisArg)

::i-chinese{sha="fe0544261e526ea8c4eaea35f97434891d5788b6960e82c5261b24036676b0d8"}
::
Executes a provided function once per array element.

### Array.prototype.includes(value,startIndex)

::i-chinese{sha="d249d38d8d4e0cadd8d639c28f69c98ef156c4afcdb7c3657dd4ac2a117fffdd"}
::
Return `true` if the array includes the value, `false` otherwise

### Array.prototype.indexOf(value,startIndex)

::i-chinese{sha="1bf612b3b70c6c55ae85fcffe041d34bffd9a466dc7a528c71382ac7e48cecc5"}
::
Return the index of the value in the array, or -1

### Array.prototype.join(separator)

::i-chinese{sha="c3e02ff8f27b203b3931f1481995d4bf7b89aa92a91366a1c9d0046a72572c02"}
::
Join all elements of this array together into one string, using `separator` between them. eg. 
```javascript
[1,2,3].join(' ')=='1 2 3'
```

### Array.prototype.length

::i-chinese{sha="5345d2726b3a9421a787b2f4d39e2bb93fc17f5656050e3739fee4c3971d5f0c"}
::
Find the length of the array

### Array.prototype.map(function,thisArg)

::i-chinese{sha="7e2f8bc11d0e59fdbb35e450e1346e6910d3b5bcc5e04069eeff385b087e6cdf"}
::
Return an array which is made from the following: 
```javascript
A.map(function) = [function(A[0]), function(A[1]), ...]
```

### Array.prototype.pop()

::i-chinese{sha="6e931f7af7d5ced365fcec0fd7d6defdb7c1d33a5e8f41d29f8abceba9ffe2f4"}
::
Remove and return the value on the end of this array.
This is the opposite of `[1,2,3].shift()`, which removes an element from the beginning of the array.

### Array.prototype.push(arguments)

::i-chinese{sha="c6a9e052d6aac3fa276bdb1b6905f1af26af95510ab9c1174c3c7c513d4743d1"}
::
Push a new value onto the end of this array.
This is the opposite of `[1,2,3].unshift(0)`, which adds one or more elements to the beginning of the array.

### Array.prototype.reduce(callback,initialValue)

::i-chinese{sha="aa3ff70cff3fda5866950d6b09f98797700a47f395be8d3197586ec24af5d89f"}
::
Execute `previousValue = initialValue` and then `previousValue = callback( previousValue, currentValue, index, array )` for each element in the array, and finally return previousValue.

### Array.prototype.reverse()

::i-chinese{sha="8809468cace2fc3dae055b1e8dae414788db9927e406592156e03a31cca9afe2"}
::
Reverse all elements in this array (in place)

### Array.prototype.shift()

::i-chinese{sha="4d6d22551824a450a542ff31ac4c345963a9d318622342e28a2dbb810d54a5ee"}
::
Remove and return the first element of the array.
This is the opposite of `[1,2,3].pop()`, which takes an element off the end.

### Array.prototype.slice(start,end)

::i-chinese{sha="9b85a2bf36715fccc4bb1cda45e6aea2af5686a86cd5e0bb43dbfe72f63720f1"}
::
Return a copy of a portion of this array (in a new array)

### Array.prototype.some(function,thisArg)

::i-chinese{sha="20b80a202910ccebbee16dfe965ebed18e339e3deaa59cefbe1eac02f7bfb31f"}
::
Return `true` if the callback returns `true` for any of the elements in the array

### Array.prototype.sort(compareFn)

::i-chinese{sha="e99772d155f9d7916b853fbfb99c6793b1cee45c964f250adb57ed418ae086c4"}
::
Do an in-place quicksort of the array

### Array.prototype.splice(index,howMany,elements)

::i-chinese{sha="9946ffeb32c6049756b145450aae77b31197711fc8347bfabe21b450c59aea48"}
::
Both remove and add items to an array

### Array.prototype.toString(radix)

::i-chinese{sha="8d6bc3096c10a6c5e7b7487cb91001f5610429a2bf11e510bc764f1a5a106d04"}
::
Convert the Array to a string

### Array.prototype.unshift(elements)

::i-chinese{sha="bd13a516ebe9c0a515f88337b73998c13a76aa4e2094a9125ef5abc527576556"}
::
Add one or more items to the start of the array, and return its new length.
This is the opposite of `[1,2,3].push(4)`, which puts one or more elements on the end.

<!--1--> 

### Array.isArray(var)

::i-chinese{sha="eba5cdc05c3a5e5ee943b8837ef0d831d6e5ebb6d3daa1a34a34ff7f13f42b90"}
::
Returns true if the provided object is an array
