function calcularMedia() {
    // Obter os valores das notas
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);
  
    // Obter os valores dos pesos
    let p1 = parseInt(document.getElementById("peso1").value);
    let p2 = parseInt(document.getElementById("peso2").value);
    let p3 = parseInt(document.getElementById("peso3").value);
  
    // Calcular a média ponderada
    let media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);
  
    // Exibir a média ponderada
    document.getElementById("resultado").innerHTML = "A média ponderada é: " + media.toFixed(2);
  }