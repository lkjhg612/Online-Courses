const mongoose = require('mongoose')

const Schema = mongoose.Schema

const slug  = require('mongoose-slug-generator')

mongoose.plugin(slug)

const account = new Schema({
    email:{type:String},
    firstName:{type:String},
    avatar :{type: String},

    image : {
        name : String,
        data : Buffer,
        content: String
      },
    passWord:{type: String},
    access:{type: String},
    phone: {type:String},
    slug : {type:String, slug : "firstName", unique : true, sparse: true}



})

module.exports = mongoose.model("Account", account)

