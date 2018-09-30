module.exports = (sequelize, DataTypes) =>
  sequelize.define('vehiculos_multa', {
    codigo_vehiculos_multa: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codigo_multa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    eliminado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: 'vehiculos_multa',
    timestamps: false
  })
