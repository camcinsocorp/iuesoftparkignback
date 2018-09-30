const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

// Foreign keys
// db['Persona'].belongsTo(db['Tipo_persona'], { foreignKey: 'codigo_tipo_persona' })

// db['Transaccion'].belongsTo(db['Persona'], { foreignKey: 'cedula' })
// db['Transaccion'].belongsTo(db['Vehiculo'], { foreignKey: 'placa' })
// db['Transaccion'].belongsTo(db['Sector'], { foreignKey: 'codigo_sector' })

// db['Vehiculo'].belongsTo(db['Tipo_vehiculo'], { foreignKey: 'codigo_tipo_vehiculo' })

// db['Vehiculos_multa'].belongsTo(db['Vehiculo'], { foreignKey: 'placa' })
// db['Vehiculos_multa'].belongsTo(db['Persona'], { foreignKey: 'cedula' })
// db['Vehiculos_multa'].belongsTo(db['Multa'], { foreignKey: 'codigo_multa' })

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
