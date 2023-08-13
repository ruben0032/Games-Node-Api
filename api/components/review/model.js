const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../store/connexion');

const Review = sequelize.define('review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
//   score: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     validate: {
//       max: 10,
//       min: 1,
//     },
//   },
//   content: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
});

module.exports = Review;
