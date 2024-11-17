$(function () {
// カルーセル
$('.carousel').slick({
  /* 自動的に切り替える */
  autoplay: true,
  /* 表示する */
  dots: true,
  /* ループさせる */
  infinite: true,
  /* 5000ミリ秒＝5秒 */
  autoplaySpeed: 5000,
  /* 非表示にする */
  arrows: false,
});

// スクロール時の処理
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('#topButton').fadeIn();
  } else {
    $('#topButton').fadeOut();
  }
});
// ウィンドウをスクロールしたら…
$(window).scroll(function(){
  // ウィンドウの高さを取得
  const wHeight = $(window).height();
  // スクロールした量を取得
  const wscroll = $(window).scrollTop();
  // 繰り返し処理
    $('.js-target').each(function() {
// スクロールした量が要素の高さを上回ったら
// その数値にウィンドウの高さを引き、最後に100pxを足す
      const bPosition = $(this).offset().top;
    if (wscroll > bPosition - wHeight + 100) {
      $(this).addClass('fadeIn');
    }
  });
});

// ボタンクリック時にトップへ戻る処理
$('#topButton').click(function(event){
  event.preventDefault();
  /* 
  イベントのデフォルトの動作をキャンセルするために使用される。 
  これは特に、HTMLフォームの送信、リンクのクリック、キーボードやマウスイベントなど、
  ブラウザが特定のイベントに対して持つデフォルトの動作を防ぐ場合に役立つ 
  */
  $('html, body').animate({ scrollTop: 0 }, 100);
  return false;
});

// Worksの画像をクリックしたときの処理
$('.works-box img').click(function(){
  const imgSrc = $(this).attr('src');
  $('#modal-image').attr('src', imgSrc);
  $('#modal').fadeIn();
});

// モーダルの閉じるボタンをクリックしたときの処理
$('#close').click(function(event){
  event.preventDefault();
  $('#modal').fadeOut();
});

});
