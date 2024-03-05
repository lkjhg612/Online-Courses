const Course = require('../models/Courses')
const PayCourse = require('../models/PayCourses')
const account = require('../models/Account')
const rPayCourse = require('../models/RegisteredCourses')

const { mutipleMongooseToObject}  = require('../../ulti/mongoose')
// const { render } = require('node-sass')
class MeController {
    ///stored/courses get
   storedCourses(req, res, next){
    const datac =  req.cookies.User
        Course.find({})
        .then(course => res.render('me/stored-courses',{
            yCourse: true,
            course: mutipleMongooseToObject(course),
            datac,
            yAdmin: true
        }))
        .catch(next)    
   }
//storePayCourse
storedPayCourses(req,res, next ){
    const datac =  req.cookies.User
    PayCourse.find({})
    .then(paycourse =>res.render('me/stored-paycourses',{
        yPaycourse: true,
        paycourse: mutipleMongooseToObject(paycourse),
        datac,
        yAdmin: true
    }))
    .catch(next)   
}


storeRegisterCourses(req, res, next){
    const datac =  req.cookies.User
    rPayCourse.find({})
    .then(rcourse => res.render('me/stored-ordercourses',{
            yrpaycourse: true,
            rcourse: mutipleMongooseToObject(rcourse),
            datac,
            yAdmin: true
    }))
    .catch(next) 

}



   //me/trash/course
//    trashCourses(req, res, next){
//     Course.findDeleted({})
//         .then(course => res.render('me/trash-courses',{
           
//             course: mutipleMongooseToObject(course)
//         }))
//         .catch(next)

//    }

}

module.exports = new MeController();
