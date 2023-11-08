import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
    constructor(nombre, telefono, categoria){
        super(nombre, telefono)
        this.categoria = categoria
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Telefono: ${this.telefono} - Categoria: ${this.categoria}`
    }
}