const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../store/connexion');

const Publisher = sequelize.define('publisher', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, { timestamps: false });

module.exports = Publisher;
