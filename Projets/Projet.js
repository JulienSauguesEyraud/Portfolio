(function(){
  const overlay = document.createElement('div');
  overlay.className = 'img-overlay';
  overlay.innerHTML = '<img alt="Vue agrandie" /><div class="close-hint">Cliquez pour fermer</div>';
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(overlay);
    const overlayImg = overlay.querySelector('img');

    function openOverlay(src) {
      overlayImg.src = src;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('overlay-open');
    }

    function closeOverlay() {
      overlay.classList.remove('open');
      overlayImg.src = '';
      document.body.style.overflow = '';
      document.body.classList.remove('overlay-open');
    }

    // Fermer sur clic n'importe où dans l'overlay
    overlay.addEventListener('click', closeOverlay);
    // Fermer sur ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeOverlay();
      }
    });

    // Activer sur toutes les images des étapes
    document.querySelectorAll('.etape-img img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openOverlay(img.src));
    });
  });
})();
