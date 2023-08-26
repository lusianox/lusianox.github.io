// Se comienza el código JavaScript con una función llamada "enviar formulario" 
// (aunque con una escritura más acorde para JavaScript) 😋

// Esta función está conectada al index.html, especificamente en la línea 136,
// con el botón "Enviar" se activa esta función mediante onclick="enviarForm()"

function enviarForm() {

    // JavaScript va a buscar el nombre ingresado por el usuario y lo guarda en la variable "nombre"
    // mediante el uso de "getElementById" (busca el id NOMBRE en HTML).
    const nombre = document.getElementById("nombre").value;

    // JavaScript busca el mail ingresado por el usuario y lo guarda en la variable "nombre"
    // mediante el uso de "getElementById" (busca el id EMAIL en HTML).
    const email = document.getElementById("email").value;


    // Aquí se crea un OBJETO llamado "datos"
    const datos = {
        nombre: nombre, // La propiedad nombre guarda el valor ingresado anteriormente en la constante "nombre".
        email: email // La propiedad email guarda el valor ingresado anteriormente en la constante "email".
    };

    // Se crea la constante "datosJSON" que guarda en ella el STRING ingresado anteriormente en la constante DATOS.
    // Entendemos por STRING, una secuencia de caracteres (ya sean letras, números, símbolos o espacios).
    // Un string es una forma de representar texto.
    const datosJSON = JSON.stringify(datos);

    console.log(datosJSON);

    alert("Formulario enviado correctamente.");

    // Tras esto, con console.log se establece que se muestre en la consola el string previamente hecho por nuestro script.
    // Y finalmente se agrega una alerta que nos avisa que el formulario se ha enviado con éxito.
}

