module.exports = (sequelize, DataTypes) =>
  sequelize.define('tipo_vehiculo', {
    codigo_tipo_vehiculo: {
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
    tableName: 'tipo_vehiculo',
    timestamps: false
  })
