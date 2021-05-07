module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb+srv://partnerinmagic:partnerinmagic@socialmediaappcluster.leoir.mongodb.net/partner-in-magic?retryWrites=true&w=majority',
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: 'partner-in-magic',
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
})

