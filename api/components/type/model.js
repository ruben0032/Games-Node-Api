const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../store/connexion');

const Type = sequelize.define('type', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, { timestamps: false });

module.exports = Type;
