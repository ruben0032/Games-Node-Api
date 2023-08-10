const express = require('express');
const config = require('./config');
const gameRoutes = require('./api/components/game/route');
const errors = require('./network/errors');
const notFound = require('./network/notFound');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Funcionando');
});

app.use('/game', gameRoutes);

// respuesta por defecto (rutas no existentes)
app.use('*', notFound);

// errores globales (despues de todas las rutas)
app.use(errors);

app.listen(config.api.port, () => {
  console.log(`server on: ${config.api.port}`);
});
