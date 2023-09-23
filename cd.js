const URL_USER = "https://jsonplaceholder.typicode.com/users"
const enviarButton = document.getElementById('btnEnviar');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const fechaNacimientoInput = document.getElementById('fecha');

enviarButton.addEventListener("click", enviar);

async function enviar(){
    let contenidoNombre = nombreInput.value
    let contenidoApellido = apellidoInput.value
    let contenidoFecha = fechaNacimientoInput.value
    let contenidoJSON = {"Nombre" : contenidoNombre, "Apellido" : contenidoApellido, "Fecha de Nacimiento" : contenidoFecha}
    const respuesta = await fetch(URL_USER, {
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contenidoJSON),
        mode: "no-cors"
    });
}