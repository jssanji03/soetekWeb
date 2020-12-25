$('.navItems').click(function() {
	const navto = $(this).attr('navto');
	if(navto != "#") {
		const $div = $('#' + navto);
		const top = $div.offset().top || 0;
		$('html,body').animate({
			'scroll-top': top - 100
			}, 500);
	} else {
	    $('html,body').animate({
			'scroll-top': 0
		   }, 500);

		}

});
    
$(function(){
  
  $(window).scroll(function(){
    //var $(window).scrollTop(); 為 scroll
    var scroll = $(window).scrollTop();
    
    if( scroll >= 70){
      // 當卷軸超過70px,.gototop就淡入，如果小於就淡出
      $(".gototop").fadeIn();
      
    }else{
      
      $(".gototop").fadeOut();
      
    }
  });
  // 當我按下.gototop時，添加動畫讓卷軸跑道最上面
  $('.gototop').click(function(){
    $('html,body').animate({
      scrollTop:$('html').offset().top
    })
    
    return false;
  });

})