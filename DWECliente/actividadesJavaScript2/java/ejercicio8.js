class Monedero {
    constructor(nombre, billetes5, billetes10, billetes20) {
        this.nombre = nombre;
        this.billetes5 = billetes5;
        this.billetes10 = billetes10;
        this.billetes20 = billetes20;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getBilletes5() {
        return this.billetes5;
    }
    setBilletes5(billetes5) {
        this.billetes5 = billetes5;
    }
    getBilletes10() {
        return this.billetes10;
    }
    setBilletes10(billetes10) {
        this.billetes10 = billetes10;
    }
    getBilletes20() {
        return this.billetes20;
    }
    setBilletes20(billetes20) {
        this.billetes20 = billetes20;
    }
    calcularTotal() {
        return this.billetes5 * 5 + this.billetes10 * 10 + this.billetes20 * 20;
    }
    static masDinero(monederos) {
        let maxDinero = -1;
        let monederoSeleccionado = null;
        let todosIguales = true;

        for (const monedero of monederos) {
            const dinero = monedero.calcularTotal();
            if (dinero > maxDinero) {
                maxDinero = dinero;
                monederoSeleccionado = monedero;
                todosIguales = false;
            } else if (dinero < maxDinero) {
                todosIguales = false;
            }
        }
        if (todosIguales) {
            return "Cualquiera";
        }
        return monederoSeleccionado;
    }
}

let m1 = new Monedero("Monedero1", 0, 3, 4);
let m2 = new Monedero("Monedero2", 1, 3, 5);
let m3 = new Monedero("Monedero3", 3, 2, 2);
let m4 = new Monedero("Monedero4", 2, 0, 4);
let m5 = new Monedero("Monedero5", 1, 2, 1);
let m6 = new Monedero("Monedero6", 1, 2, 2);
let m7 = new Monedero("Monedero7", 3, 2, 0);

const monederos = [m1, m2, m3, m4, m5, m6, m7];
const monederoMasDinero = Monedero.masDinero(monederos);

if (monederoMasDinero === "Cualquiera") {
    console.log(monederoMasDinero);
    document.getElementById("Result").innerHTML=monederoMasDinero;
} else {
    console.log(`El monedero con más dinero es ${monederoMasDinero.getNombre()}.`);
    document.getElementById("Result").innerHTML=`El monedero con más dinero es ${monederoMasDinero.getNombre()}.`;
}