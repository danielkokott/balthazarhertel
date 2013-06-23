$(".moviethumb").click(function(e) {
	if ($(this).attr("show") !== undefined) {
		$(".movieplayer").hide();
		$($(this).attr("show")).show();
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
