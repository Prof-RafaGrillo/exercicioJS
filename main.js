

cores = ["green", "black", "yellow", "blue", "pink"]

function mudarCorTexto(){

  min = Math.ceil(0);
  max = Math.floor(6);
  sorteio =  Math.floor(Math.random() * (max - min) + min);
  console.log(sorteio)
  document.querySelector("#texto1").style.color = cores[sorteio];
}

function mudarCorFundo(){

  min = Math.ceil(0);
  max = Math.floor(6);
  sorteio =  Math.floor(Math.random() * (max - min) + min);
  console.log(sorteio)
  document.querySelector("#texto1").style.background = cores[sorteio];
}

function alterarTexto(){
  textoForm = document.querySelector("#textinput").value
  
  document.querySelector("#texto2").innerHTML = textoForm
}