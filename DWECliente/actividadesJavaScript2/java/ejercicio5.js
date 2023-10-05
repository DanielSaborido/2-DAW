class Programador{
    constructor(id, nombre, edad, fechaNacimiento, titulacion, experiencia) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.fechaNacimiento = fechaNacimiento;
        this.titulacion = titulacion;
        this.experiencia = experiencia;
    }

    getInfo() {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad}, Fecha de Nacimiento: ${this.fechaNacimiento}
        , Titulación: ${this.titulacion}, Experiencia: ${this.experiencia} años`;
    }
    concentrarse() {
        return `${this.nombre} se está concentrando en su trabajo.`
    }

    programar() {
        return `${this.nombre} está programando.`
    }
}

class Jefe extends Programador {
    constructor(id, nombre, edad, fechaNacimiento, dptoResponsable, equipo) {
        super(id, nombre, edad, fechaNacimiento);
        this.dptoResponsable = dptoResponsable;
        this.equipo = equipo;
    }

    getInfo() {
        let jefeInfo = `ID: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad}, Fecha de Nacimiento: ${this.fechaNacimiento}
        , Departamento Responsable: ${this.dptoResponsable}, Miembros en el Equipo: \n`;

        jefeInfo += this.equipo.map(persona => `${persona.id} => ${persona.nombre}`).join(', ');

        return jefeInfo;
    }
    concentrarse() {
        return `${this.nombre}, el jefe del departamento ${this.dptoResponsable}, se está concentrando en su trabajo.`
    }

    anadirEquipo(programador) {
        this.equipo.push(programador);
        return `${programador.nombre} ha sido añadido al equipo de ${this.nombre}.`
    }

    reunirEquipo() {
        let equipo = `El jefe ${this.nombre} está reuniendo a los miembros de su equipo: \n`

        equipo += this.equipo.map(persona => `${persona.id} => ${persona.nombre}`).join(', ');

        return equipo;
    }
}

class CEO extends Programador {
    constructor(id, nombre, edad, fechaNacimiento, jefesAsignados) {
        super(id, nombre, edad, fechaNacimiento);
        this.jefesAsignados = jefesAsignados;
    }

    getInfo() {
        let ceoInfo = `ID: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad}, 
        Fecha de Nacimiento: ${this.fechaNacimiento}, Jefes Asignados: \n`;

        ceoInfo += this.jefesAsignados.map(persona => `${persona.id} => ${persona.nombre}`).join(', ');

        return ceoInfo;
    }
    concentrarse() {
        return `El CEO ${this.nombre} está concentrándose en sus responsabilidades.`
    }

    viajar(destino) {
        return `El CEO ${this.nombre} está viajando a ${destino}.`
    }

    anadirJefe(jefe) {
        this.jefesAsignados.push(jefe);
        return `${jefe.nombre} ha sido asignado a ${this.nombre}.`
    }

    dirigirJefe(jefe, accion) {
        return `El CEO ${this.nombre} está dirigiendo a ${jefe.nombre} para ${accion}.`
    }
}

const programador1 = new Programador(10001, "Juan", 23,"5/10/2000", "Desarrollador de aplicaciones web",10);
const programador2 = new Programador(10002, "Erik", 29,"9/2/1994", "Administración y mantenimiento de sistemas informáticos en red",8);
const programador3 = new Programador(10003, "Sara", 33,"29/4/1990", "Desarrollador de aplicaciones web",11);
const programador4 = new Programador(10004, "Patricio", 30,"15/1/1993", "Desarrollador de aplicaciones multiplataformas",20);
const programador5 = new Programador(10005, "Serana", 35,"20/6/1988", "Diseño web",9);
const jefe1 = new Jefe(20001, "Marta", 35,"2/5/1988", 15, [programador1,programador4]);
const jefe2 = new Jefe(20002, "Dianne", 35,"2/5/1988", 15, []);
const ceo = new CEO(30001, "Pablo", 40,"1/1/1983", [jefe1]);

const resultado = document.getElementById("Result");
resultado.innerHTML = `<p>${programador1.getInfo()}<br>${programador2.getInfo()}<br>${programador2.concentrarse()}<br>
${programador3.getInfo()}<br>${programador4.getInfo()}<br>${programador4.programar()}<br>${programador5.getInfo()}<br><br>
${jefe1.getInfo()}<br>${jefe1.concentrarse()}<br>${jefe1.anadirEquipo(programador5)}<br>${jefe1.getInfo()}<br>${jefe1.reunirEquipo()}<br><br>
${ceo.getInfo()}<br>${ceo.concentrarse()}<br>${ceo.viajar("Madrid")}<br>${ceo.anadirJefe(jefe2)}<br>${ceo.getInfo()}<br>${ceo.dirigirJefe(jefe1, "incrementar la productividad")}</p>`;