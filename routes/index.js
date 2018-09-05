var express = require('express');
var router = express.Router();

//root route
router.get('/', function(req, res) {
    res.render('home');
});

router.get('/about', function(req, res) {
    res.render('about');
});

router.get('/projects', function(req, res) {
    res.render('projects');
});

router.get('/art', function(req, res) {
    res.render('art');
});

router.get('/contact', function(req, res) {
    res.render('contact');
});

router.get('/resume', function(req, res) {
    res.render('resume');
});

router.get('/donate', function(req, res) {
    res.render('donate');
});

//root route
router.get('*', function(req, res) {
    res.render('home');
});

module.exports = router;