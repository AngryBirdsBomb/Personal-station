'use strict';
// JavaScript Document
window.onload=function(){
	var json={"穿墙":"穿墙.html","分页":"分页.html","拉勾网幻灯片":"拉勾网幻灯片.html","京东轮播图":"京东轮播图.html","百度时钟":"百度时钟.html","变速轮播图":"变速轮播图.html","无缝滚动选项卡":"无缝滚动选项卡.html","傲视影音":"main.html","吸顶条":"吸顶条/index1.html","宽度控制颜色":"宽度控制颜色.html","浏览器宽度控制列数":"浏览器宽度控制列数.html","简易瀑布流":"简易瀑布流.html","图片延迟加载":"图片延迟加载.html","分块运动":"分块运动.html","苹果菜单":"苹果菜单.html","圆周运动":"圆周运动.html","手风琴":"手风琴.html","剑灵首页":"剑灵/index.html","视觉落差":"视觉落差.html","移动端+自适应":"移动端.html"};	
	var oUl=document.getElementById('list');
	var zIndex=1;
	
	var oBox=document.getElementById('box');
	for(var  name in json){
			var oLi=document.createElement('li');	
			var oP=document.createElement('p');
			oP.innerHTML='<a href="'+json[name]+'">'+name+'</a>';
			oP.style.left=rnd(50,1000)+'px';
			oP.style.top='50px';
			oP.style.backgroundImage='url(img/h'+rnd(5,8)+'.png)';
			oP.style.backgroundSize='100%';
			oUl.appendChild(oLi);
			oBox.appendChild(oP);
	}
	var aP=oBox.getElementsByTagName('P');
	var aLi=oUl.getElementsByTagName('li');
	var aA=oBox.getElementsByTagName('a');
	var oBtn=document.getElementsByTagName('input')[0];
	
	var arr=[];
	var arr2=[];
	for(var i=0;i<aLi.length;i++){
		arr.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
		arr2.push(rnd(2,10));	
	}
	for(var i=0;i<aP.length;i++){
			Drag(aP[i]);
			fly2(aP[i]);
	}
	oBtn.onclick=function(){
			for(var i=0;i<aP.length;i++){
				startMove(aP[i],{left:arr[i].left,top:arr[i].top,opacity:0.6},{time:1000});
			}
			
	};
	function rnd(n,m){
		return parseInt(n+Math.random()*(m-n))	
	}
	
	function Drag(obj,fn){
		var iSpeedX=0;
		var iSpeedY=0;
		var lastX=0;
		var lastY=0;
		obj.onmousedown=function(ev){
			zIndex++;
			clearInterval(obj.timer);
			var oEvent=ev||event;
			var disX=oEvent.clientX-obj.offsetLeft;
			var disY=oEvent.clientY-obj.offsetTop;
			obj.style.zIndex=zIndex;
			document.onmousemove=function(ev){
				var oEvent=ev||event;
				var l=oEvent.clientX-disX;
				var t=oEvent.clientY-disY;
				iSpeedX=oEvent.clientX-lastX;
				iSpeedY=oEvent.clientY-lastY;
				lastX=oEvent.clientX;
				lastY=oEvent.clientY;
				obj.style.left=l+'px';
				obj.style.top=t+'px';
				
				
			};
			document.onmouseup=function(){
				fly();
				obj.href='javascript:;';
				document.onmousemove=null;
				document.onmouseup=null;
				
				obj.releaseCapture&&obj.releaseCapture();	
			};
			obj.setCapture&&obj.setCapture();
			return false;			
		};	
		function fly(){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				iSpeedY+=3;
				var l1=obj.offsetLeft+iSpeedX;
				var t1=obj.offsetTop+iSpeedY;
				if(l1<0){
					l1=0;
					if(l1==0){
						obj.style.background='url(img/h'+rnd(5,8)+'.png) center no-repeat';
						obj.style.backgroundSize='100%';
					}
					iSpeedX*=-0.8;
					iSpeedY*=0.8;	
				}
				else if(l1>=document.documentElement.clientWidth-aP[0].offsetWidth){
					l1=document.documentElement.clientWidth-aP[0].offsetWidth	;
					if(l1==document.documentElement.clientWidth-aP[0].offsetWidth	){
						obj.style.background='url(img/h'+rnd(5,8)+'.png) center no-repeat';
						obj.style.backgroundSize='100%';
					}
					iSpeedX*=-0.8;
					iSpeedY*=0.8;	
				}
				if(t1<0){
					t1=0;
					if(t1=0){
						obj.style.background='url(img/h'+rnd(5,8)+'.png) center no-repeat';
						obj.style.backgroundSize='100%';
					}
					iSpeedX*=0.8;
					iSpeedY*=-0.8;	
				}
				else if(t1>=document.documentElement.clientHeight-aP[0].offsetHeight){
					t1=document.documentElement.clientHeight-aP[0].offsetHeight;
					if(t1=document.documentElement.clientHeight-aP[0].offsetHeight){
						obj.style.background='url(img/h'+rnd(5,8)+'.png) center no-repeat';
						obj.style.backgroundSize='100%';
					}
					iSpeedX*=0.8;
					iSpeedY*=-0.8;	
				}
				obj.style.left=l1+'px';
				obj.style.top=t1+'px';	
				if(Math.abs(iSpeedX)<1)iSpeedX=0;
				if(Math.abs(iSpeedY)<1)iSpeedY=0;
				if(iSpeedX==0&&iSpeedY==0&&t1==document.documentElement.clientHeight-aP[0].offsetHeight){
					clearInterval(obj.timer);	
				}
			},30);
			
		};
	}
	function fly2(obj){
		var iSpeedX=rnd(-120,120);
		var iSpeedY=rnd(-120,120);
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			iSpeedY+=3;
			var l1=obj.offsetLeft+iSpeedX;
			var t1=obj.offsetTop+iSpeedY;
			if(l1<0){
				l1=0;
				if(l1==0){
					obj.style.background='url(img/h'+rnd(5,8)+'.png) center no-repeat';
					obj.style.backgroundSize='100%';
				}
				iSpeedX*=-0.9;
				iSpeedY*=0.9;	
			}
			else if(l1>=document.documentElement.clientWidth-aP[0].offsetWidth){
				l1=document.documentElement.clientWidth-aP[0].offsetWidth	;
				if(l1==document.documentElement.clientWidth-aP[0].offsetWidth	){
					obj.style.background='url(img/h'+rnd(5,8)+'.png) center no-repeat';
					obj.style.backgroundSize='100%';
				}
				iSpeedX*=-0.9;
				iSpeedY*=0.9;	
			}
			if(t1<0){
				t1=0;
				if(t1=0){
					obj.style.background='url(img/h'+rnd(5,8)+'.png) center no-repeat';
					obj.style.backgroundSize='100%';
				}
				iSpeedX*=0.9;
				iSpeedY*=-0.9;	
			}
			else if(t1>=document.documentElement.clientHeight-aP[0].offsetHeight){
				t1=document.documentElement.clientHeight-aP[0].offsetHeight;
				if(t1=document.documentElement.clientHeight-aP[0].offsetHeight){
					obj.style.background='url(img/h'+rnd(5,8)+'.png) center no-repeat';
					obj.style.backgroundSize='100%';
				}
				iSpeedX*=0.9;
				iSpeedY*=-0.9;	
			}
			obj.style.left=l1+'px';
			obj.style.top=t1+'px';	
			if(Math.abs(iSpeedX)<1)iSpeedX=0;
			if(Math.abs(iSpeedY)<1)iSpeedY=0;
			if(iSpeedX==0&&iSpeedY==0&&t1==document.documentElement.clientHeight-aP[0].offsetHeight){
				clearInterval(obj.timer);	
			}
		},30);
		
	};
	
};


