import ejs from 'ejs';
import ejsMate from 'ejs-mate';
import express from 'express';

const app = express()

app.engine('ejs', engine);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // so you can render('index')

// render 'index' into 'boilerplate':
app.get('/',function(req,res,next){
  res.render('index');
});






