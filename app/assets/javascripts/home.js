$(function(){
	$("#explain-site-button").click(function(){
		$('#intro').transition({ x: -330, opacity:0, rotate: 30}, 500, 'ease',function () {
			this.hide();
			$('#intro-background').transition({ opacity:0}, 500, 'ease',function() {
				this.hide();
				$("#explanation-background")
				.show()
				.transition({opacity:1},function  (argument) {
					$("#explanation")
					.show()
					.transition({opacity:1});
				});
			});
		});
	});
});