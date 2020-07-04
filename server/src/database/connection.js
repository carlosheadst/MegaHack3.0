const knex = require('knex')

 const connection = knex({
     client: 'mysql',
     connection: {
        host : 'localhost',
        user : 'root',
        password : '123456',
        database : 'BrejaFinder'
      },
      useNullAsDefault: true
 })

 module.exports = connection