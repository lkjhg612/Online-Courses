const express = require('express')
const HomeController = require('../app/controllers/HomeController')


const router = express.Router()

const homController = require('../app/controllers/HomeController')

 router.post('/', homController.login)
// router.get('/logout', homController.logout)

module.exports = router