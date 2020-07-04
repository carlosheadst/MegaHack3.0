const path = require('path')

module.exports = {
     client: 'mysql',
     connection: {
        host : 'localhost',
        user : 'root',
        password : '123456',
        database : 'BrejaFinder'
      },
      migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
      },
      useNullAsDefault: true
 }