const express = require('express');
const cors = require('cors');
const db = require('./services/db'); 
const contactoRoutes = require('./routes/contactoRoutes');
// Asegúrate de importar los middlewares que creamos
const requestLogger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = 3000;

// MIDDLEWARES
app.use(cors());
app.use(express.json()); 

// Middleware de registro
app.use(requestLogger);

// Servir archivos estáticos
app.use(express.static('views'));

// Rutas de la API
app.use('/api', contactoRoutes);

// Middleware de errores (siempre al final)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor de la Landing Page corriendo en http://localhost:${PORT}`);
    console.log(`Ruta del formulario activa en: POST http://localhost:${PORT}/api/contacto`);
});