function obtenerSaludo() {
    var nombre = document.getElementById("nombre").value.trim();
    var hora = new Date().getHours();
    var saludo;
    var regex = /^[a-zA-Z\s]+$/;

    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
    } else if (!regex.test(nombre)) {
        alert("El nombre solo debe contener caracteres alfabéticos y espacios.");
    } else {
        console.log(hora)
        if (hora >= 6 && hora < 12) {
            saludo = "Buenos días";
        } else if (hora >= 12 && hora < 18) {
            saludo = "Buenas tardes";
        } else {
            saludo = "Buenas noches";
        }

        alert(saludo + ", " + nombre + "!");
    }
}