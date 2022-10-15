---
title: JSON
category: 'inner'
tags: [object]
---

<!--2--> 

### JSON.parse(string)

::i-chinese{sha="63a17bc42eb82c441b5654aea9c9c784282f669c18919f9e6cf6921cc0e202d9"}
::
Parse the given JSON string into a JavaScript object

> **NOTE:** This implementation uses eval() internally, and as such it is unsafe as it can allow arbitrary JS commands to be executed.

### JSON.stringify(data,replacer,space)

::i-chinese{sha="9c1d9d7c47f7ec0ca84c10573d109e3d53d16c0d4c1d595b09c1ba95f8b412ab"}
::
Convert the given object into a JSON string which can subsequently be parsed
with JSON.parse or eval.

> **Note:** This differs from JavaScript's standard `JSON.stringify` in that:

* The `replacer` argument is ignored
* Typed arrays like `new Uint8Array(5)` will be dumped as if they were arrays,
  not as if they were objects (since it is more compact)
