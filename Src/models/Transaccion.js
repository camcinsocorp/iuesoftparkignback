module.exports = (sequelize, DataTypes) =>
  sequelize.define('transaccion', {
    codigo: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigo_sector: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eliminado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: 'transaccion',
    createdAt: 'FechaEntrada',
    updatedAt: 'FechaSalida'
  })
