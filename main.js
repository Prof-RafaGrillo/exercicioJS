

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

function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += `<h2>Contando de 1 até 10</h2>`

 
  for (var i = 1; i < 11; i++) {
      saida.innerHTML += ` ${i} &#x1F449;`
      i ++ // Corresponde a cont = cont + 1
  }
  saida.innerHTML += ` &#x1F3C1;`
}