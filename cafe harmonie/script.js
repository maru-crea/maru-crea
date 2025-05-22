// overlay-script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-overlay');
  const nav = document.querySelector('.nav-overlay');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);

    // メニューオープン時に背景スクロールを防止
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // ESCキーでメニューを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
      nav.setAttribute('aria-hidden', true);
      document.body.style.overflow = '';
    }
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

  // キャッチコピーふわっと表示
  const copy = document.querySelector(".hero-copy");
  if (copy) {
    copy.style.opacity = 0;
    setTimeout(() => {
      copy.style.animation = "fadeIn 3s ease forwards";
    }, 500);
  }
});

// Concept スライドショー
let conceptSlides = document.querySelectorAll('.concept-slide');
let conceptCurrent = 0;

function showConceptSlide(index) {
  conceptSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  conceptCurrent = (conceptCurrent + 1) % conceptSlides.length;
  showConceptSlide(conceptCurrent);
}, 4000); // 4秒ごとに切り替え