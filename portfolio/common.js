  // jQueryの読み込み
  $(function () {
    const screenWidth = window.innerWidth;
    const viewBoxHeight = 150;
    // SVGのviewBoxを画面幅に合わせて設定
    $('#wave-svg').attr('viewBox', `0 0 ${screenWidth} ${viewBoxHeight}`);

    $('#wave').wavify({
      height: 60,
      bones: 4,
      amplitude: 40,
      speed: 0.5,
      color: 'transparent'
    });

    setTimeout(function () {
      $('#wave').attr('fill', 'url(#sunsetGradient)');
    }, 100);
  });

$(window).on('resize', function () {
  const screenWidth = window.innerWidth;
  const viewBoxHeight = 150;
  $('#wave-svg').attr('viewBox', `0 0 ${screenWidth} ${viewBoxHeight}`);
});

$(function () {
  const $hamburger = $('.hamburger-menu');

  function toggleHamburgerDisplay() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      $hamburger.show(); // スマホは常に表示
    } else {
      if ($(window).scrollTop() > 10) {
        $hamburger.fadeIn().css({
          display: 'block',
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 1000
        });
      } else {
        $hamburger.fadeOut();
      }
    }
  }

  // 初期チェック
  toggleHamburgerDisplay();

  // スクロールとリサイズで再チェック
  $(window).on('scroll resize', toggleHamburgerDisplay);
});

  // ハンバーガーメニュー のクリックイベント
$('.nav_toggle').on('click', function () {
  $('.nav_toggle, .nav').toggleClass('show');
});

$(function () {
  // 初期は非表示
  $('.hero-image img, .hero-text, .nav-list').css({
    opacity: 0
  });

  // 順番にアニメーション実行
  const tl = new TimelineMax();

   // 波を上から下に降ろす（初期位置を -100 にして 0 に戻す）
  tl.fromTo("#wave-svg", 1.2,
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, ease: Power2.easeOut }
  )

  // ヒーロー画像をふわっと表示
  .fromTo(".hero-image img", 1,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, ease: Power2.easeOut }
  )

  // テキストをズームアウトしながら表示
  .fromTo(".hero-text", 1,
    { scale: 3.0, opacity: 0 },
    { scale: 1, opacity: 1, ease: Power2.easeOut }
  )

  // ナビゲーションを最後に表示
  .fromTo(".nav-list", 0.8,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, ease: Power2.easeOut }
  );
});
