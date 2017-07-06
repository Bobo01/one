		$(document).ready(function(){
			
			$("#ding").hide();
			
			$(function () {
			
				$(window).scroll(function(){
				
					if ($(window).scrollTop()>100){
					
					$("#ding").fadeIn(500);
					
					}
					
					else
					
					{
					
					$("#ding").fadeOut(500);
					
					}
					
				});
				
				$("#ding").click(function(){
				
					$('body,html').animate({scrollTop:0},100);
					
					return false;
					
				});
				
				});
			
		});
	











































