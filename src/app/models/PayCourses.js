const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')


const PayCourse = new Schema({
   Pname: {type: String, require: true},
   Pdescription: {type: String , maxLength: 255},
   Pimage:{type:String},
   Pprice:{type:String},
   image : {
      name : String,
      data : Buffer,
      content: String
    },
   Pslug:{type: String, slug: 'Pname', unique: true},
   createAt:{type: Date, default:Date.now },
   updatedAt:{type: Date, default: Date.now},

})
module.exports = mongoose.model('PayCourse', PayCourse) 