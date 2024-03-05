const homesite = require('./home')
const courseRoute = require('./courses')
const meRouter = require('./me')
const logRoute = require('./log')
const adminRoute = require('./admin')

function route(app) {
    app.use('/', homesite)

    app.use('/me', meRouter)

    app.use('/courses', courseRoute)

     app.use('/login', logRoute)

     app.use('/adminuser', adminRoute)

   
}

module.exports = route;
