'use strict';
/*判断屏幕*/
window.onload=window.onresize = function(){
		document.documentElement.style.fontSize = document.documentElement.clientWidth/590*100+'px';
		
		//物理尺寸/逻辑尺寸（设计稿）*放大倍数
};
var i=0;
var oBox=$('.banner ul').width();
/*$('.banner ul').html($('.banner ul').html()+$('.banner ul').html());*/

$('.banner .prev').click(function(){
	i--;
	if(i<0){
		i=3;	
	}
	$('.banner ol li').removeClass('on').eq(i).addClass('on');
	$('.banner ul').animate({left:-5.9*i+'rem'},1000);	
	
});
$('.banner .next').click(function(){
	i++;
	if(i>=4){
		i=0;
	}
	$('.banner ol li').removeClass('on').eq(i).addClass('on');
	$('.banner ul').animate({left:-5.9*i+'rem'},1000);	
});	
/*nav*/	
//document.body.addEventListener('touchstart', function(){ });
	$('.navlist ol li').hover(function(){
		$('.navlist ol li').css({'border-bottom':'0.01rem solid #eee'}).eq($(this).index()).css({'border-bottom':'0.01rem solid #fff'});	
		$('.navlist ul').removeClass('show').eq($(this).index()).addClass('show');	
	});





