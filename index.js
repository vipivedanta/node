/*initialize the express engine*/
const express = require('express');
const app = express();

/*setting view engine and destination*/
app.set('views', './views');
app.set('view engine', 'pug');

/*setting static file directory*/
app.use(express.static('public'));

app.listen(3000,function(){
	console.log('Listening to 3000');
});

app.get('/',function(req,res){
	res.send('Hellow World Updated!');
});

app.get('/darmu',function(req,res){
	res.send('Darmus home page');
});

app.get('/home',function(req,res){
	res.render('home',{ title : "Welcome Home!", message : "Sharestates!"});
});

app.get('/welcome',function(req,res){
	res.render('welcome',{'title' : 'The BigProject'});
});