---
title: RegExp
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--2--> 

### RegExp.constructor(regex,flags)

::i-chinese{sha="e719ff822db4692bee080d78997b1fa6771492bed671a60186c5424b174cae88"}
::
Creates a RegExp object, for handling Regular Expressions

<!--2--> 

### RegExp.prototype.exec(str)

::i-chinese{sha="d475e8dc9faef103ea8b65ee412dd41f64683088b692b0c0322e7a4d3bee6d2b"}
::
Test this regex on a string - returns a result array on success, or `null`
otherwise.


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

::i-chinese{sha="150565f4e09838dd4b79f7283bd770919aa1741b57622e178d6a8bbbf95f36cb"}
::
Test this regex on a string - returns `true` on a successful match, or `false`
otherwise
