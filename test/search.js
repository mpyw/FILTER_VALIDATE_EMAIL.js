import test from 'tape'
import { searchEmails } from '../src'

test(`search(ascii)`, assert => {
  assert.deepEqual(searchEmails('ABC <abc@example.com>, あいう <アイウ@example.com>', false), ['abc@example.com'])
  assert.deepEqual(searchEmails(['あいう <アイウ@example.com>'], false), null)
  assert.end()
})

test(`search(unicode)`, assert => {
  assert.deepEqual(searchEmails('ABC <abc@example.com>, あいう <アイウ@example.com>'), ['abc@example.com', 'アイウ@example.com'])
  assert.deepEqual(searchEmails(['これは無効です <invalid.@example.com>']), null)
  assert.end()
})
