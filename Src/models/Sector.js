module.exports = (sequelize, DataTypes) =>
  sequelize.define('sector', {
    codigo_sector: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eliminado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: 'sector',
    timestamps: false
  })
