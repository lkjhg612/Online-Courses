const express = require('express');

const router = express.Router();

const multer = require('multer')
const path = require('path');

const homecontroller = require('../app/controllers/HomeController');

// router.get('/:slug', homecontroller.show);
// router.get('/', homecontroller.index);

const Stored = multer.diskStorage({
    destination : path.join( "src\\public\\khangImage"),
    filename : (req, file , cb) => {
       cb(null, file.originalname)
    }
})


const upload = multer({
   storage : Stored
})

router.get('/', homecontroller.index)
router.get('/homePayCouses', homecontroller.homePayCourses)
router.get('/about', homecontroller.about)
router.get('/blog', homecontroller.blog)
router.post("/check", homecontroller.Code)

router.post('/logout', homecontroller.logout)

router.post('/signup', upload.single("myImage"), homecontroller.signUp)

router.get('/admin', homecontroller.admin)

router.post('/buy', homecontroller.buyCourse)

module.exports = router;
