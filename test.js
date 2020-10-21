const test = require('ava').default
const timeSpan = require('time-span')
const inRange = require('in-range')
const after = require('.')

test('settles after delay', async t => {
  const end = timeSpan()
  const result = await after(200, 'OK')
  t.is('OK', result)
  t.true(inRange(end(), { start: 180, end: 220 }))
})
