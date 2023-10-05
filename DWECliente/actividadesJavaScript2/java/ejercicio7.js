class CesarCipher {
    constructor(shift) {
        this.shift = shift;
    }
    encriptar(texto) {
        return this.transformar(texto, this.shift);
    }
    desencriptar(textoEncriptado) {
        return this.transformar(textoEncriptado, -(this.shift));
    }
    transformar(texto, shift) {
        return texto
            .toUpperCase()
            .split('')
            .map(char => {
                if (char.match(/[A-Z]/)) {
                    const code = char.charCodeAt(0);
                    let shiftedCode = code + shift;
                    if (shiftedCode < 65) {
                        shiftedCode += 26;
                    } else if (shiftedCode > 90) {
                        shiftedCode -= 26;
                    }
                    return String.fromCharCode(shiftedCode);
                } else {
                    return char;
                }
            })
            .join('');
    }
}

let numero = parseInt(prompt("Número para el cifrado"));
const cipher = new CesarCipher(numero);
let texto = prompt("Texto a cifrar");
let cifrado = prompt("Texto a descifrar");

document.getElementById("Result1").innerHTML = 'Texto cifrado: ' + cipher.encriptar(texto);
document.getElementById("Result2").innerHTML = 'Texto descifrado: ' + cipher.desencriptar(cifrado);
