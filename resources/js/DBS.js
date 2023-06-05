const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'mentejuvenil'
})

conection.connect((err)=>{
    if(err) throw err;
    console.log('La conexion funciona')
})
conection.end();
