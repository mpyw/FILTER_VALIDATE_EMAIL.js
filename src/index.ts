import { regexpAsciiEmail, regexpUnicodeEmail } from './regexp';

export const validateEmail = (input: string, unicode = true): boolean => {
  return (unicode ? validateUnicodeEmail : validateAsciiEmail)(input);
};
export const validateAsciiEmail = (input: string): boolean => {
  return validate(regexpAsciiEmail, input);
};
export const validateUnicodeEmail = (input: string): boolean => {
  return validate(regexpUnicodeEmail, input);
};
export default validateEmail;

// noinspection SuspiciousTypeOfGuard
const validate = (regexp: RegExp, input: string): boolean =>
  typeof input === 'string' &&
  input.length <= 320 &&
  regexp.test(input) &&
  input.slice(-1) !== '\n' &&
  encodeURIComponent(input).replace(/%../g, 'x').length <= 320;
