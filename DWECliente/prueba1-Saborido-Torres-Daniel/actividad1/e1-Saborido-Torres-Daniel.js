const DNILeters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
const DNINumber = parseInt(prompt("Introduce los números del DNI"));

//Validación del número del DNI
if (isNaN(DNINumber)){
    alert("Lo insertado no son números.")
} else if (DNINumber < 0 || DNINumber > 99999999){
    alert("El número del DNI está fuera de rango.")
} else {
    //Obtencion de la leta del DNI
    const numberLeter = Math.round(DNINumber % 23);
    const leter = DNILeters[numberLeter]
    alert("Tu DNI es: "+DNINumber+leter);
}