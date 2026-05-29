>>------ Objetivo ------<<

Se hizo una página que busque hablar de tema X y en base a ese tema que el usuario tenga la opción de opinar en un recuadro utilizando un formulario, la idea es que el usuario rellene con su nombre, correo y finalmente el comentario.

>>------ Instalación ------<<

Previamente se necesito tener:
	-Visual Studio Code (Acá se codifico el código) 
	-Git (Para los push, commit y pulls)
	-Node (Para tener acceso al API)
	-Comandos:
		Estos se utilizan primero colocando la ruta de la carpeta de la maqueta en el cmd, con un cd, 			una vez con la ruta correcta.
	 -npm init -y
	 -npm install express sqlite3 -corse

>>------ Ejecución ------<<

Nuestro endpoint POST se encuentra en: http://localhost:3000/api/contacto
	-Se encuentra dentro de 'server.js' acá colocamos que todas las rutas empiecen con '/api'
	-en 'contactoRoutes.js' tenemos la siguiente linea de código:
		
		// Definimos la ruta POST. El endpoint final será: POST /api/contacto
		router.post('/contacto', contactoController.guardarContacto);

Nuestros endpoint GET por el otro lado, ni siquiera existen ya que no presentamos ningún '.get' esto es debido a que nunca pedimos los datos, si no que solo los recibimos. Biueno, Técnicamente hablando tenemos un GET para cuando llamamos el frontend para el usuario, pero no tenemos un codigo hecho que requiera un GET como tal.

La función de la página es que nosotros damos información sobre nutrias para adoptar, y luego al lado hay unos campos donde los usuarios dando su información pueden comentar y decir si están interesados en nuestras nutrias, una vez rellenen la información de los campos y apreten el botón lo almacenamos en nuestra base de datos. Entonces el POST lo utilizariamos para extraer la información de los campos que le damos al usuario y almacenarlos, y si desearamos por ejemplos, mostrarlo estilo comentarios en algún lado de la página ahí utilizariamos un GET para obtenerlos de la base de datos y mostrarlos.


>>------ Pruebas ------<<

Para las pruebas se abrio la página y utilizando la opción "inspeccionar" se utilizaron los siguientes comandos para probar las funciones:

fetch('http://localhost:3000/api/contacto', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 
    nombre: "Test", 
    correo: "test@test.com", 
    mensaje: "Prueba desde consolaaaa" 
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error)); // Buena práctica por si el servidor falla

>>------ Estructura ------<<

La estructura de la maqueta se divide en las siguientes carpetas:
Tenemos lo principal, que es sería el "Main" en este caso es el archivo "server.js" que está en la carpeta principal junto a la base de datos, packages y el gitignore.

Luego tenemos las carpetas de views: Acá esta lo relacionado con lo que ve el usuario, ahí entra "index.html" y tenemos "script.js" que permite la comunicación entre el frontend y el backend.

-Tenemos la carpeta services, donde esta el "db.js" este se encarga de administrar la base de datosy establece la conexión con el archivo "database.sqlite".

-Tenemos la carpeta routes donde esta "contactoRoutes.js" que es aquel que se encarga de dirigir la información correcta donde debe ir.

-Tenemos la carpeta controller, donde esta "contactoController.js" Este obtiene la información que le llega de contactoRoutes.js y la almacena, mandando un mensaje si salió mal o bien.

-Tenemos la carpeta middlewares, acá hay dos archivos "errorHandler.js" y "logger.js" que se encargan de controlar errores.