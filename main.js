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

















} else if (contagmePalpites ===10) {
  ultimoResultado.textContent = ...



    ultimoResultado.textContent = "Errado";
  ultimoResultado.style.backgroudolor = "red";
  if (palpiteUsuario < numeroAleatorio) {
    baixoOuAlto.textContent = "O ultimo palpite foi muito baixo";
  }
