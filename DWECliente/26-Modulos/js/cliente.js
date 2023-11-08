// // IIEF (funcion que se ejecuta sola)
// ;(function(){
//     const nombreCliente = "Pepe"
// })()
// 
// ;(function(){//declarar la variable para todos los js del proyexto
//     const window.nombreCliente = "Pepe"
// })()


export const nombreCliente = "Pepe"
export const telefono = 625314258

export function mostrarInformacion(nombre, telefono){
    return `Cliente: ${nombre} - Telefono: ${telefono}`
}

export class Cliente {
    constructor(nombre, telefono){
        this.nombre = nombre
        this.telefono = telefono
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Telefono: ${this.telefono}`
    }
}

export default function printExport() {// solo se puede una por archivo js
    console.log("Exportacion por defecto")
}