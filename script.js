// Confetti effect for the homepage
document.addEventListener('DOMContentLoaded', function() {
  // Only run on homepage
  if (!document.body.classList.contains('home')) return;
  
  // Create confetti
  createConfetti();
  
  // Add floating animation to decoration elements
  animateDecorations();
});

function createConfetti() {
  const confettiCount = 100;
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 5 + 's';
    confetti.style.backgroundColor = getRandomColor();
    container.appendChild(confetti);
  }
  
  // Add CSS for confetti
  const style = document.createElement('style');
  style.textContent = `
    .confetti-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }
    
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #f00;
      top: -10px;
      animation: fall 5s linear infinite;
    }
    
    @keyframes fall {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      75% {
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

function getRandomColor() {
  const colors = ['#ff9a9e', '#fad0c4', '#ffecd2', '#fcb69f', '#d4fc79', '#96e6a1', '#a1c4fd', '#c2e9fb', '#e6dee9'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function animateDecorations() {
  const lotuses = document.querySelectorAll('.lotus');
  const hearts = document.querySelectorAll('.heart');
  
  // Add random delays to each element
  lotuses.forEach(lotus => {
    lotus.style.animationDelay = Math.random() * 2 + 's';
  });
  
  hearts.forEach(heart => {
    heart.style.animationDelay = Math.random() * 2 + 's';
  });
}
