class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    getInfo() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    matricular() {
        return `${this.nombre} está matriculado en el curso ${this.curso} del grupo ${this.grupo}`;
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, modulo, nivel) {
        super(nombre, edad, genero);
        this.modulo = modulo;
        this.nivel = nivel;
    }

    imparte() {
        return `${this.nombre} imparte el módulo ${this.modulo} en el nivel ${this.nivel}`;
    }
}

const estudiante = new Estudiante("Juan", 20, "Tractor","2º DAW", "Grupo A");
const profesor = new Profesor("Jose", 35, "Helicoptero","DWEC", "Superior");
const resultadoEstudiante = estudiante.matricular();
const resultadoProfesor = profesor.imparte();
const resultado = document.getElementById("Result");
resultado.innerHTML = `<p>${estudiante.getInfo()}<br>${resultadoEstudiante}<br>${profesor.getInfo()}<br>${resultadoProfesor}</p>`;