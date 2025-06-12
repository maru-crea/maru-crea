$(function () {
  const screenWidth = window.innerWidth;
  const viewBoxHeight = 150;

  // 上波の設定
  $('#wave-svg').attr('viewBox', `0 0 ${screenWidth} ${viewBoxHeight}`);
  const isMobile = screenWidth <= 768;

  $('#wave').wavify({
    height: isMobile ? 40 : 60,
    bones: isMobile ? 3 : 4,
    amplitude: isMobile ? 20 : 40,
    speed: isMobile ? 0.3 : 0.5,
    color: 'transparent'
  });
  setTimeout(() => {
    $('#wave').attr('fill', 'url(#sunsetGradient)');
  }, 100);


  // リサイズ時のviewBox調整
  $(window).on('resize', function () {
    const screenWidth = window.innerWidth;
    $('#wave-svg').attr('viewBox', `0 0 ${screenWidth} ${viewBoxHeight}`);
  });
});


$(function () {
  const $hamburger = $('.hamburger-menu');

  function toggleHamburgerDisplay() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      $hamburger.show(); // スマホは常に表示
    } else {
      if ($(window).scrollTop() > 100) {
        $hamburger.fadeIn();
      } else {
        $hamburger.fadeOut();
      }
    }
  }

  // 初期チェック
  toggleHamburgerDisplay();

  // スクロール・リサイズイベントで再チェック
  $(window).on('scroll resize', toggleHamburgerDisplay);
});

// ハンバーガーメニュー のクリックイベント
$('.nav_toggle').on('click', function () {
  $('.nav_toggle, .nav').toggleClass('show');
});
