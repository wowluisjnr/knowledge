const config = require('../knexfile')
const knex = require('knex')(config)

knex.migrate.latest([config])  //chamando migrates direto na aplicação
module.exports = knex