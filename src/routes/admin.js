const express = require("express")
const router = express.Router();
const multer = require('multer')
const path = require('path');

const manageUserController = require('../app/controllers/ManageUserController')

const Stored = multer.diskStorage({
    destination : path.join( "src\\public\\khangImage"),//đường dẫn nơi lưu hình
    filename : (req, file , cb) => {
       cb(null, file.originalname)
    }
})

//Tao la Son
const upload = multer({
   storage : Stored
})

router.post('/createadmin',upload.single("myImage"),manageUserController.createAdmin)
router.patch('/updateadmin', upload.single("myImage"),manageUserController.updateAdmin)
router.delete('/deleteadmin', manageUserController.deleteAdmin)
router.post('/searchUs', manageUserController.searchAdmin)

module.exports = router