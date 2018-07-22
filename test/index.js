import test from 'tape'
import validate from '../src'
import emails from './emails'

for (const email of emails.ascii.valid) {
  test(`valid(ascii): ${email}`, assert => {
    assert.ok(validate(email, false))
    assert.end()
  })
}

for (const email of emails.ascii.invalid) {
  test(`invalid(ascii): ${email}`, assert => {
    assert.notOk(validate(email, false))
    assert.end()
  })
}

for (const email of emails.unicode.valid) {
  test(`valid(unicode): ${email}`, assert => {
    assert.ok(validate(email))
    assert.end()
  })
}

for (const email of emails.unicode.invalid) {
  test(`invalid(unicode): ${email}`, assert => {
    assert.notOk(validate(email))
    assert.end()
  })
}
