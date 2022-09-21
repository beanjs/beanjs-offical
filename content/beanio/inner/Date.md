---
title: Date
category: 'inner'
tags: [object]
---

<!--constructor--> 
<!--1--> 

### Date.constructor(args)

::i-chinese{sha="01f3ea50819f702377429d0eeadfed33bdfaba97705fee134741992c222c84eb"}
::
Creates a date object

<!--2--> 

### Date.now()

::i-chinese{sha="a0037d6bc4c60df31f035b7572663c4fef7400dcbcf1c0a48c6ce866e7c938f4"}
::
Get the number of milliseconds elapsed since 1970 (or on embedded platforms, since startup)

### Date.parse(str)

::i-chinese{sha="e92577fce41761be6906f2581c390b77b997c08f05f1f0c257c73f74d96256d8"}
::
Parse a date string and return milliseconds since 1970. Data can be either `2011-10-20T14:48:00`, `2011-10-20` or `Mon, 25 Dec 1995 13:30:00 +0430`

<!--23--> 

### Date.prototype.getDate()

::i-chinese{sha="94b134efea8b1ff29209a157907c91afc211e9c7390e3f88b18ceb9841cb594b"}
::
Day of the month 1..31

### Date.prototype.getDay()

::i-chinese{sha="09661ae611c1d99774b29e2f13797d17a0d7e50f0cfd553cc36aeb468bf4b4ed"}
::
Day of the week (0=sunday, 1=monday, etc)

### Date.prototype.getFullYear()

::i-chinese{sha="b54b16039547aa1802f3b91b61b192bb6f3cdae150b93fd173a077df95b34630"}
::
The year, eg. 2014

### Date.prototype.getHours()

::i-chinese{sha="eae9d96274bd1cdce4b80d1981a475ae416acea5d87425354d036b79a6abd539"}
::
0..23

### Date.prototype.getMilliseconds()

::i-chinese{sha="b98d06a45d5066057aef8522b291dc1a0c012261b260e0def99f3252239f1194"}
::
0..999

### Date.prototype.getMinutes()

::i-chinese{sha="5a519fb1054abef760696eed90f080e571f85e06646ffd5cd03f94bb050f5fbc"}
::
0..59

### Date.prototype.getMonth()

::i-chinese{sha="60579a62847a0ae5e0f9d0bf452ef914484ba9f22f82188ba58bd079b4c7e6de"}
::
Month of the year 0..11

### Date.prototype.getSeconds()

::i-chinese{sha="5a519fb1054abef760696eed90f080e571f85e06646ffd5cd03f94bb050f5fbc"}
::
0..59

### Date.prototype.getTime()

::i-chinese{sha="20639be235b912c41c306cccc3aa7a476ca9b7aaf3f52d3594b282bda580971f"}
::
Return the number of milliseconds since 1970

### Date.prototype.getTimezoneOffset()

::i-chinese{sha="e12b923df1f186d1a5b94429f3e6bafc6b02c757563d869b335555b32f4cbc3e"}
::
This returns Espruino's time-zone offset from UTC, in minutes.
This is set with `E.setTimeZone` and is System-wide. The value returned
has nothing to do with the instance of `Date` that it is called on.

### Date.prototype.setDate(dayValue)

::i-chinese{sha="94b134efea8b1ff29209a157907c91afc211e9c7390e3f88b18ceb9841cb594b"}
::
Day of the month 1..31

### Date.prototype.setFullYear(yearValue,yearValue,dayValue)

::i-chinese{sha="6fe67268bd196581bf1345454e513f0b3ac92f18ca9892c5b685c5402631b035"}
::
The number of milliseconds since 1970

### Date.prototype.setHours(hoursValue,minutesValue,secondsValue,millisecondsValue)

::i-chinese{sha="eae9d96274bd1cdce4b80d1981a475ae416acea5d87425354d036b79a6abd539"}
::
0..23

### Date.prototype.setMilliseconds(millisecondsValue)

::i-chinese{sha="6fe67268bd196581bf1345454e513f0b3ac92f18ca9892c5b685c5402631b035"}
::
The number of milliseconds since 1970

### Date.prototype.setMinutes(minutesValue,secondsValue,millisecondsValue)

::i-chinese{sha="5a519fb1054abef760696eed90f080e571f85e06646ffd5cd03f94bb050f5fbc"}
::
0..59

### Date.prototype.setMonth(yearValue,dayValue)

::i-chinese{sha="60579a62847a0ae5e0f9d0bf452ef914484ba9f22f82188ba58bd079b4c7e6de"}
::
Month of the year 0..11

### Date.prototype.setSeconds(secondsValue,millisecondsValue)

::i-chinese{sha="5a519fb1054abef760696eed90f080e571f85e06646ffd5cd03f94bb050f5fbc"}
::
0..59

### Date.prototype.setTime(timeValue)

::i-chinese{sha="5d4d6e88d2e52a9cdb7ca6c1de0b783e611c121c4b4b16a4d697919ac284e3b7"}
::
Set the time/date of this Date class

### Date.prototype.toISOString()

::i-chinese{sha="c0588a23f34dad68677049a00f50729e8504b178e718008721aa7330fab62b32"}
::
Converts to a ISO 8601 String, eg: `2014-06-20T14:52:20.123Z`

>**Note:** This always assumes a timezone of GMT

### Date.prototype.toJSON()

::i-chinese{sha="44a3394e81a54949a0822ad2dacd5696620cd82c31ab4ae0e10f1bdde733fac1"}
::
Calls `Date.toISOString` to output this date to JSON

### Date.prototype.toString()

::i-chinese{sha="7106989c6a9e445e5f7e217a79190aa0a4f909fac1491b3182b7ccd24aeae604"}
::
Converts to a String, eg: `Fri Jun 20 2014 14:52:20 GMT+0000`

> **Note:** This uses whatever timezone was set with `E.setTimeZone()`

### Date.prototype.toUTCString()

::i-chinese{sha="b3692264351d6eae80fff72133866a567cafb35e5ea97fd818825f87785daf83"}
::
Converts to a String, eg: `Fri, 20 Jun 2014 14:52:20 GMT`

> **Note:** This always assumes a timezone of GMT

### Date.prototype.valueOf()

::i-chinese{sha="20639be235b912c41c306cccc3aa7a476ca9b7aaf3f52d3594b282bda580971f"}
::
Return the number of milliseconds since 1970
