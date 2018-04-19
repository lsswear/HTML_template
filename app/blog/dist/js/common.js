(function($){
	$('.inverted .prompt').css('color','rgba(232,68,24,.67)');
	$(window).on("load",function(){
		$("#content").mCustomScrollbar({
			autoHideScrollbar:true,
			theme:"dark-3"
		});
	});
	loadingChange();
	$(window).resize(function() {
		loadingChange();
	});
	function loadingChange(){
    	var wheight = $(window).height();
		$('#content').css({'overflow':'auto','height':wheight});
    }
    $('#menu_btn').click(function(){
		$('.ui.sidebar').sidebar({dimPage:true,transition:'overlay'}).sidebar('toggle');
	}); 
	$('#share').share({sites: ['weibo','qq','douban']});
	$('.inverted .prompt').focus(function(){
		$('.inverted .prompt').css('color','rgba(232,68,24,.97)');
	});
	$('.inverted .prompt').blur(function(){
		$('.inverted .prompt').css('color','rgba(232,68,24,.67)');
	}); 
})(jQuery);