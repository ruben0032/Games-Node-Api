module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'thesecret!',
  },
  sequelize: {
    host: process.env.SEQ_HOST || 'localhost',
    user: process.env.SEQ_USER || 'postgres',
    password: process.env.SEQ_PASS || 'post4u',
    database: process.env.SEQ_DB || 'gameslocal',
  },
};
