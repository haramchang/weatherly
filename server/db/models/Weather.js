const Sequelize = require("sequelize")
const db = require("../db")

const Weather = db.define("Weather", {
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  localTime: {
    type: Sequelize.DATE,
    allowNull: false
  },
  temperature: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  feels: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  humidity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING
  }
})

module.exports = Weather
