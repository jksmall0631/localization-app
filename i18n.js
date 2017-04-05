const i18n = require('i18n');

i18n.configure({
  locales: ['en-US', 'es'],
  defaultLocale: 'en-US',
  directory: __dirname + '/locales',
  api: {
      '__': 'translate',
    },
  queryParameter: 'lang'
});

module.exports = (req, res, next) => {
  i18n.init(req, res);
  return next();
}
