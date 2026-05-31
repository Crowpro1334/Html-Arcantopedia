const express = require('express');
const router = express.Router();
const db = require('./db'); // Asegúrate de que el archivo db.js existe

// REGISTRO
router.post('/registro', (request, response) => {
    console.log("Request desde el formulario:", request.body);

    const nombre = request.body.nombre;
    const contra = request.body.contrasena;
    const interes = request.body.interes;

    // 1. CORRECCIÓN: Usar || (O) para validar que ambos existan
    if (!nombre || !contrasena) {
        return response.status(400).json({ exito: false, mensaje: "Datos incompletos" });
    }

    const sql = 'INSERT INTO usuarios (nombre, contrasena, interes) VALUES (?, ?, ?)';

    db.query(sql, [nombre, contrasena, interes], (err) => {
        if (err) {
            console.error("Error en la base de datos:", err);
            return response.status(500).json({ exito: false, mensaje: "Error en la base de datos" });
        }

        console.log('Almacenando información en la base de datos....', nombre, contrasena, interes);
        return response.status(200).json({ exito: true });
    }); // Cerrar correctamente el callback de la query
}); // Cerrar correctamente el router.post

module.exports = router; // No olvides exportar el router