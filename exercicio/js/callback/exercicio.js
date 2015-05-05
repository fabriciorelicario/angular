var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var usuarios = [
	{nome: "Joao do carmo", telefone: "(99) 9999-9999", data: new Date(), operadora: {id: 4, codigo: "31", nome: "Oi", tipo: "Movel", preco: 0.75}, cor: "purple"},
	{nome: "Maria da GRACA DE almeiDA", telefone: "(88) 8888-8888", data: new Date(), operadora: {id: 23, codigo: "14", nome: "Vivo", tipo: "Movel", preco: 0.49}, cor: "green"},
	{nome: "Fabricio farias DA sILVA", telefone: "(77) 7777-7777", data: new Date(), operadora: {id: 24, codigo: "41", nome: "Tim", tipo: "Movel", preco: 0.50}, cor: "blue"},
	{nome: "Jonis preira ALBUQUERQUE", telefone: "(66) 6666-6666", data: new Date(), operadora: {id: 25, codigo: "21", nome: "Claro", tipo: "Movel", preco: 0.69}, cor: "red"}
];

var operadoras = [
	{id: 4, codigo: "31", nome: "Oi", tipo: "Movel", preco: 0.75}, 
	{id: 23, codigo: "14", nome: "Vivo", tipo: "Movel", preco: 0.49}, 
	{id: 24, codigo: "41", nome: "Tim", tipo: "Movel", preco: 0.50}, 
	{id: 25, codigo: "21", nome: "Claro", tipo: "Movel", preco: 0.69}, 
	{id: 55, codigo: "21", nome: "Embratel", tipo: "Fixo", preco: 0.50}, 
	{id: 13, codigo: "31", nome: "GVT", tipo: "Fixo", preco: 0.30}
];

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/usuarios', function(req, res) {
  res.json(usuarios);
});

app.post('/usuarios', function(req, res) {
	usuarios.push(req.body);
	// falta concluir
	// switch(req.body.action){
	// 	case 'add':
	// 		usuarios.push(req.body);
	// 	break;
	// 	case 'remove':
	// 		console.og(usuarios, req.body);
	// 	break;
	// }

	res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});