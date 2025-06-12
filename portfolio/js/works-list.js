$(function() {
  $('.tab').on('click', function() {
    $('.tab, .panel').removeClass('active');// タブとパネルのactiveクラスを外す
  
    $(this).addClass('active');
     
    var index = $('.tab').index(this);
    $('.panel').eq(index).addClass('active');
  });
  
  AOS.refresh();
  
});

