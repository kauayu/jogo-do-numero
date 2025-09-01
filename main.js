let numeroAleatorio = Math.floor(Math.random() *100) +1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('baixoOuAto');
const envioPalpite = document.queryselector('.envioPalpite');
const campoPalpite = document.queryselector('.campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {
  const palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites ===1) {
    palpites.textContent = "Palpites anteriores:";
  }

  palpites.textContent += PaliteUsuario + " ";

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "parabéns! você Acertou!";
    ultimoResultado.style.backgroundColor = "green";
    baixoOuAlto.textcontent = "";
    finalizarjogo();
  } else if (contagemPalpites === 10) {
    ultimoResultado.textcontent = "FIM DE JOGO!!";
    baixoOuAlto.textcontent = "";
    finalizarjog();
  } else {
    ultimoResultado.textContent = "Errado";
    ultimoResultado.style.backgroudColor = "red";
    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = "o ultimo palpite foi muito baixo";
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = "o ultimo palpite foi muito alto";
    }
  }

  contagemPalpites++;
  campoPalpite.value = "";
  campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpite);

function finalizarJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReiniciar = document.createElement('buttonn');
  document.body.appendChild(botaoReiniciar);
  botaoReiniciar.textContent = 'Reiniciar jogo';
  botaoReinicuar.Claslist.add('botaoReiniciar');
  botaoReiniciar.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
  contagemPalpites = 1;
  const paragrafosReiniciar = document. querySelectorAll('.paragrafosResultados p');
  for (const paragrafosReiniciar of paragrafosReiniciar) {
    paragrafosReiniciar.textContent = "";
}

  botaoReiniciar.parentNode.removeChild(botaoReiniciar);
  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = "";
  campoPalpite.focus();
  ultimoResultado.style.backgroudColor = 'white';
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
                              