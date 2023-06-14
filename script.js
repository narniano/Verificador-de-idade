function verificar() {
  var data = new Date();
  var ano = data.getFullYear();

  var anonascimento = document.getElementById("anonascimento");
  var res = document.getElementById("res");

  if (anonascimento.value.length == 0 || anonascimento.value > ano) {
    window.alert("Verifique os dados e tente novamente.");
  } else {
    var sexo = document.getElementsByName("sexo");
    var idade = ano - Number(anonascimento.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (sexo[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade <= 3) {
        img.setAttribute("src", "img/bebe-m.png");
      } else if (idade < 12) {
        img.setAttribute("src", "img/crianca-m.png");
      } else if (idade < 26) {
        img.setAttribute("src", "img/jovem-m.png");
      } else if (idade < 50) {
        img.setAttribute("src", "img/adulto-m.png");
      } else {
        img.setAttribute("src", "img/idoso-m.png");
      }
    } else {
      genero = "mulher";
      if (idade >= 0 && idade <= 3) {
        img.setAttribute("src", "img/bebe-f.png");
      } else if (idade < 12) {
        img.setAttribute("src", "img/crianca-f.png");
      } else if (idade < 26) {
        img.setAttribute("src", "img/jovem-f.png");
      } else if (idade < 50) {
        img.setAttribute("src", "img/adulto-f.png");
      } else {
        img.setAttribute("src", "img/idoso-f.png");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
