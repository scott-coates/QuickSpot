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

	var sliderContainer = $(".steps-container-inner");
	var shouldSlideLeft = true;
	$(".arrow").click(function(){
		if(shouldSlideLeft)
		{
			sliderContainer.css('margin-left','-100%');	
			shouldSlideLeft = false;
		}
		else
		{
			sliderContainer.css('margin-left','0%');	
			shouldSlideLeft = true;
		}
	});
});