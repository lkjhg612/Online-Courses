const Course = require('../models/Courses')
const PayCourse = require('../models/PayCourses')
const account = require("../models/Account")
const rCourses = require("../models/RegisteredCourses")
const { mongooseToObject}  = require('../../ulti/mongoose')
const { render } = require('node-sass')

class Coursecontroller {
    index(req, res, next) {
        // res.render('Home');
        // res.json({
        //     name: 'test'
        // })

        // Course.find({},function(err, courses){
        //     if(!err){
        //         res.json(courses)
        //     }else{
        //         res.status(400).json({error: 'ERROR!!!'})
        //     }
        // })

        // Course.find({})
        // .then(courses => res.json(courses))
        // .catch(next)

        //khúc này dư
        // Course.find({})
        // .then(courses => {
        //     courses  =courses.map(course =>course.toObject())//chuyển từ object từ mongo sang object literal bth    
        //     res.render('home', {courses})
        
        
        // })
        // .catch(next)         
    }
    //show chi tiết khóa học
    show(req, res, next) {
        const data = req.cookies.User
       
        Course.findOne({slug: req.params.slug})
        .then(course => {
            if(data != null){
                res.render('courses/show', {course:  mongooseToObject(course), data , yuser : true})
            }else{
                res.render('courses/show', {course:  mongooseToObject(course), data , yuser : false})
            }
          
        })
        .catch(next)
    }
   
    async create(req, res, next){
        
        const course = new Course({
            name: req.body.name,
            description: req.body.description,
            image : {
                name : req.file.filename,
                data : req.file.filename,
                content : "image/png"
            },
            videoId: req.body.videoId,
            level: req.body.level

        })
        course.save()
        .then(() => res.redirect('/me/stored/courses'))
    }
//get /course/:id/edit
    edit(req, res, next){
        Course.updateOne({_id: req.body.id},{
            name: req.body.name,
            description: req.body.description,
            image : {
                name : req.file.filename,
                data : req.file.filename,
                content : "image/png"
            },
            videoId : req.body.videoId,
            level: req.body.level
        })
        .then(course => res.redirect('/me/stored/courses'))
        .catch(next)
    }
  
    destroy(req, res, next){
   
        Course.deleteOne({_id: req.body.id})
        .then(course => res.redirect('/me/stored/courses'))
        .catch(next)

    }

    searchCourses(req, res, next){
      var arr = []
      var temp = []
      Course.find({})
        .then((dta) => {
          
          arr = dta.map(ele => ele.toObject())

         arr.find(function(element, index){
            if(element.name == req.body.name){
                temp.push(element)    
            }          
          })
        }) 
        // console.log("đối tượng là: ", temp)
        const datac =  req.cookies.User
        account.find({})
        .then(dataAd =>{
            return res.render("me/stored-courses", {yAdmin: true, course: temp, yCourse: true, datac})
        })
        // return res.render("me/stored-courses", {yAdmin: true, course: temp, yCourse: true,})
        
    }

    async pcreate(req, res, next){
      
        const paycourse = new PayCourse({
            Pname: req.body.Pname,
            Pdescription: req.body.Pdescription,
            image : {
                name : req.file.filename,
                data : req.file.filename,
                content : "image/png"
            },
            Pprice: req.body.Pprice
        })
        paycourse.save()
        .then(() => res.redirect('/me/stored/paycourses'))
    }

    pedit(req, res, next){
      
        PayCourse.updateOne({_id: req.body.id},{
            Pname: req.body.Pname,
            Pdescription: req.body.Pdescription,
            image : {
                name : req.file.filename,
                data : req.file.filename,
                content : "image/png"
            },
            Pprice: req.body.Pprice
           
        })
        .then(paycourse => res.redirect('/me/stored/paycourses'))
        .catch(next)
    }


    pdelete(req, res, next){
   
        PayCourse.deleteOne({_id: req.body.id})
        .then(paycourse => res.redirect('/me/stored/paycourses'))
        .catch(next)

    }

    searchpCourses(req, res, next){
      var arr = []
      var temp = []
      PayCourse.find({})
        .then((dta) => {
          
          arr = dta.map(ele => ele.toObject())

         arr.find(function(element, index){
            if(element.Pname == req.body.Pname){
                temp.push(element)    
            }          
          })
        }) 
        // console.log("đối tượng là: ", temp)

        const datac =  req.cookies.User
        account.find({})
        .then(dataAd =>{
            return res.render("me/stored-paycourses", {yAdmin: true, paycourse: temp, datac})

        })
        // return res.render("me/stored-paycourses", {yAdmin: true, paycourse: temp})

    }

    async rCreate(req, res, next){
        const rcourse = new rCourses({
           rFirstName: req.body.rFirstName,
           rEmail: req.body.rEmail,
           rPhone: req.body.rPhone,
           rCourseName:req.body.rCourseName,
           rPriceCourse: req.body.rPriceCourse,
           rPay : req.body.rPay,
           rStatus: req.body.rStatus
           
        })
        rcourse.save()
        .then(() => res.redirect('/me/stored/registercourses'))


    }

    rEdit(req, res, next){
        rCourses.updateOne({_id: req.body.id},{
         rFirstName: req.body.rFirstName,
           rEmail: req.body.rEmail,
           rPhone: req.body.rPhone,
           rCourseName:req.body.rCourseName,
           rPriceCourse: req.body.rPriceCourse,
           rPay : req.body.rPay,
           rStatus: req.body.rStatus
        })
            .then(rcourse => res.redirect('/me/stored/registercourses'))
    }


    rDelete(req, res, next){
        rCourses.deleteOne({_id: req.body.id})
        .then(rcourse => res.redirect('/me/stored/registercourses'))
        .catch(next)

    }


    rSearch(req, res, next){
        var arr = []
      var temp = []
      rCourses.find({})
        .then((dta) => {
          
          arr = dta.map(ele => ele.toObject())

         arr.find(function(element, index){
            if(element.rFirstName == req.body.rFirstName){
                temp.push(element)    
            }          
          })
        }) 
        // console.log("đối tượng là: ", temp)

        const datac =  req.cookies.User
        account.find({})
        .then(dataAd =>{
            return res.render("me/stored-ordercourses", {yAdmin: true, rcourse: temp, datac})

        })
        // return res.render("me/stored-paycourses", {yAdmin: true, paycourse: temp})

    }


}

module.exports = new Coursecontroller();
