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
		
		
	$.ajax({
		type:"get",
		url:"../html/shoppinglist.php",
		async:true,
		success:function(data){
			console.log(data)
			for (var i=0;i<=data.length;i++) {
/*				retrun 		"<li class="te">"+
								"<img src="data.images[i]" />"+
								"<span class="xin">"data."</span>"+
								"<p class="xp">Furla 芙拉 女士METROPOLIS系列蓝色牛皮单肩包</p>"+
								"<p class="xp"><span class="xs">¥2,059</span><s>￥4,200</s></p>"+
							</li>"  */

			}
		}
	});	
		
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	