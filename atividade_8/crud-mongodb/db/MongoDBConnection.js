
//usando o mongoose (FRONT-END para o mongoDB
var mongoose = require('mongoose');

//updating
mongoose.set('useFindAndModify', false);

//conexão local
var mongoDB_URI = 'mongodb://127.0.0.1:27017/disciplinas';
mongoose.connect(mongoDB_URI,{useNewUrlParser:true});

//armazenar conexão em uma variável
var db = mongoose.connection;


//listeners
db.on('connected', () => {
    console.log('Mongoose connected to ' + mongoDB_URI);
});

db.on('disconnected', () => {
    console.log('Mongoose disconnected to ' + mongoDB_URI);
});

db.on('error', (error) => {
    console.log('Mongoose Error ' + error);
});