function showmovie(id) {
	console.log(id);
	console.log(this)

    $('.moviethumb').addClass('disabled');

	$(".movieplayer[style!='display: none;']").fadeOut(100, function(){
  		$(id).fadeIn("slow");
  	});

    $('.moviethumb').removeClass('disabled');
}