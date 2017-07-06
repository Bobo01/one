
window.onload=function(){
	
	var a=document.getElementById("qqq");
	var b=document.getElementById("www");
	a.onmouseover=function(){
		b.style.zIndex=20;
	}
	a.onmouseout=function(){
		b.style.zIndex=2;
	}
	var a2=document.getElementById("bbb");
	var b2=document.getElementById("bb");
	a2.onmouseover=function(){
		b2.style.zIndex=20;
	}
	a2.onmouseout=function(){
		b2.style.zIndex=2;
	}
	
	var a3=document.getElementById("ccc");
	var b3=document.getElementById("cc");
	a3.onmouseover=function(){
		b3.style.zIndex=20;
	}
	a3.onmouseout=function(){
		b3.style.zIndex=2;
	}
	
	var a4=document.getElementById("ddd");
	var b4=document.getElementById("dd");
	a4.onmouseover=function(){
		b4.style.zIndex=20;
	}
	a4.onmouseout=function(){
		b4.style.zIndex=2;
	}
	
	var a1=document.getElementById("aaa");
	var b1=document.getElementById("aa");
	a1.onmouseover=function(){
		b1.style.zIndex=20;
	}
	a1.onmouseout=function(){
		b1.style.zIndex=2;
	}
	
	
	
	
	
	
/*	
	var box1=document.getElementById("box1");
	var mirror=document.getElementById("mirror");
	mirror.onmouseover=function(){
		box1.style.display="block";
		let boxWidth= 450;
		let boxHeight= 450;
		let mirrorWidth= 100;
		let mirrorHeight= 100;
		mirror.onmousemove=function(event){
		let e=event || window.event;
		let left  = (e.clientX-0-mirrorWidth/2);
		let top  = (e.clientY-0-mirrorHeight/2);


		if(left>(boxWidth-mirrorWidth)){
					left=boxWidth-mirrorWidth;
				}else if(left<0){
					left = 0;
				}
				
				if(top>(boxHeight-mirrorHeight)){
					top=boxHeight-mirrorHeight;
				}else if(top<0){
					top = 0;
				}
				
				//改变外观
				this.style.left = left+"px";
				this.style.top = top+"px";
				
				//2、根据放大镜的位置改变显示图片的位置；
				
		//		let box1=document.getElementById("box1");
		//		获取box1下面的img，
		//		box1.childNodes
		//		然后给再给图片改变位置
				
				document.getElementById("box1").style.left = -2*left+"px";
				document.getElementById("box1").style.top = -2*top+"px";
		}	
	}
	
	*/
	
	mirror.onmouseover=function(){
		box1.style.display="block";
	}
	
	mirror.onmouseout=function(){
		box1.style.display="none";
	}
	
	
	
	
}




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
	



















































































































