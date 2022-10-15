---
title: Promise
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--1--> 

### Promise.constructor(executor)

::i-chinese{sha="719d9539b6d789223c27e63bf23742131c07696ab6f4da04aa15c47bb9483575"}
::
Create a new Promise. The executor function is executed immediately (before the
constructor even returns) and

<!--3--> 

### Promise.all(promises)

::i-chinese{sha="a1cb8e6cefd71361fbb8a98c9379093e743675042f48a3bb14a5e4d7d5170a1b"}
::
Return a new promise that is resolved when all promises in the supplied array
are resolved.

### Promise.reject(promises)

::i-chinese{sha="84295cc780f3ddef62699ebe4295ed97463200f8f545f245a9be75a47214d5a2"}
::
Return a new promise that is already rejected (at idle it'll call `.catch`)

### Promise.resolve(promises)

::i-chinese{sha="7f6b3c27c6b6c0c9009fdcc91c2d99186141cacf55c7fa4bd19a2b0780f31abd"}
::
Return a new promise that is already resolved (at idle it'll call `.then`)

<!--2--> 

### Promise.prototype.catch(onRejected)

::i-chinese{sha="98e6f86b50a38046002dc53bd7ccf834eeb14cd6ac9f6a09419586029da4d5cb"}
::
The original Promise

### Promise.prototype.then(onFulfilled,onRejected)

::i-chinese{sha="98e6f86b50a38046002dc53bd7ccf834eeb14cd6ac9f6a09419586029da4d5cb"}
::
The original Promise
