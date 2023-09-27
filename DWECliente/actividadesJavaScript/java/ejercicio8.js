function verificarPalindromo() {
  var cadena = document.getElementById("cadena").value.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  var cadenaRevertida = cadena.split("").reverse().join("");

  if (cadena === cadenaRevertida) {
      document.getElementById("resultado").textContent = "Es un palíndromo.";
  } else {
      document.getElementById("resultado").textContent = "No es un palíndromo.";
  }
}