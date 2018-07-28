import { regexpAsciiEmail, regexpUnicodeEmail } from '../regexp'

export function searchEmails(input, unicode = true) {
  return (unicode ? searchUnicodeEmails : searchAsciiEmails)(input)
}
export function searchAsciiEmails(input) {
  return search('ascii', regexpAsciiEmail, input)
}
export function searchUnicodeEmails(input) {
  return search('unicode', regexpUnicodeEmail, input)
}
export default searchEmails

const search = (type, regexp, input) => {
  const emails = ((typeof input === 'string' ? input : '').match(transform(type, regexp)) || [])
    .filter(email =>
      email.length <= 320
      && email.slice(-1) !== '\n'
      && encodeURIComponent(email).replace(/%../g, 'x').length <= 320)
  return emails.length ? emails : null
}
const cache = Object.create(null)
const transform = (type, regexp) => cache[type] || (cache[type] = new RegExp(regexp.source.slice(1, -1), `${regexp.flags}g`))
