# p-after 
[![Build Status](https://img.shields.io/travis/nicholaiii/p-after)](https://travis-ci.com/Nicholaiii/p-after)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Resolve a promise with specified data after an amount of time

Useful if you want to return data after some time, for example, if you want to sequence data at varying rates.

## Usage
```ts
const after = require('p-after')
(async () => {
  const result = await after(1000, 'OK')
  // After one second, the promise resolves with 'OK'. 
})
```

## API

### pAfter(when, what)

#### when
Type: `number`

The amount of time to delay returning the data.

#### what
Type: `any`

The data to return after delay.

## Related
- [delay](https://github.com/sindresorhus/delay) - Delay a promise a specified amount of time
- [p-min-delay](https://github.com/sindresorhus/p-min-delay) - Delay an existing promise a minimum amount of time
- [p-immediate](https://github.com/sindresorhus/p-immediate) - Returns a promise resolved in the next event loop - think `setImmediate()`
- [p-timeout](https://github.com/sindresorhus/p-timeout) - Timeout a promise after a specified amount of time
- [More…](https://github.com/sindresorhus/promise-fun)
