function setCookie(nombre, valor, expiracion) {
    const dia = new Date();
    dia.setTime(dia.getTime() + (expiracion * 24 * 60 * 60 * 1000));
    let expires = "expires="+dia.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
    console.log(document.cookie)
}

function getCookie(nombre) {
    const name = nombre + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function checkCookie() {
    const nombre = getCookie("Nombre");
    const direccion = getCookie("Direccion");
    const edad = getCookie("Edad");
    const profesion = getCookie("Profesion");

    if (nombre !== "") {
        alert("Nombre: " + nombre + "\nDirección: " + direccion + "\nEdad: " + edad + "\nProfesión: " + profesion);
    } else {
        let dato = prompt("Ponga su Nombre", "");
        if (dato !== "" && dato != null) {
            setCookie("Nombre", dato, 365);
        }
        dato = prompt("Ponga su Dirección", "");
        if (dato !== "" && dato != null) {
            setCookie("Direccion", dato, 365);
        }
        dato = prompt("Ponga su Edad", "");
        if (dato !== "" && dato != null) {
            setCookie("Edad", dato, 365);
        }
        dato = prompt("Ponga su Profesión", "");
        if (dato !== "" && dato != null) {
            setCookie("Profesion", dato, 365);
        }
    }
}

function deleteAllCookies() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const cookieName = cookie.split('=')[0];
        deleteCookie(cookieName);
    }
    alert("Cookies eliminadas");
}

function deleteCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
