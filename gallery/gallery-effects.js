// Optional: subtle 3D tilt on mouse move for each card.
// Include this AFTER your products are rendered (e.g., place after the script that appends cards).
(function enableCardTilt() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = document.querySelectorAll('#gallery .card');
  cards.forEach(card => {
    const img = card.querySelector('img');

    function onMove(e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 8; // rotate left/right
      const rotateX = (0.5 - y) * 6; // rotate up/down
      card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      // subtle parallax for image
      img.style.transform = `translateZ(20px) scale(1.06) rotate(${(x-0.5)*-1}deg)`;
    }

    function onLeave() {
      card.style.transform = '';
      img.style.transform = '';
    }

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    card.addEventListener('blur', onLeave);
  });
})();