$(document).ready(function(){
		
	$( window ).scroll( checkPosition );

	// SMOOTH SCROLLING
  	$("a[href*=#]").not(".step1 a").click(function() {
  	  if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") 
  	  && location.hostname == this.hostname) {
  	    var $target = $(this.hash);
  	    $target = $target.length && $target || $("[name=" + this.hash.slice(1) +"]");
  	    if ($target.length) {
  	      var targetOffset = $target.offset().top;
  	      $("html,body").animate({scrollTop: targetOffset}, 800);
  	      return false;
  	    }
  	  }
  	});

		
	$("img").lazyload({ 
	    effect : "fadeIn"
	});
	 
	// Logo
	$(".wrapper_logo").click(function(){
		$("html,body").scrollTo(".step5", 5000, "swing");
		return false;
	});
	
	// Sidemenu
	
	$("#sidemenu a").hover(function(){
			$(this).next().stop(true, true).fadeIn(500);
		},
		function(){
			$(this).next().stop(true, true).fadeOut(333);
		}
	);
	
	/* Sidebar */
		
	var folioItem = $(".works a").attr("href");
	
	$(".works a").click(function() {
		$("#main-body").fadeOut(800);
    	setTimeout("nav('"+this.href+"')",1000);
   	 	return false;
	});
	
	$(".works a").hover(function(){
		$(this).stop().animate({"opacity": "1"}, "100");
	   	$(this).parent().find("a").not(this).stop().animate({"opacity": "0.3"}, "100");
	   	}, 	
	   	function(){
	   		if($(".works").find("a").hasClass("active")){
	   			$(this).stop().animate({"opacity": "0.3"}, "100");
	   			$(".works").find("a").not(this).stop().animate({"opacity": "0.3"}, "100");
	   		} else {
	   			$(".works").find("a").not(this).stop().animate({"opacity": "1"}, "100");
	   			return false;
	   		}
	});
	
	$(".works a").click(function(){
		$(".works").find("a").removeClass("active");
		$(this).addClass("active");
		$(".works").find("a").not(this).stop().animate({"opacity": "0.3"}, "100");
	});
	
	/* Logos */
	
	$(".logos a").hover(function(){
			$(this).stop().animate({"opacity": "1"}, "100");
	   		$(this).parent().find("a").not(this).stop().animate({"opacity": "0.3"}, "100");
	 	},
	   	function() {
	   		$(".logos a").stop().animate({"opacity": "1"}, "100");
	});
	
	 
	/* Skills */	   
	$("#softskills").appear(function(){
	   $("#softskills .pic").each(function(i){
	   	$(this).delay(i * 300).animate({"opacity": "1"}, "300");
	   });
	});
	
	$("#languages").appear(function(){
	   $("#languages .lang").each(function(i){
	   	$(this).delay(i * 300).animate({"opacity": "1"}, "300");
	   });
	});
    
});

function nav(href){
 	location.href=href;
}

var startY	= 0;
var oneY	= 1500;
var twoY   = 5220;
var threeY   = 7530;
var fourY   = 8860;
var fiveY   = 9960;

function checkPosition(){
	var posy = $( window ).scrollTop();

 	if ( posy <= oneY ){
 		$("#side_edu a").addClass("active");
	} else {
		$("#side_edu a").removeClass("active");
	}

	if ( posy > oneY && posy <= twoY ){
   		$("#side_cv a").addClass("active");
	} else {
		$("#side_cv a").removeClass("active");
	} 

 	if ( posy > twoY && posy <= threeY ){
		$("#side_skills a").addClass("active");
	} else {
		$("#side_skills a").removeClass("active");
	} 

 	if ( posy > threeY && posy <= fourY ){
		$("#side_projects a").addClass("active");
	} else {
		$("#side_projects a").removeClass("active");
	} 
	
	if ( posy > fourY && posy <= fiveY ){
		$("#side_contact a").addClass("active");
	} else {
		$("#side_contact a").removeClass("active");
	} 

}

$(function(){
    $('.logos a').click(function(){
        window.open(this.href);
        return false;
    });
});