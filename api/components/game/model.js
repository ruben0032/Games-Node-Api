const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../store/connexion');

const Game = sequelize.define('game', { // define:metodo para crear tablas en db
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  publicDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    get() {
      const raw = this.getDataValue('publicDate');
      const date = new Date(raw);
      return date.toLocaleDateString();
    },
  },
  studio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
//   urlImage: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
});

module.exports = Game;
