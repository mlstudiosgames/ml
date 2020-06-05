jQuery(function() {
    jQuery('img').removeAttr('width').removeAttr('height');
    
    jQuery('div.hover').click(function(){
        window.location.href = jQuery(this).find('a.square-01').attr('href');
    });
    
	
});