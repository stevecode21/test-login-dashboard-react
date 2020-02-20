//Esta es la validación de errores de mi db

//Importo el modulo de mysql para poder configurar la conexión
const mysql = require('mysql');
//Importo el modulo de promisify para convertir callbacks a promesas desde la biblioteca util
const { promisify } = require('util');
//Importo el archivo (la propiedad database) keys que contiene los datos a la BD a la cual me quiero conectar
const { database } = require('./config/keys');

//Pool es mas cercano a un entorno de producción, tiene una especie de hilos y se van ejecutando y cada uno va haciendo una tarea a la vez "EN SECUENCIA"
//Este modulo de mysql solo soporta callbacks no soporta promesas ni async await, sin embargo usaremos la biblioteca [util (promisify)] de NODEJS para poder convertir esas callbacks a promesas
const pool = mysql.createPool(database);

//getConnection me ayudará cuando realice las consultar validando diferentes tipos de errores
pool.getConnection((err, connnection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TOO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    //Si no tengo ningún error usaré connection para que la conexión pueda empezar con el método release() y a su vez me muestre un mensaje por consola de que la base de datos está conectada
    if (connnection) connnection.release();
    console.log('DB is connected');
    return;
});

//Esta linea de codigo me permitirá usar promesas en lugar de callbacks cada vez que realice una consulta a la BD (querys)
//promisify pool querys
pool.query = promisify(pool.query);

//Exporto el pool
module.exports = pool;