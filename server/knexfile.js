const path = require('path')

module.exports = {
     client: 'mysql',
     connection: {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'BrejaFinder'
      },
      migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
      },
      useNullAsDefault: true
 }