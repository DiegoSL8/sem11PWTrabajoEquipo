const express = require('express');
const router = express.Router();

// Importamos el controlador que creamos en el paso anterior
const contactoController = require('../controllers/contactoController');

// Definimos la ruta POST. El endpoint final será: POST /api/contacto
router.post('/contacto', contactoController.guardarContacto);

module.exports = router;