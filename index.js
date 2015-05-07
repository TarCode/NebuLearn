var express = require('express')
var app = express()
var exphbs  = require('express-handlebars')

var galaxies = require('./data/galaxies');
var planets = require('./data/planets');
var tech = require('./data/tech');
var satImg = require('./data/satImg');

var galQuiz = require('./data/galQuiz')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('land');
});

app.get('/char', function (req, res) {
    res.render('char');
});

app.get('/topic', function (req, res) {
    res.render('topic');
});

app.get('/galaxies', function (req, res) {
    res.render('info',{info:galaxies});
    
});

app.get('/planets', function (req, res) {
    res.render('info',{info:planets});
});

app.get('/tech', function (req, res) {
    res.render('info',{info:tech});
});

app.get('/satImg', function (req, res) {
    res.render('info', {info:satImg});
});

app.get('/quiz', function (req, res) {
    res.render('quiz', {quiz:galQuiz});
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

