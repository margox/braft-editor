// module.exports = require('minimist')(process.argv.slice(2));
module.exports = require('yargs')
  .default('proxyHost', 'localhost')
  .default('proxyPort', '9090')
  .default('secure', false).argv;
