---
title: DataView
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--3--> 

### DataView.constructor(buffer,byteOffset,byteLength)

::i-chinese{sha="7b8197cbb7825b5e7090dd7b838f2f351dd6607b7d2cdba6e95f50220a78202b"}
::
Create a `DataView` object that can be used to access the data in an
`ArrayBuffer`.

```javascript
var b = new ArrayBuffer(8)
var v = new DataView(b)
v.setUint16(0,"0x1234")
v.setUint8(3,"0x56")
console.log("0x"+v.getUint32(0).toString(16))
// prints 0x12340056
```

<!--16--> 

### DataView.prototype.getFloat32(byteOffset,littleEndian)

::i-chinese{sha="855e37f426b71eaac74fec2f71accb1d7dcf7d13d552e5db43206978b3b010ee"}
::
the index of the value in the array, or -1

### DataView.prototype.getFloat64(byteOffset,littleEndian)

::i-chinese{sha="855e37f426b71eaac74fec2f71accb1d7dcf7d13d552e5db43206978b3b010ee"}
::
the index of the value in the array, or -1

### DataView.prototype.getInt16(byteOffset,littleEndian)

::i-chinese{sha="855e37f426b71eaac74fec2f71accb1d7dcf7d13d552e5db43206978b3b010ee"}
::
the index of the value in the array, or -1

### DataView.prototype.getInt32(byteOffset,littleEndian)

::i-chinese{sha="855e37f426b71eaac74fec2f71accb1d7dcf7d13d552e5db43206978b3b010ee"}
::
the index of the value in the array, or -1

### DataView.prototype.getInt8(byteOffset,littleEndian)

::i-chinese{sha="855e37f426b71eaac74fec2f71accb1d7dcf7d13d552e5db43206978b3b010ee"}
::
the index of the value in the array, or -1

### DataView.prototype.getUint16(byteOffset,littleEndian)

::i-chinese{sha="855e37f426b71eaac74fec2f71accb1d7dcf7d13d552e5db43206978b3b010ee"}
::
the index of the value in the array, or -1

### DataView.prototype.getUint32(byteOffset,littleEndian)

::i-chinese{sha="855e37f426b71eaac74fec2f71accb1d7dcf7d13d552e5db43206978b3b010ee"}
::
the index of the value in the array, or -1

### DataView.prototype.getUint8(byteOffset,littleEndian)

::i-chinese{sha="855e37f426b71eaac74fec2f71accb1d7dcf7d13d552e5db43206978b3b010ee"}
::
the index of the value in the array, or -1

### DataView.prototype.setFloat32(byteOffset,value,littleEndian)

### DataView.prototype.setFloat64(byteOffset,value,littleEndian)

### DataView.prototype.setInt16(byteOffset,value,littleEndian)

### DataView.prototype.setInt32(byteOffset,value,littleEndian)

### DataView.prototype.setInt8(byteOffset,value,littleEndian)

### DataView.prototype.setUint16(byteOffset,value,littleEndian)

### DataView.prototype.setUint32(byteOffset,value,littleEndian)

### DataView.prototype.setUint8(byteOffset,value,littleEndian)
