const router = require('express').Router()
module.exports = router

// api/weather
router.use('/weather', require('./weather'))

// api/states
router.use('/states', require('./states'))

// api/users
router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
