  	$(function() {
  		$("img.lazy").lazyload();
  	});

  	$("#shody")[0].addEventListener("click", function(){
  		$("#tab-1").removeClass("active");
  		$(".kuhni").removeClass("active");
  		$("#tab-3").removeClass("active");
  		$(".mebli").removeClass("active");
  		$("#tab-2").addClass("active fade in");
  		$(".shody").addClass("active");
  	})

  	$("#mebli")[0].addEventListener("click", function(){
  		$("#tab-1").removeClass("active");
  		$(".kuhni").removeClass("active");
  		$("#tab-2").removeClass("active");
  		$(".shody").removeClass("active");
  		$("#tab-3").addClass("active  fade in");
  		$(".mebli").addClass("active");
  	});

  	$("#kuhni")[0].addEventListener("click", function(){
  		$("#tab-2").removeClass("active");
  		$(".shody").removeClass("active");
  		$("#tab-3").removeClass("active");
  		$(".mebli").removeClass("active");
  		$("#tab-1").addClass("active  fade in");
  		$(".kuhni").addClass("active");
  	});


  	$(".scrollto").click(function() {
  		var elementClick = $(this).attr("href")
  		var destination = $(elementClick).offset().top;
  		jQuery("html:not(:animated),body:not(:animated)").animate({
  			scrollTop: destination
  		}, 400);
  		return false;
  	});
