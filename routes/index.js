const express = require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');



router.get('/',homeController.home);
/* 
for any further requests, access from here
router.use('/routerName , require('./routerFile))
*/


module.exports=router;