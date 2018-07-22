import validAsciiEmails from './validAsciiEmails'
import invalidAsciiEmails from './invalidAsciiEmails'
import validUnicodeEmails from './validUnicodeEmails'
import invalidUnicodeEmails from './invalidUnicodeEmails'

export default {
  ascii: {
    valid: validAsciiEmails,
    invalid: [...invalidAsciiEmails, ...validUnicodeEmails, ...invalidUnicodeEmails],
  },
  unicode: {
    valid: [...validAsciiEmails, ...validUnicodeEmails],
    invalid: [...invalidAsciiEmails, ...invalidUnicodeEmails],
  },
}
