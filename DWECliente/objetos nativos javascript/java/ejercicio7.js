let ventanas = [];
let ventana;
let width = 400;
let height = 400;
let shrinking = true;
let intervalIniciado = false;

function abrirVentana() {
    ventanas.forEach((ventana) => {
        if (ventana && !ventana.closed) {
            ventana.focus();
        }
    });
    if (!intervalIniciado) {
        setInterval(() => {
            if (shrinking) {
                width -= 40;
                height -= 40;
            } else {
                width += 40;
                height += 40;
            }
            ventanas.forEach((ventana) => {
                ventana.resizeTo(width, height);
            });
            if (width <= 160 && height <= 160) {
                shrinking = false;
            }
            if (width >= 400 && height >= 400) {
                shrinking = true;
            }
        }, 1000);

        intervalIniciado = true;
    }
    const left = Math.floor(Math.random() * (window.innerWidth - width));
    const top = Math.floor(Math.random() * (window.innerHeight - height));
    ventana = window.open('', '', `width=${width}, height=${height}, left=${left}, top=${top}`);
    ventanas.push(ventana);
}