const Game = require('../../api/components/game/model');
const Type = require('../../api/components/type/model');
const Publisher = require('../../api/components/publisher/model');

Type.hasOne(Game, { sourceKey: 'id', foreignKey: { name: 'typeId', allowNull: false } });
Publisher.hasOne(Game, { sourceKey: 'id', foreignKey: { name: 'publisherId', allowNull: false } });

Game.belongsTo(Type, { targetKey: 'id', foreignKey: { name: 'typeId', allowNull: false } });
Game.belongsTo(Publisher, { targetKey: 'id', foreignKey: { name: 'publisherId', allowNull: false } });
