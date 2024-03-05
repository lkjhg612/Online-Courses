const account = require("../models/Account")

const cookieParser = require("cookie-parser");

const express = require('express')

const app = express();

const path = require('path');

const {mutipleMongooseToObject} = require('../../ulti/mongoose');
const Account = require("../models/Account");
const { find } = require("../models/Courses");

class manageUserController{


  updateAdmin(req, res, next){
  // console.log(req.file.filename)
        account.updateOne({_id: req.body.id},{
          email: req.body.email, 
          firstName: req.body.firstName, 
          passWord: req.body.passWord, 
          access: req.body.access, 
          phone: req.body.phone,
          image : {
            name : req.file.filename,
            data : req.file.filename,
            content : "image/png"
        }
        })
        .then(data => res.redirect('/admin'))
        .catch(next)
       }
    
     deleteAdmin(req, res, next){
        account.deleteOne({_id: req.body.id})
        .then(data => res.redirect('/admin'))
        .catch(next)
       }

       
      async createAdmin(req, res, next){
        // var user = new Account(req.body) 
        var user = new Account({
          firstName : req.body.firstName,
          email : req.body.email,
          passWord : req.body.passWord,
          phone: req.body.phone,
          access : req.body.access,
          image : {
            name : req.file.filename,
            data : req.file.filename,
            content : "image/png"
        }
        }) 
        user.save()
        .then(data => res.redirect('/admin'))
        
       }
     
      
  searchAdmin(req, res, next){

      var arr = []
      var temp = []
        account.find({})
        .then((dta) => {
          
          arr = dta.map(ele => ele.toObject())

         arr.find(function(element, index){
            if(element.firstName == req.body.firstName){
                temp.push(element)    
            }          
          })
        }) 
        // console.log("đối tượng là: ", temp)
        const datac =  req.cookies.User
        account.find({})
        .then(dataAd => {
          return res.render("admin/adminuser", { yAdmin: true, dataAd: temp, datac})
        })
        
        // return res.render("admin/adminuser", {yAdmin: true, dataAd: temp})
        

       }
   
    
   

}


module.exports = new manageUserController()