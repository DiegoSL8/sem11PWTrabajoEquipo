const express = require('express');
const cors = require('cors');
const db = require('./services/db'); 

// Importamos nuestro archivo de rutas
const contactoRoutes = require('./routes/contactoRoutes');

const app = express();
const PORT = 3000;

// MIDDLEWARES
app.use(cors());
app.use(express.json()); 

// NUEVA LÍNEA: Le decimos a Express que sirva los archivos estáticos de la carpeta "views"
app.use(express.static('views'));
// LE DECIMOS AL SERVIDOR QUE USE NUESTRAS RUTAS
// Todas las rutas de contacto empezarán con "/api"
app.use('/api', contactoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor de la Landing Page corriendo en http://localhost:${PORT}`);
    console.log(`Ruta del formulario activa en: POST http://localhost:${PORT}/api/contacto`);
});