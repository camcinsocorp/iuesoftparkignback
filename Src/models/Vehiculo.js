module.exports = (sequelize, DataTypes) =>
  sequelize.define('vehiculo', {
    placa: {
      primaryKey: true,
      type: DataTypes.STRING,
      unique: true
    },
    codigo_tipo_vehiculo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'vehiculo',
    timestamps: false
  })

    