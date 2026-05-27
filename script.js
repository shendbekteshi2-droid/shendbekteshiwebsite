// ========== HAMBURGER MENU ========== 
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  mobileMenu.classList.toggle('open');
}

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// Close menu kur klikon jashtë
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Close menu kur klikon në link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ========== LOGIN FUNCTIONALITY ========== 
function handleLogin(event) {
  event.preventDefault();
  
  const user = document.getElementById('user').value.trim();
  const pass = document.getElementById('pass').value.trim();
  const errorMsg = document.getElementById('error-msg');

  if (!user || !pass) {
    errorMsg.style.display = 'flex';
    return;
  }

  errorMsg.style.display = 'none';
  showDashboard();
}

function showDashboard() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  window.scrollTo({ 
    top: document.getElementById('dashboard').offsetTop - 80, 
    behavior: 'smooth' 
  });
}

function logout() {
  document.getElementById('user').value = '';
  document.getElementById('pass').value = '';
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('login').style.display = 'block';
  window.scrollTo({ 
    top: document.getElementById('login').offsetTop - 80, 
    behavior: 'smooth' 
  });
}

// ========== INTERSECTION OBSERVER (Animations) ========== 
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .staff-card, .schedule-card, .excursion-card, .sport-card').forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s';
  observer.observe(el);
});
