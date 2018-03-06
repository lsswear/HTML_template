$('.reveal  .hidden').each(function(){ 
	var width=$(this).closest(".reveal").find(".visible").width();
	$(this).width(width);
	var height=$(this).closest(".reveal").find(".visible").height();
	$(this).height(height);
});