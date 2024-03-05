const express = require('express')

const router = express.Router()
const multer = require('multer')
const path = require('path');

const courseController = require('../app/controllers/CourseController')

const Stored = multer.diskStorage({
    destination : path.join( "src\\public\\khangImage"),
    filename : (req, file , cb) => {
       cb(null, file.originalname)
    }
})


const upload = multer({
   storage : Stored
})

//khóa học free
router.post('/create',upload.single("myImage"),courseController.create)  
router.delete('/destroy', courseController.destroy) 
router.patch('/edit', upload.single("myImage"),courseController.edit)
router.post('/searchCourses', courseController.searchCourses)


//khóa học trả phí
router.post('/pcreate', upload.single("myImage"), courseController.pcreate)
router.delete('/pdelete', courseController.pdelete)
router.patch('/pedit', upload.single("myImage"), courseController.pedit)
router.post('/searchpCourses', courseController.searchpCourses)

//khóa học trả phí đã đăng ký
router.post('/rcreate', courseController.rCreate)
router.delete('/rdelete', courseController.rDelete)
router.patch('/redit', courseController.rEdit)
router.post('/searchrCourses', courseController.rSearch)



//show chi tiết khóa học
router.get('/:slug', courseController.show)  
 

module.exports = router 