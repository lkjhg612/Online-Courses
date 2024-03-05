const Course = require('../models/Courses')
const account = require('../models/Account')
const PayCourse = require('../models/PayCourses')
const {mutipleMongooseToObject} = require ('../../ulti/mongoose')
const rCourses = require("../models/RegisteredCourses")
var nodemailer = require('nodemailer');
var code = ""

class homecontroller {
index(req, res, next) {
     
     
       
      res.clearCookie("Code")
      const data = req.cookies.User;
      console.log(data)
      Course.find({})
        .then(courses => {        
            if(data != null){
                return res.render("home", {data, ycourse: true,yuser : true, courses: mutipleMongooseToObject(courses)})
            }
            else if(data == null ){
                return res.render("home", { ycourse: true,yuser : false , courses: mutipleMongooseToObject(courses)})
            }    
        })
        .catch(next)  
    
     }

homePayCourses(req, res, next){
    const data = req.cookies.User;
    console.log(data)
    PayCourse.find({})
        .then(paycourses => {
            if(data != null){
                // console.log(`dữ liệu: ${JSON.stringify(data)}`)
                return res.render("home", {data , ypcourse: true,yuser: true, paycourses: mutipleMongooseToObject(paycourses)})
            }else if(data == null){
                return res.render("home", {ypcourse: true,yuser: false, paycourses: mutipleMongooseToObject(paycourses)})
            }
        })
        .catch(next)
        
      

}

     login(req, res, next){
            
        account.findOne({
            email:req.body.email,
            passWord: req.body.passWord,
        })
        .then((data) => {
            
            if(data != null){
           
                res.cookie("User", data, {
                    maxAge: 24*60*60*10000,
                    httpOnly: false,
                })

                if(data.access == 'admin'){
                    return res.redirect("/admin")
                }else{
                    return res.redirect("/")
                }

            }else{
                Course.find({})
                .then(courses => {
                    return res.render("home", {loginError: true, yUser: false, courses: mutipleMongooseToObject(courses)})
                })
                
            }
            
        })

    }

    logout(req,res, next){
        res.clearCookie('User');
        return res.redirect("/")
    }

    async signUp(req, res, next){
        const us = new account({
           firstName : req.body.firstName,
           email : req.body.email,
           passWord : req.body.passWord,
           phone: req.body.phone,
           access : "hocvien",
           image : {
            name : req.file.filename,
            data : req.file.filename,
            content : "image/png"
        }
        })


        var char = "sdfhsalsafjhkhkhadfhngfkgh867095836945386"
        var lenght = 10 

       for(let i = 0; i < lenght ; i++){
           code += char.charAt(Math.floor(Math.random() * char.length))
        }

        res.cookie("Code", code, {
            maxAge : 1000 * 1000,
            httpOnly : false,
        })
       

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'davidtruong501@gmail.com',
              pass: 'trcavtxmcnirfskj'
            }
          })
        
          var mailOptions = {
            from: 'davidtruong501@gmail.com',
            to: req.body.email,
            subject: 'Khang-Education',
            text: `Welcome to Khang-Education the best quality website in VietNam Please verify your account using this code ${code}` 
         
          }
    
    
         await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
           
            console.log(error)
            } else {
              console.log('Email sent: ' + info.response);
           
            }
          })  
          us.save()
   }

   Code(req, res, next){
    const codeCookie = req.cookies.Code
    Course.find({})
    .then(courses => {
        if(codeCookie == req.body.code)
        res.render("home", {ySignUp : true , yUser : true, courses: mutipleMongooseToObject(courses)})
        else{
        res.render("home", {ySignUp : false , yUser : false, courses: mutipleMongooseToObject(courses)})
        }
    })
    
}
// Tao cung la Son
    admin(req, res, next){
        const datac =  req.cookies.User
        account.find({})
        .then(dataAd => {
            return res.render("admin/adminuser", {yAdmin: true, dataAd: dataAd.map(dataAd => dataAd.toObject()), datac})
           
        })
        .catch(next)
       }

    about(req, res){
        res.render("about")
    }
    blog(req, res){
        res.render("blog")
    }

    async buyCourse(req, res, next){

        const resgiscourse = new rCourses({
            rFirstName: req.body.rFirstName,
            rEmail: req.body.rEmail,
            rPhone: req.body.rPhone,
            rCourseName:req.body.rCourseName,
            rPriceCourse: req.body.rPriceCourse,
            rPay: req.body.rPay,
            rStatus: "Processing..."
        })

       

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'davidtruong501@gmail.com',
              pass: 'trcavtxmcnirfskj'
            }
          })
        
          var mailOptions = {
            from: 'davidtruong501@gmail.com',
            to: req.body.rEmail,
            subject: 'Khang-Education',
            text: `Xác nhận thanh toán thành công chúng tôi sẽ xử lý yêu cầu của bạn trong thời gian sớm nhất. Mọi thắc mắc xin liên hệ 0978974412 để được hỗ trợ` 
         
          }
    
    
          await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
           
            console.log(error)
            } else {
              console.log('Email sent: ' + info.response);
           
            }
          })  

    console.log(req.body);
    resgiscourse.save()

    const data = req.cookies.User;
    console.log(data)
          PayCourse.find({})
          .then(paycourses => {
              if(data != null){
                  return res.render("home", {data, ypcourse: true,yuser: true, paycourses: mutipleMongooseToObject(paycourses)})
              }else if(data == null){
                  return res.render("home", {ypcourse: true,yuser: false, paycourses: mutipleMongooseToObject(paycourses)})
              }
          })
          .catch(next)

    }
   
}

module.exports = new homecontroller();
