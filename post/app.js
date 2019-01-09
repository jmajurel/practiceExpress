var express = require('express');
var bodyParser = require('body-parser');
const util = require('util');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('assets'));

var friends = ["Maria", "Sylvain", "Peper", "Suzy"];

app.post('/addFriend', (req, res) => {
  friends.push(req.body.newFriend);
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.render("home", {friends: friends});
});

app.get('*', (req, res) => {
  res.render("default");
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
