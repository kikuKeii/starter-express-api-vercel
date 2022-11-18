const router = require('express').Router();
const MainController = require('../controller/MainController'); //import MainController from Controler to use the proerty
const AuthorController =require('../controller/AuthorController'); //import AuthorController from Controler to use the proerty


router.get('/', MainController.index);
router.get('/users', MainController.users);
router.get('/users/s', MainController.usersSearch);
router.get('/author', AuthorController.index);

module.exports = router;