module.exports = (sequelize, DataTypes) =>
  sequelize.define('multa', {
    codigo_multa: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eliminado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: 'multa',
    timestamps: false
  })
