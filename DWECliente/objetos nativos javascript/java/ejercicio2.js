const usuario = prompt("Inserte su nombre y apellidos")

function dividion(usuario) {
    let texto= ``;
    usuario.split(' ').forEach(dato => {
        texto+=`<li>${dato}</li>`;
    })
    return texto;
}
function sugerencia(usuario) {
    let texto= ``;
    const desglose = usuario.split(' ');
    desglose.forEach((dato, index) => {
        if(index===0 || index===desglose.length-1){
            texto+=dato.slice(0,1);
        } else {texto+=dato}
    })
    return texto.toLowerCase();
}
function tresLetras(usuario) {
    let texto= ``;
    usuario.split(' ').forEach(dato => {
        texto+=dato.slice(0,3);
    })
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

document.getElementById("Result").innerHTML = `Longitud: ${(usuario.split(' ').join('')).length}<br>Minuscula: ${usuario.toLowerCase()}<br>
Mayuscula: ${usuario.toUpperCase()}<br>${dividion(usuario)}${sugerencia(usuario)}<br>${tresLetras(usuario)}`;