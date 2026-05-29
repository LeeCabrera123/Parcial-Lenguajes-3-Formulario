
function validarNombre(){

    let nombre = document.getElementById("nombre").value;

    if(nombre.length < 3){
        document.getElementById("Errornombre").innerHTML =
        "El nombre debe tener al menos 3 caracteres";
        return false;
    }

    if(!isNaN(nombre)){
        document.getElementById("Errornombre").innerHTML =
        "El nombre no puede contener números";
        return false;
    }

    document.getElementById("Errornombre").innerHTML = "";
    return true;
}

function validarDni(){

    let dni = document.getElementById("dni").value;

    if(isNaN(dni)){
        document.getElementById("Errordni").innerHTML =
        "El DNI debe contener solo números";
        return false;
    }

    if(dni.length != 8){
        document.getElementById("Errordni").innerHTML =
        "El DNI debe tener 8 dígitos";
        return false;
    }

    document.getElementById("Errordni").innerHTML = "";
    return true;
}

function validarFecha(){

    let fechaNacimiento =
    document.getElementById("fechaNacimiento").value;

    let nacimiento = new Date(fechaNacimiento);

    let hoy = new Date();

    let edad =
    hoy.getFullYear() - nacimiento.getFullYear();

    if(edad < 18){

        document.getElementById("Errorfecha").innerHTML =
        "Debe ser mayor de 18 años";

        return false;
    }

    document.getElementById("Errorfecha").innerHTML = "";

    return true;
}

function validarFormulario(){

    let nombreValido = validarNombre();
    let dniValido = validarDni();
    let fechaValida = validarFecha();

    if(nombreValido && dniValido && fechaValida){

        document.getElementById("mensaje").innerHTML =
        "Formulario enviado correctamente";

        document.getElementById("mensaje").style.color =
        "green";
    }
    else{

        document.getElementById("mensaje").innerHTML = "";
    }
}

function preguntas(){

    let nacionalidad =
    prompt("Nacionalidad?");

    let nivel =
    prompt("Nivel en programación?");

    let carrera =
    prompt("Por qué elegiste esta carrera?");

    if(nacionalidad == null){
        nacionalidad = "No respondió";
    }

    if(nivel == null){
        nivel = "No respondió";
    }

    if(carrera == null){
        carrera = "No respondió";
    }

    document.getElementById("respuestas").innerHTML =
    "Pregunta 1: " + nacionalidad + "<br>" +
    "Pregunta 2: " + nivel + "<br>" +
    "Pregunta 3: " + carrera;
}

document.getElementById("enviar")
.addEventListener("click", validarFormulario);
document.getElementById("preguntas")
.addEventListener("click", preguntas);
