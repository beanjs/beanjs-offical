---
title: Promise
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--1--> 

### Promise.constructor(executor)

::i-chinese{sha="da0822503d22c0e1f3f3b34d33061710f2587cb54b61b6d355926e84124b7da0"}
::
Create a new Promise. The executor function is executed immediately (before the constructor even returns)
and

<!--3--> 

### Promise.all(promises)

::i-chinese{sha="822ea10fcf47379ff5a355f85956536cf923f74fd90acdead0fc8efc4598d40b"}
::
Return a new promise that is resolved when all promises in the supplied
array are resolved.

### Promise.reject(promises)

::i-chinese{sha="1b1d8072cf45b371d42268f47da8631b2e0c2a388d972be10f8efb3c1055b078"}
::
Return a new promise that is already rejected (at idle it'll
call `.catch`)

### Promise.resolve(promises)

::i-chinese{sha="7622b3b2bbeb72a671c2e38d08e15734d8c4eb0605fbfa30771f2b7dddf268da"}
::
Return a new promise that is already resolved (at idle it'll
call `.then`)

<!--2--> 

### Promise.prototype.catch(onRejected)

::i-chinese{sha="98e6f86b50a38046002dc53bd7ccf834eeb14cd6ac9f6a09419586029da4d5cb"}
::
The original Promise

### Promise.prototype.then(onFulfilled,onRejected)

::i-chinese{sha="98e6f86b50a38046002dc53bd7ccf834eeb14cd6ac9f6a09419586029da4d5cb"}
::
The original Promise
