$(".moviethumb").click(function(e) {
	if ($(this).attr("data-play") !== undefined) {
		if ($("#movieplayer").attr("src") != $(this).attr("data-play")) {
			$("#movieplayer").attr("src",$(this).attr("data-play"));
		}
		else{
			e.preventDefault();
		}
	}
	else {
		e.preventDefault();
	}

});

$(".moviethumb").hover(
	function() {
		$(this).next(".movielabel").children("p").show();
		$(this).prev(".movielabel").children("img").show();
		console.log($(this).prev(".movielabel").children("img").attr("src"));
	},
	function() {
		$(this).next(".movielabel").children("p").hide();
	}
);
