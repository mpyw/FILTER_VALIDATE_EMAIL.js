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

const validate = (regex, input) => {
  if (typeof input !== 'string') {
    return false
  }
  if (input.length > 640) {
    return false
  }
  if (input.slice(-1) === '\n') {
    return false
  }
  if (encodeURIComponent(input).replace(/%../g, 'x').length > 320) {
    return false
  }
  return regex.test(input)
}
