const path = require('path');

module.exports = () => ({
  connection: {
    client: 'sqlite',   // force sqlite
    connection: {
      filename: path.join(__dirname, '..', '.tmp/data.db'),
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: 60000,
  },
});
