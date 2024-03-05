const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')



const Courses  = new Schema({
   name: {type: String, require: true},
   description: {type: String , maxLength: 255},
   image:{type:String},
   image : {
      name : String,
      data : Buffer,
      content: String
    },
   videoId:{type: String, require:true},
   level: {type: String, maxLength: 255}, 
   slug:{type: String, slug: 'name', unique: true},//tạo ra một cái shortid ngẫu nhiên ở cuối trong trường hợp trùng đường link
   createAt:{type: Date, default:Date.now },
   updatedAt:{type: Date, default: Date.now},
   

})
//add plugin
mongoose.plugin(slug)
Courses.plugin(mongooseDelete, {
   
   deletedAt: true,
   
   overrideMethods: 'all'
})

// module.exports = mongo.mode('Course', Courses)//nó sẽ tự động thành dạng chữ thường 

module.exports = mongoose.model('Course', Courses) 