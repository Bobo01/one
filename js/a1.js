// JavaScript Document

		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 5000,//可选选项，自动滑动
			//direction: 'horizontal',
			loop: true,
			//slidesPerView: 3,
			//centeredSlides: true,
			effect : 'coverflow',
			
			// 如果需要分页器
			pagination : '.swiper-pagination',
		//	paginationClickable :true,
			// 如果需要前进后退按钮
		//	nextButton: '.swiper-button-next',
		//	prevButton: '.swiper-button-prev',
			// 如果需要滚动条
			//  scrollbar:'.swiper-scrollbar',

		})


	
		/*
		alert($(document).scrollTop()); //获取滚动条到顶部的垂直高度
		alert($(document).scrollLeft()); //获取滚动条到左边的垂直宽度
		alert($(window).height()); //浏览器时下窗口可视区域高度
		if($(document).scrollTop()>$(window).height()){
			document.getElementById("ding").style.display="block";
		}
		*/
		
		

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
			
  
	




























































































































































