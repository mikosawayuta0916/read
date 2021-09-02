
new WOW().init();/*  wowの追加 */
/*ハンバーガーメニュー */ 
$(function() {
    $('.hamburger').click(function() { //ハンバーガーをクリックした時
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
  });


  /* headerクリックイベント */
  jQuery('.header_nav ul li a').click(function() {
    jQuery('.header_nav ul li a').removeClass( 'is-active' );
    jQuery(this).addClass( 'is-active' );
    return false;
  });




  /*  フローティング */
  jQuery(window).on("scroll", function($) {
	if (jQuery(this).scrollTop() > 100) {
		jQuery('.home_button').show();
	} else {
		jQuery('.home_button').hide();
	}
});

jQuery('.home_button').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 1000);
	return false;
});
