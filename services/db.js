const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Definimos la ruta donde se guarda nuestro archivo de base de datos
const dbPath = path.resolve(__dirname, '../database.sqlite');

// Instanciamos y nos conectamos a la BD. Si no existe, SQLite crearaa el archivo automaticamente
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error interno al conectar con SQLite:', err.message);
    } else {
        console.log('Conexión exitosa a SQLite local.');
        
        // Ejecutamos el SQL Command para crear la tabla de los contactos (Nuestra Landing Page)
        // NOTA: Para una id primaria en SQLite definimos "INTEGER PRIMARY KEY AUTOINCREMENT". 
        // Asegúrate de que tu db.run sea exactamente así:
    db.run(`
        CREATE TABLE IF NOT EXISTS contactos (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            Nombre TEXT NOT NULL, 
            Correo TEXT NOT NULL, 
            Mensaje TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error("Error crítico al crear la tabla contactos:", err.message);
        } else {
            console.log("Tabla 'contactos' lista.");
        }
    });
    }
});

// Exportamos la instancia para usarla en nuestros controladores
module.exports = db;