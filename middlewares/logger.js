//registrará en la consola cada vez que alguien entre a la API
const requestLogger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next(); // Pasa al siguiente paso
};

module.exports = requestLogger;