const express = require('express');
const router = express.Router();

const app_Controller = require('../controller/appController');

router.get('/', app_Controller.login);
router.get('/loggedin', app_Controller.app);
router.get('/admin', app_Controller.admin);



module.exports = router;