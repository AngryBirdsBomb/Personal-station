// JavaScript Document
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];	
	
};
function startMove(obj,json,options){
	var n=0;
	options=options||{};
	options.type=options.type||'ease-out';
	options.time=options.time||700;
	var count=Math.floor(options.time/30);
	var dis={};
	var start={};
	for(var i in json){
		start[i]=parseFloat(getStyle(obj,i));
		if(isNaN(start[i])){
			switch(i){
				case 'left':
				start[i]=obj.offsetLeft;
				break;
				case 'top':
				start[i]=obj.offsetTop;
				break;
				case 'width':
				start[i]=obj.offsetWidth;
				break;
				case 'height':
				start[i]=obj.offsetHeight;
				break;
				case 'opacity':
				start[i]=1;
				break;
				case 'borderWidth':
				start[i]=0;
				break;
			}	
		}	
		dis[i]=json[i]-start[i];
	}
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		for(var i in json){
			switch(options.type){
				case 'linner':
				var cur=start[i]+dis[i]*n/count;	
				break;
				case 'ease-in':
				var a=n/count
				var cur=start[i]+dis[i]*Math.pow(a,3);	
				break;
				case 'ease-out':
				var a=1-n/count;
				var cur=start[i]+dis[i]*(1-Math.pow(a,3));	
				break;
				
			}	
			if(i=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';	
			}
			else{
				obj.style[i]=cur+'px';	
				
			}
			
		}	
		if(n==count){
			clearInterval(obj.timer);	
			options.end&&options.end();
		}
		
	},30);
	
};



































