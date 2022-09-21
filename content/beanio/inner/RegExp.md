---
title: RegExp
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--2--> 

### RegExp.constructor(regex,regex)

::i-chinese{sha="e719ff822db4692bee080d78997b1fa6771492bed671a60186c5424b174cae88"}
::
Creates a RegExp object, for handling Regular Expressions

<!--2--> 

### RegExp.prototype.exec(str)

::i-chinese{sha="5910d9a4c5222a25d6a2f0851af7483595e45f711e325df6ef951abcae82afa8"}
::
Test this regex on a string - returns a result array on success, or `null` otherwise.


```javascript
/Wo/.exec("Hello World")
// [
//  "Wo",
//  "index": 6,
//  "input": "Hello World"
// ]
```

```javascript
/W(o)rld/.exec("Hello World")
// [
//  "World",
//  "o", "index": 6,
//  "input": "Hello World"
// ]
```

### RegExp.prototype.test(str)

::i-chinese{sha="08eb4e57ad8182ec1de49c0cf17a18b498e9fd0105134132f223ce34f24fb89f"}
::
Test this regex on a string - returns `true` on a successful match, or `false` otherwise
