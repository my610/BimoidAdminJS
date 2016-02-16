var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('(\/|\/index)', function(req, res, next) {
  res.render('index', { title: 'Bimoid Admin JS' , route:'/index'});
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' , route:'/about'});
});

router.get('/reset', function(req, res, next) {
  res.render('reset', { title: 'Reset password' , route:'/reset'});
});

router.get('/reg', function(req, res, next) {
  res.render('reg', { title: 'Reg new account' , route:'/reg'});
});


module.exports = router;
