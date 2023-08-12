const express = require('express');
const config = require('./config');
const gameRoutes = require('./api/components/game/route');
const errors = require('./network/errors');
const sequelizeErrors = require('./network/sequelizeErrors');
const notFound = require('./network/notFound');
const { sequelize } = require('./store/connexion');
require('./store/sequelize/associations'); // importacion de las relaciones entre entidades (modelos)

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Funcionando');
});

app.use('/api/game', gameRoutes);

// respuesta por defecto (rutas no existentes)
app.use('*', notFound);

// errores globales (despues de todas las rutas)
app.use(sequelizeErrors);
app.use(errors);

app.listen(config.api.port, async () => {
  try {
    await sequelize.sync({ force: true });
    console.log(`server on: ${config.api.port}`);
  } catch (error) {
    console.log(`Unable to connect: ${error}`);
  }
});
