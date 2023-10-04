function verificarParImpar() {
  var numero = parseInt(document.getElementById("numero").value);

  if (isNaN(numero)) {
      document.getElementById("resultado").textContent = "Por favor, introduce un número válido.";
  } else if (numero % 2 === 0) {
      document.getElementById("resultado").textContent = "El "+numero+" es PAR.";
  } else {
      document.getElementById("resultado").textContent = "El "+numero+" es IMPAR.";
  }
}