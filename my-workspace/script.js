// Corações animados sem bug nas bordas
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart-chuva';
  heart.textContent = '💜'; // CORAÇÃO ROXO AQUI
  const pos = Math.random() * 90 + 5;
  heart.style.left = pos + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 2) + 's';
  heart.style.color = '#a770b2';
  document.body.appendChild(heart);
  setTimeout(() => {
    if (heart && heart.parentElement) {
      heart.parentElement.removeChild(heart);
    }
  }, 5000);
}, 300);


// Desativa troca de fundo
const imagens = [];
let idx = 0;
const bg = document.getElementById('background-slideshow');

window.onload = function () {
  const telaEntrada = document.getElementById('tela-entrada');
  const conteudoPrincipal = document.getElementById('conteudo-principal');
  const btnEntrar = document.getElementById('btn-entrar');

  btnEntrar.onclick = function () {
    telaEntrada.style.display = 'none';
    conteudoPrincipal.style.display = '';
    const audio = document.getElementById('audio-principal');
    if (audio) {
      audio.muted = false;
      audio.play().catch(() => {});
    }
  };

  function atualizarDiasJuntos() {
    const inicio = new Date(2022, 4, 28, 0, 0, 0); // 28/05/2022
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById('dias-juntos').textContent =
      `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
  }

  setInterval(atualizarDiasJuntos, 1000);
  atualizarDiasJuntos();
};

// Interação no clique do fundo
bg.addEventListener('click', function (e) {
  const heart = document.createElement('div');
  heart.className = 'heart-chuva heart-pop';
  heart.textContent = '❤️';
  const rect = this.getBoundingClientRect();
  heart.style.left = (e.clientX - rect.left - 20) + 'px';
  heart.style.top = (e.clientY - rect.top - 20) + 'px';
  heart.style.position = 'absolute';
  heart.style.fontSize = '2.5em';
  heart.style.pointerEvents = 'none';
  this.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
  const frases = [
  "Você é meu lar.",
  "Cada segundo contigo vale ouro.",
  "1110 dias… e contando pra sempre.",
];
let i = 0;
setInterval(() => {
  document.getElementById("mensagem").textContent = frases[i];
  i = (i + 1) % frases.length;
}, 6000);

});


