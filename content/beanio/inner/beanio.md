---
title: beanio
category: 'inner'
tags: [module]
---

<!--9--> 

### beanio.on("connect",listener)

::i-chinese{sha="6e9b509c90b76cece8af9b7f1b802fb2900fa78d26a23a82d213695609672c76"}
::
This event is called right after the beanio connected server

```javascript
beanio.on('connect',()=>{})
```

### beanio.connected

::i-chinese{sha="0d3b3538a8dc979fe005c57f6c47b80e55e2039bdbe2cc212d35c0ed1b5d529b"}
::
get beanio connect status

### beanio.on("device-notify",listener)

::i-chinese{sha="2a60599eb3e0de85bef6b9a945c4da063fd875b09a3bd41835d22694552fff42"}
::
This event is called right after the scene view

```javascript
beanio.on('device-notify',(isEnter)=>{})

// isEnter=1 enter the scene
// isEnter=0 leave the scene
```

### beanio.on("disconnect",listener)

::i-chinese{sha="338fce1537fe94032deaa0e24f2103dc3a738d92d9e59c4e05808cb36c54049c"}
::
This event is called right after the beanio disconnected server

```javascript
beanio.on('disconnect',()=>{})
```

### beanio.emit(event,argsArray)

::i-chinese{sha="7623b15994e2fae38c6ca53546475f7ec493a9e62118e44d9a9ac2f46f81b6f3"}
::
emit event,If event is in subjects, data will be sent to server

### beanio.on("error",listener)

::i-chinese{sha="2e28e46b0f4c4d0e5bcda02ead31e0f2fb3b5768c731a1be1466d64774c99fb1"}
::
This event is called right after the receive data

- 128: http status error
- 129: payload limit (max length: 256)
- 130: payload not json format

```javascript
beanio.on('error',(code)=>{})
```

### beanio.get(url,callback)

::i-chinese{sha="be87cbb14d3af4ee06291b7e8f9f65b2025d5336a5cb4835f1c74155588eba52"}
::
http proxy of get method,only support json format.max length 256 bytes

### beanio.on("message",listener)

::i-chinese{sha="e4d88c12ae372b2705f81b3bbc73951a3e2671c6aa4927f8e647471466455121"}
::
This event is called right after the receive data

```javascript
beanio.on('message',(subject,payload)=>{})
```

### beanio.setup(options)

::i-chinese{sha="5b1b4a694b4babf691930bc0d2fcfc30c2bff8823401bbac4cb57e4cb1aafa21"}
::
setup beanio options

```javascript
var beanio=require("beanio")

function onInit(){
  beanio.setup({
    "token":"<string>",
    "pwmFreq":"<number,minimum:1000>",
    "subjects":"<string array>",
    "wifi":{
      "ssid":"<string>",
      "password":"<string>"
    }
  })
}
```
