/* script.js
   - controla menu hamburger
   - adiciona interação simples de "comprar" (alerta/console)
*/

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const buys = document.querySelectorAll('.buy');

  // Toggle menu mobile
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');

    // animação simples do hambúrguer
    hamburger.classList.toggle('open');
    if (hamburger.classList.contains('open')) {
      hamburger.querySelectorAll('.bar')[0].style.transform = 'translateY(6px) rotate(45deg)';
      hamburger.querySelectorAll('.bar')[1].style.opacity = '0';
      hamburger.querySelectorAll('.bar')[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      hamburger.querySelectorAll('.bar')[0].style.transform = '';
      hamburger.querySelectorAll('.bar')[1].style.opacity = '';
      hamburger.querySelectorAll('.bar')[2].style.transform = '';
    }
  });

  // Close menu on link click (mobile friendly)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded','false');
        hamburger.querySelectorAll('.bar')[0].style.transform = '';
        hamburger.querySelectorAll('.bar')[1].style.opacity = '';
        hamburger.querySelectorAll('.bar')[2].style.transform = '';
      }
    });
  });

  // Simple buy handler (replace with real checkout)
  buys.forEach(btn => btn.addEventListener('click', (e) => {
    const prod = e.currentTarget.dataset.product || 'produto';
    // quick visual feedback
    e.currentTarget.textContent = 'Adicionado ✓';
    e.currentTarget.disabled = true;
    setTimeout(() => {
      e.currentTarget.textContent = 'Compre aqui';
      e.currentTarget.disabled = false;
    }, 1500);
    console.log(`Produto adicionado ao carrinho: ${prod}`);
  }));
});
