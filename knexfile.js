module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: "appointments",
            host: "localhost"
        },
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    },
    production: {
        client: 'pg',
        connection: process.emitWarning.DATABASE_URL,
        migrations: {
                directory: __dirname + '/db/migrations'
            },
            seeds: {
                directory: __dirname + '/db/seeds'
            }
    }
};