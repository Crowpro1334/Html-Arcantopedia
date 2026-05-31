const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Usuario por defecto de XAMPP/MySQL
    password: '',      // Deja vacío si es XAMPP, o pon tu contraseña
    database: 'arcantopedia' // Asegúrate de que este sea el nombre en tu SQL
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('¡Conectado a la base de datos MySQL!');
});

module.exports = connection;