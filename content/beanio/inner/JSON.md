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

::i-chinese{sha="3dfe03b48a45c252c80c8c3974ecdf81b5a0f75631d94fa6343ea02ed8c9e9fe"}
::
Convert the given object into a JSON string which can subsequently be parsed with JSON.parse or eval.

> **Note:** This differs from JavaScript's standard `JSON.stringify` in that:

* The `replacer` argument is ignored
* Typed arrays like `new Uint8Array(5)` will be dumped as if they were arrays, not as if they were objects (since it is more compact)
