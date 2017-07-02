// JavaScript Document
jQuery(document).ready(function($) {
	$('#add_y').click(function(){
		$('.theme-popover-mask').fadeIn(100);
		$('.addPro').slideDown(200);
		$('#addFlag').value=1;
		$(".addPro p").text("上传影单");
	})
	
	$('#add_w').click(function(){
		$('.theme-popover-mask').fadeIn(100);
		$('.addPro').slideDown(200);
		$('#addFlag').value=2;
		$(".addPro p").text("参与过的作品");
	})
	
		
	$('.addPro .close').click(function(){
		$('.theme-popover-mask').fadeOut(100);
		$('.addPro').slideUp(200);
	})
	
	
	$('.replace').click(function(){
		$('.theme-popover-mask').fadeIn(100);
		$('.replace_photo').slideDown(200);
	})
	$('.replace_photo .close').click(function(){
		$('.theme-popover-mask').fadeOut(100);
		$('.replace_photo').slideUp(200);
	})

})