// Capturamos el evento 'submit' del formulario
document.getElementById('formContacto').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitamos que la página se recargue

    // Capturamos los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    try {
        // Hacemos la petición POST a tu servidor Backend (que debe estar corriendo)
        const respuesta = await fetch('http://localhost:3000/api/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                email: correo,
                mensaje: mensaje
            })
        });

        // Convertimos la respuesta del servidor a JSON
        const datos = await respuesta.json();

        // Validamos el código de estado (Manejo de la vista según respuesta del Backend)
        if (respuesta.status === 201) {
            alert("¡Éxito! " + datos.message);
            document.getElementById('formContacto').reset(); // Limpiamos el formulario
        } else if (respuesta.status === 400) {
            alert("Error de validación: " + datos.error);
        } else {
            alert("Error del servidor: " + datos.error);
        }

    } catch (error) {
        // Este catch atrapa si el servidor Node.js está apagado
        console.error("Error al conectar con la API:", error);
        alert("Falla de conexión. Asegúrate de que el servidor Backend esté encendido.");
    }
});