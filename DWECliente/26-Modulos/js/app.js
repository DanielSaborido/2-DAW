import printExport, { Cliente, mostrarInformacion as mostrar, nombreCliente, telefono } from "./cliente.js"; //primero exportar y luego importar
import { Empresa } from "./empresa.js";

console.log(nombreCliente)
console.log(telefono)

console.log(mostrar(nombreCliente, telefono))

let cliente = new Cliente(nombreCliente, telefono)
console.log(cliente)
console.log(cliente.mostrar)

let empresa = new Empresa("IES", 654654654, "educacion")
console.log(empresa)
console.log(empresa.mostrar)

printExport() //se usa en framework 