const response = require('../../../network/response');
const tryCatchFn = require('../../../utils/tryCatchFn');

module.exports = {
  getAllGames: tryCatchFn(async (req, res) => {
    response.succes(req, res, [{ id: 1, title: 'prueba' }], 201);
  }),
  getError: tryCatchFn(async (req, res) => {
    throw Error;
  }),
};
