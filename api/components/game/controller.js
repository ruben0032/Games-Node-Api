const response = require('../../../network/response');
const tryCatchFn = require('../../../utils/tryCatchFn');
const games = require('../../../store/sequelize/game');

module.exports = {
  getAllGames: tryCatchFn(async (req, res) => {
    const gameList = await games.getGames();
    if (!gameList[0]) {
      response.error(req, res, 'No se encontro ningun VideoJuego', 404);
    }
    response.succes(req, res, gameList, 200);
  }),
  postGame: tryCatchFn(async (req, res) => {
    const {
      title, description, publicDate, studio,
    } = req.body;
    const id = await games.postGame({
      title, description, publicDate, studio,
    });
    if (!id) {
      response.error(req, res, 'No fue posible agregar el VideoJuego', 400);
    }
    response.succes(req, res, 'VideoJuego agregado exitosamente', 201);
  }),
};
