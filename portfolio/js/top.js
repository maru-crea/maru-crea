//　波の設定

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

  // 下波の設定
  $('#wave-svg-bottom').attr('viewBox', `0 0 ${screenWidth} ${viewBoxHeight}`);
  $('#wave-bottom').wavify({
    height: isMobile ? 30 : 50,
    bones: isMobile ? 3 : 4,
    amplitude: isMobile ? 20 : 35,
    speed: isMobile ? 0.2 : 0.4,
  });

  // 初期は下波を非表示にしておく
  $('#wave-container-bottom').hide();

  // スクロールで波の切り替え
  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    const contactTop = $('#contact').offset().top;
    const windowHeight = $(window).height();

    if (scrollTop + windowHeight > contactTop + 100) {
      // contactが画面に見えてきたら
      $('#wave-container').hide(); // 上波を隠す
      $('#wave-container-bottom').show(); // 下波を表示
    } else {
      $('#wave-container').show();
      $('#wave-container-bottom').hide();
    }
  });

  // リサイズ時のviewBox調整
  $(window).on('resize', function () {
    const screenWidth = window.innerWidth;
    $('#wave-svg').attr('viewBox', `0 0 ${screenWidth} ${viewBoxHeight}`);
    $('#wave-svg-bottom').attr('viewBox', `0 0 ${screenWidth} ${viewBoxHeight}`);
  });
});


// ヒーローセクションのアニメーション
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
