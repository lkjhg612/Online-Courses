const mongoose = require('mongoose')

const Schema = mongoose.Schema

const slug  = require('mongoose-slug-generator')

mongoose.plugin(slug)


const rCourses = new Schema({
    rEmail: {type:String},
    rFirstName: {type:String},
    rPhone:{type:String}, 
    rCourseName: {type:String}, 
    rPriceCourse: {type:String}, 
    rStatus: {type:String},
    rPay:{type:String}
})

module.exports = mongoose.model("Registercourses", rCourses)