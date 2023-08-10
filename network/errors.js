const { error } = require('./response');

const errors = (err, req, res, next) => {
  console.log('*** [error]', err);

  let message = err.message || 'INTERNAL SERVER ERROR';
  let status = err.statusCode || 500;

  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeDatabaseError') {
    message = 'ERROR DE CAMPOS';
    status = 400;
  }

  error(req, res, message, status);
  next();
};

module.exports = errors;
