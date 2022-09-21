const fs = require('fs')
const path = require('path')
const { default: axios } = require('axios')

const excludes = [
  'ArduinoPico',
  'ble_eddystone_uid',
  'ble_eddystone',
  'ble_hid_combo',
  'ble_hid_controls',
  'ble_hid_keyboard',
  'ble_hid_mouse',
  'ble_http',
  'ble_ibeacon',
  'ble_midi',
  'ble_printer',
  'ble_simple_uart',
  'ble_uart',
  'BluefruitLE',
  'ESP8266WiFi_0v25',
  'ESP8266WiFi',
  'EspruinoWiFi',
  'FlashEEPROM',
  'GroveArduinoPico',
  'InfluxDB',
  'InitialState',
  'Losant',
  'MQTT',
  'MySensors',
  'NFCTag',
  'Ping',
  'QuectelBG96',
  'QuectelM35',
  'Ruuvitag',
  'sntp',
  'SIM900',
  'STM32F1Flash',
  'tinyMQTT',
  'USBKeyboard',
  'USBMedia',
  'USBMouse',
  'USBTablet',
  'WebServer',
  'ws'
]

const template = 
`---
title: __title__
category: 'outer'
tags: [module]
---

\`\`\`javascript
__data__
\`\`\`
`

async function fetch () {
  const url = 'http://www.espruino.com/modules/'

  const { data } = await axios.get(url)
  const mList = data.match(/href="\w+.js"/g).map(v =>
    v
      .replace('href="', '')
      .replace('"', '')
      .replace('.js', '')
  )
  const count = mList.length

  console.log(`modules count: ${count}`)
  for (let idx = 0; idx < count; idx++) {
    const m = mList[idx]

    if (excludes.includes(m)) {
      console.log(`skip ${m}  (${idx + 1}/${count})`)
      continue
    }

    console.log(`download ${m}  (${idx + 1}/${count})`)
    let { data } = await axios.get(`${url}${m}.js`)
    data = data.replace(/```/g, '')
    const mfile = path.join(__dirname, `public/beanio/modules/${m}.js`)
    const cfile = path.join(__dirname, `content/beanio/outer/${m}.md`)
    fs.writeFileSync(mfile, data)
    fs.writeFileSync(cfile, template.replace('__data__', data).replace('__title__', m))
  }
}

fetch()
