// Importamos la conexión a la base de datos subiendo un nivel de carpeta (../)
const db = require('../services/db');

const guardarContacto = (req, res) => {
    // 1. Capturamos los datos que nos enviará el formulario web (el frontend)
    const { nombre, correo, mensaje } = req.body;

    // 2. Validación de seguridad básica (Error 400 Bad Request)
    if (!nombre || !correo || !mensaje) {
        return res.status(400).json({ 
            success: false, 
            error: "Faltan datos obligatorios, Por favor, llena todos los campos." 
        });
    }

    // 3. Consulta SQL para insertar los datos
    const sql = `INSERT INTO contactos (nombre, correo, mensaje) VALUES (?, ?, ?)`;
    
    // 4. Ejecutamos la consulta en SQLite
    db.run(sql, [nombre, correo, mensaje], function(err) {
        if (err) {
            // Manejo de error del servidor (Error 500)
            console.error("Error al insertar en la base de datos:", err.message);
            return res.status(500).json({ 
                success: false, 
                error: "Error interno del servidor al intentar guardar el contacto." 
            });
        }
        
        // Si todo sale bien, respondemos con éxito (Código 201 Created)
        console.log(`Nuevo contacto guardado con el ID: ${this.lastID}`);
        return res.status(201).json({ 
            success: true, 
            message: "Datos recibidos y guardados correctamente en SQLite." 
        });
    });
};

module.exports = { guardarContacto };