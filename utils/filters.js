const { DateTime } = require('luxon')
const markdownIt = require('markdown-it')

module.exports = {
  dateToFormat: function (date, format) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(String(format))
  },

  stringDateToFormat: function (date, format) {
    return DateTime.fromJSDate(new Date(date), { zone: 'utc' }).toFormat(
      String(format)
    )
  },

  toJSDate: function (date) {
    return new Date(date)
  },

  dateToISO: function (date) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
      includeOffset: false,
      suppressMilliseconds: true,
    })
  },

  obfuscate: function (str) {
    const chars = []
    for (var i = str.length - 1; i >= 0; i--) {
      chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
    }
    return chars.join('')
  },

  markdownify: function (value) {
    const md = new markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    })
    return md.render(value)
  },
}
