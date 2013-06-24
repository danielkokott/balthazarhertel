$(".moviethumb").click(function(e) {
	if ($(this).attr("play") !== undefined) {
		$("#movieplayer").attr("src",$(this).attr("play"));
	}
	else {
		e.preventDefault();
	}

});

$(".moviethumb").hover(
	function() {
		$(this).next(".movielabel").children("p").show();
	},
	function() {
		$(this).next(".movielabel").children("p").hide();
	}
);
