// Cargar el archivo de audio
var audio = new Audio('EresArte.mp3');
audio.loop = true;  // Hace que la canción se repita
audio.muted = false; // Asegúrate de que no está silenciado

// Función para reproducir el audio
function playAudio() {
  if (audio.paused) {
    audio.play();
  }
}

// Evento de click
document.body.addEventListener('click', playAudio);

// Evento de scroll
window.addEventListener('scroll', playAudio);

for (let i = 0; i < 20; i++) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
  balloon.style.animationDelay = `${Math.random() * 5}s`;
  document.body.appendChild(balloon);
}