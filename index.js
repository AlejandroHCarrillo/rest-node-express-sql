const express = require('express'); // Require the package
const app = express();             // Inicializa express para la app

app.get('/', function (req, res){
  res.send('<h1>Hola mundo</h1> Servidor iniciado');
});

// The name of you web server is up to you
const webserver = app.listen(5001, function() {
  console.log('SQL server Node web server is running...');
});

