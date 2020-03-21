const sql = require("mssql");

// Create connection to database
var config = {
  server: '184.168.xx.xx',
  authentication: {
      type: 'default',
      options: {
          userName: 'xxxxxx', // update me
          password: 'xxxxxx' // update me
      }
  },
  options: {
      database: 'GRAJAWebDB'
  }
}

sql.connect(config, function(err){
  if (err) console.log(err);

  let sqlRequest = new sql.Request();

  let sqlQuery = `SELECT Id, Nombre, APaterno, AMaterno, NumeroEmpleado, 
                      Usuario, 'XXXXX' as Password, 
                      FechaCreacion, UsuarioCreacion
                  FROM [grajauser].[Usuarios]`;

  sqlRequest.query(sqlQuery, function(err, data){
    if (err) console.log(err);

    console.log(data);
    console.log(data.recordset);
    console.log(data.rowsAffected);
    console.log(data.recordset[0]);

    sql.close();

  });
});