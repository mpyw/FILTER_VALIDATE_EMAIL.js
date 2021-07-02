import validate from '../src';
import emails from './emails';

for (const email of emails.ascii.valid) {
  test(`valid(ascii): ${email}`, () => {
    expect(validate(email, false)).toBe(true);
  });
}

for (const email of emails.ascii.invalid) {
  test(`invalid(ascii): ${email}`, () => {
    expect(validate(email, false)).toBe(false);
  });
}

for (const email of emails.unicode.valid) {
  test(`valid(unicode): ${email}`, () => {
    expect(validate(email)).toBe(true);
  });
}

for (const email of emails.unicode.invalid) {
  test(`invalid(unicode): ${email}`, () => {
    expect(validate(email)).toBe(false);
  });
}
