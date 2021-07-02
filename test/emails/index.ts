import validAsciiEmails from './validAsciiEmails.json';
import invalidAsciiEmails from './invalidAsciiEmails.json';
import validUnicodeEmails from './validUnicodeEmails.json';
import invalidUnicodeEmails from './invalidUnicodeEmails.json';

export default {
  ascii: {
    valid: validAsciiEmails,
    invalid: [
      ...invalidAsciiEmails,
      ...validUnicodeEmails,
      ...invalidUnicodeEmails,
    ],
  },
  unicode: {
    valid: [...validAsciiEmails, ...validUnicodeEmails],
    invalid: [...invalidAsciiEmails, ...invalidUnicodeEmails],
  },
};
