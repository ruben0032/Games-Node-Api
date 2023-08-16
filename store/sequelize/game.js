const Game = require('../../api/components/game/model');

module.exports = {
  postGame: async ({
    title, description, publicDate, studio, typeId, publisherId,
  }) => {
    const newGame = await Game.create({
      title,
      description,
      publicDate,
      studio,
      typeId,
      publisherId,
    });
    return newGame.id;
  },
  getGames: async () => {
    const games = Game.findAll({ order: [['createdAt', 'DESC']] });
    return games;
  },
};
