const express = require("express")
const router = express.Router()
const fetch = require("node-fetch")
require("dotenv").config()
const WEATHER_API_KEY = process.env.WEATHER_API_KEY

// GET api/weatherapi/:state
router.get("/:state", async (req, res, next) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${req.params.state}&aqi=no`)
    const data = await response.json()
    res.json(data)
  } catch (error) {
    next(error)
  }
})

module.exports = router
