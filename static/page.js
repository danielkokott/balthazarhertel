$(".movie").click(function(e) {
	if ($(this).attr("data-play") !== undefined) {
		if ($("#movieplayer iframe").attr("src") != $(this).attr("data-play")) {
			$("#movieplayer iframe").attr("src",$(this).attr("data-play"));
		}
		else {
			e.preventDefault();
		}
	}
	else {
		e.preventDefault();
	}
	$("#movieplayer").slideDown(500);
});

$("#movieplay_close").click(function(e) {
	$("#movieplayer").slideUp(500);
});

$("img.moviethumb").hover(
	function(){
		$(this).attr("data-src", $(this).attr("src"))
		this.src = $(this).attr("data-hover");
	},
	function(){
		this.src = $(this).attr("data-src");
	}
);
