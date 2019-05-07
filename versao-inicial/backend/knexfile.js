// Update with your config settings.

module.exports = {
 
    client: 'postgresql',
    connection: {
      database: 'knowledge',
      user:     'postgres',
      password: 'luis281087'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  

};
