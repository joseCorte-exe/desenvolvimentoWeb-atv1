function CalcImc() {
  const inputWeight = document.getElementById("weight").value;
  const inputHeight = document.getElementById("height").value;

  if (inputHeight.includes(",")) {
    alert("por favor, trocar ','(virgula) por '.'(ponto) ")
    return
  }

  const IMC = inputWeight / (inputHeight * inputHeight)

  // console.log(IMC)

  if (IMC < 18.5)
    alert("Seu IMC é de " + IMC.toFixed(2) + " VOCE SE ENCAIXA NA CLASSIFICAÇÃO MAGREZA")
  else if (IMC > 18.5 && IMC <= 24.9)
    alert("Seu IMC é de " + IMC.toFixed(2) + " VOCE SE ENCAIXA NA CLASSIFICAÇÃO NORMAL")
  else if (IMC > 25 && IMC <= 29.9)
    alert("Seu IMC é de " + IMC.toFixed(2) + " VOCE SE ENCAIXA NA CLASSIFICAÇÃO SOBREPESO")
  else if (IMC > 30 && IMC <= 39.9)
    alert("Seu IMC é de " + IMC.toFixed(2) + " VOCE SE ENCAIXA NA CLASSIFICAÇÃO OBESIDADE")
  else if (IMC > 40 && IMC <= 80)
    alert("Seu IMC é de " + IMC.toFixed(2) + " VOCE SE ENCAIXA NA CLASSIFICAÇÃO OBESIDADE GRAVE")
  else if (IMC > 900000)
    alert("dados incompativeis");
  else
    alert("Digite os dados corretamente!");

  return IMC;
}