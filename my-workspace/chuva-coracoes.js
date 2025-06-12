// Chuva de corações aprimorada com rotação e tamanhos aleatórios
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart-chuva';
  heart.textContent = '💜';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '-40px';
  heart.style.position = 'fixed';
  heart.style.zIndex = '9999';
  heart.style.pointerEvents = 'none';
  const size = Math.random() * 1.5 + 1; // entre 1 e 2.5
  heart.style.fontSize = size + 'em';
  heart.style.transform = `rotate(${Math.random() * 360}deg)`;
  heart.style.animation = `heart-fall ${3 + Math.random() * 3}s linear forwards`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 300);

// Coração interativo ao clique
document.addEventListener('click', e => {
  const pop = document.createElement('div');
  pop.textContent = '💜';
  pop.style.position = 'fixed';
  pop.style.left = `${e.clientX - 10}px`;
  pop.style.top = `${e.clientY - 10}px`;
  pop.style.fontSize = '2.5em';
  pop.style.zIndex = '10001';
  pop.style.opacity = '1';
  pop.style.transition = 'all 0.8s ease';
  document.body.appendChild(pop);
  setTimeout(() => {
    pop.style.top = `${e.clientY - 60}px`;
    pop.style.opacity = '0';
  }, 10);
  setTimeout(() => pop.remove(), 1000);
});
