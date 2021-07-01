import { regexpAsciiEmail, regexpUnicodeEmail } from './regexp';

export const validateEmail = (input: unknown, unicode = true): boolean => {
  return (unicode ? validateUnicodeEmail : validateAsciiEmail)(input);
};
export const validateAsciiEmail = (input: unknown): boolean => {
  return validate(regexpAsciiEmail, input);
};
export const validateUnicodeEmail = (input: unknown): boolean => {
  return validate(regexpUnicodeEmail, input);
};
export default validateEmail;

const validate = (regexp: RegExp, input: unknown): boolean =>
  typeof input === 'string' &&
  input.length <= 320 &&
  regexp.test(input) &&
  input.slice(-1) !== '\n' &&
  encodeURIComponent(input).replace(/%../g, 'x').length <= 320;
