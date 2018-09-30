module.exports = (sequelize, DataTypes) =>
  sequelize.define('Persona', {
    cedula: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    codigo_tipo_persona: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    carnet: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
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
    tableName: 'Persona',
    timestamps: false
  })
