var express = require('express');
var morgan = require('morgan');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRoute = require('./leaderRoute');

var hostname = 'localhost';
var port = '3000';

var app = express();
app.use(morgan('dev'));

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRoute);

app.use(express.static(__dirname + '/ui'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}`);
})
