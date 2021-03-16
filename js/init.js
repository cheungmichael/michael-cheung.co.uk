$(document).ready(function(){
$('#content').attr({scrollTop:0,scrollLeft:0});

	// Scroll initially if there's a hash (#something) in the url
	$.localScroll.hash({
		target: '#content', //could be a selector or a jQuery object too.
		axis:'xy',//the default is 'y'
		queue:true,
		duration:1500
	});
	
	var $last = $([]);//save the last link
	
	$.localScroll({
		target: '#content', //could be a selector or a jQuery object too.
		axis:'xy', //the default is 'y'
		queue:true,
		duration:1000,
		//hash:true,
		onBefore:function( e, anchor, $target ){//'this' is the clicked link
		$last.removeClass('scrolling');
		$last = $(this).addClass('scrolling');
		if( this.blur )
			this.blur();//remove the awful outline
		},
		onAfter:function( anchor ){
		$last.removeClass('scrolling');
		}
	});

	/*
	$("li a").hover(
		function(){
			var theTitle = "<div>&raquo; " + $(this).attr("title") + "</div>";
			$(this).parent().parent().after(theTitle);
		},
		function() {
			$(this).parent().parent().next().remove();
		}
	);
	*/
	$("li:first a").addClass("active");
	$("li a").click(function () { 
      $("li a").removeClass("active");
	  $(this).addClass("active");
    });
	
	$("dd").prepend("&ndash; ");

});