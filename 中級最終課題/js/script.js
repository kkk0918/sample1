

$(function(){
 // drawer js
 $('.drawer').drawer()
  
    $( '.js-faq' ).on( 'click', function() {
        $( this ).find( '.js-faqA' ).stop().slideToggle( 300 );
        $( this ).toggleClass( 'b' );
        
      });
     
      // #から始まるURLがクリックされた時
$('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 400;
  // hrefで指定されたidを取得
  let id = $(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = $("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = $(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  $("html, body").animate(
    {
      scrollTop: position - $('#js-header').outerHeight()
    },
    speed
  );
  return false;
});

new WOW().init();

//   formの入力確認
let $submit = $('#js-submit')
  $('#js-form input,#js-form textarea').on('change',function(){
    if(
        $('#js-form input[type="text"]').val() !=="" &&
        $('#js-form input[name="bbb"]').prop('checked') === true
    
        
        
       
    ){
        // 全て入力された時
        $submit.prop('disabled',false)
        $submit.addClass('-active')
    }else{
        // 入力されていない時
        $submit.prop('disabled',true)
        $submit.removeClass('-active')
    }
  })

  $( '.drawer-hamburger' ).on( 'click', function() {
    $( '.drawer-nav' ).addClass( 'open' );
    $( '.drawer-toggle' ).addClass( 'open-full' );
    
  });
 
  $( '.header-nav-item-link' ).on( 'click', function() {
    $( '.drawer-nav' ).removeClass( 'open' );
    $('.drawer').drawer('close');

});
$( '.drawer-hamburger' ).on( 'click', function() {
  $( '.drawer-nav' ).removeClass( 'open' );
});

});
