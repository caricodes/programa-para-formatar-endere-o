function enderecoFormatado() {
  var tipoLogradouro = document.getElementById("tipoDeLogradouro").value;
  var nomeLogradouro = document.getElementById("nomeDoLogradouro").value;
  var numDaResidencia = document.getElementById("numDaResidencia").value;
  var complemento = document.getElementById("complemento").value;
  var bairro = document.getElementById("bairro").value;
  var cidade = document.getElementById("cidade").value;
  var estado = document.getElementById("estado").value;
  var cep = document.getElementById("cep").value;

  // deixando a primeira letra do valor em maiúsculo
  function primeiraLetraMaisculo(string) {
    return string.replace(/^\w/, (c) => c.toUpperCase());
  }

  // o valor do input só pode ser rua ou avenida
  if (tipoLogradouro !== "rua" && tipoLogradouro !== "avenida") {
    alert("Logradouro só pode ser Rua ou Avenida.");
    return false;
  }

  // verificando se o usuário digitou apenas a sigla do estado
  if (estado.length != 2) {
    alert("Digite apenas a sigla do estado");
    return false;
  }

  // formatando o cep
  if (cep.length === 8) {
    cep = cep.slice(0, 5) + "-" + cep.slice(5);
  }

  // endereço formatado
  let enderecoFormatado = `<b>Endereço formatado:</b> ${primeiraLetraMaisculo(
    tipoLogradouro
  )} ${primeiraLetraMaisculo(
    nomeLogradouro
  )}, ${numDaResidencia} - ${primeiraLetraMaisculo(
    complemento
  )} - ${primeiraLetraMaisculo(bairro)} - ${primeiraLetraMaisculo(
    cidade
  )} - ${estado.toUpperCase()} <br> <b>CEP:</b> ${cep}`;

  // ocultando o elemento caso o elemento estiver vázio
  if (complemento === "") {
    enderecoFormatado = `<b>Endereço formatado:</b> ${primeiraLetraMaisculo(
      tipoLogradouro
    )} ${primeiraLetraMaisculo(
      nomeLogradouro
    )}, ${numDaResidencia} - ${primeiraLetraMaisculo(
      bairro
    )} - ${primeiraLetraMaisculo(
      cidade
    )} - ${estado.toUpperCase()} <br> <b>CEP:</b>  ${cep}`;
  }

  document.getElementById("enderecoFormatado").innerHTML = enderecoFormatado;

  return false;
}
