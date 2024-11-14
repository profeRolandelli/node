var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'universidad'
});
connection.connect(function(error){
	if(error) {
		console.log('ERROR AL CONECTAR LA BASE DE DATOS');
		console.log(error);
	} else {
		console.log('CONEXION EXITOSA A LA BASE DE DATOS');
	}
});

module.exports = connection;