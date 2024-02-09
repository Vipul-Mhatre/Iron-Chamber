const express = require('express');
const router = express.Router();
const service = require('../controllers/service');
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/register', service.signup)
router.post('/signin', service.signin)
router.post('/forgotpassword', service.forgotpassword)
router.post('/uploadfile',authMiddleware,service.upload)


module.exports = router;