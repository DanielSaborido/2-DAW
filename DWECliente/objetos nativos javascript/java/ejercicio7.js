let ventanas = [];
let ventana;
let width = 400;
let height = 400;
let shrinking = true;
let intervalIniciado = false;
let abrirVentanas = 1;

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
    for (let i = 0; i < abrirVentanas; i++){
        const left = Math.floor(Math.random() * (window.innerWidth - width));
        const top = Math.floor(Math.random() * (window.innerHeight - height));
        ventana = window.open('', '', `width=${width}, height=${height}, left=${left}, top=${top}`);
        /*ventana.onbeforeunload = () => {
            abrirVentana();  //parte graciosa del codigo
            //intervalIniciado = false;  //descomentar para habilitar el caos total
        };*/
        ventanas.push(ventana);
    }
    abrirVentanas++;
}
