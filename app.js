const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
 
const app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs());
app.use(express.static(path.join(__dirname, 'node_modules'))); 

app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);