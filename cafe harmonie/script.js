// overlay-script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-overlay');
  const nav = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('.nav-overlay__link'); // ← 追加

  const closeMenu = () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
    nav.setAttribute('aria-hidden', true);
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);

    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu(); // ← 共通関数に変更
    }
  });

  // ⭐ メニュー内リンクをクリックしたときにメニューを閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // PC・スマホどちらを表示するか判定
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const slideshow = document.querySelector(isMobile ? ".hero-slideshow.sp" : ".hero-slideshow.pc");
  const slides = slideshow.querySelectorAll(".slide");

  let current = 0;
  const interval = 3000; // 5秒ごとに切り替え

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, interval);


});

const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
