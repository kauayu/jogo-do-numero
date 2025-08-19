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
    ultimoResultado.textContent = 
    
    

















} else if (contagmePalpites ===10) {
  ultimoResultado.textContent = ...



    ultimoResultado.textContent = "Errado";
  ultimoResultado.style.backgroudolor = "red";
  if (palpiteUsuario < numeroAleatorio) {
    baixoOuAlto.textContent = "O ultimo palpite foi muito baixo";
  }
