import { regexpAsciiEmail, regexpUnicodeEmail } from './regexp'

export function validateEmail(input, unicode = true) {
  return (unicode ? validateUnicodeEmail : validateAsciiEmail)(input)
}
export function validateAsciiEmail(input) {
  return validate(regexpAsciiEmail, input)
}
export function validateUnicodeEmail(input) {
  return validate(regexpUnicodeEmail, input)
}
export default validateEmail

const validate = (regexp, input) =>
  typeof input === 'string'
      && input.length <= 320
      && regexp.test(input)
      && input.slice(-1) !== '\n'
      && encodeURIComponent(input).replace(/%../g, 'x').length <= 320
