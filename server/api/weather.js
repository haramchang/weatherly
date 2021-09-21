const express = require('express')
const router = express.Router()
const { Weather } = require('../db')

// GET /api/weather
router.get("/", async (req, res, next) => {
  try {
    const data = Weather.findAll()
    res.send(data)
  } catch (error) {
    next(error)
  }
})

// POST /api/weather
router.post("/", async (req, res, next) => {
  try {
    const data = await Weather.create(req.body)
    res.status(201).send(data)
  } catch (error) {
    next(error)
  }
})

// GET /api/weather/:state
router.get("/:state", async (req, res, next) => {
  try {
    const state = req.params.state
    const data = await Weather.findOne({
      where: { state }
    })
    res.send(data)
  } catch (error) {
    next(error)
  }
})

// PUT /api/weather/:state
router.put("/:state", async (req, res, next) => {
  try {
    const state = req.params.state
    const updatedState = await Weather.findOne({
      where: { state }
    })
    res.send(updatedState)
  } catch (error) {
    next(error)
  }
})

module.exports = router
