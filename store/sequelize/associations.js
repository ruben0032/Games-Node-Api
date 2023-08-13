const Game = require('../../api/components/game/model');
const Type = require('../../api/components/type/model');
const Publisher = require('../../api/components/publisher/model');
const Review = require('../../api/components/review/model');
const User = require('../../api/components/user/model');

Type.hasOne(Game, {
  sourceKey: 'id',
  foreignKey: {
    name: 'typeId',
    allowNull: false,
  },
});
Publisher.hasOne(Game, {
  sourceKey: 'id',
  foreignKey: {
    name: 'publisherId',
    allowNull: false,
  },
});
Game.hasMany(Review, {
  sourceKey: 'id',
  foreignKey: {
    name: 'gameId',
    allowNull: false,
  },
});
User.hasMany(Review, {
  sourceKey: 'id',
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});

Game.belongsTo(Type, {
  targetKey: 'id',
  foreignKey: {
    name: 'typeId',
    allowNull: false,
  },
});
Game.belongsTo(Publisher, {
  targetKey: 'id',
  foreignKey: {
    name: 'publisherId',
    allowNull: false,
  },
});
Review.belongsTo(Game, {
  targetId: 'id',
  foreignKey: {
    name: 'gameId',
    allowNull: false,
  },
});
Review.belongsTo(User, {
  targetId: 'id',
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});
