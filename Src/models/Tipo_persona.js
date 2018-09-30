module.exports = (sequelize, DataTypes) =>
  sequelize.define('tipo_persona', {
    codigo_tipo_persona: {
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
    tableName: 'tipo_persona',
    deleteAt: false,
  })
