// JavaScript Document
define(function(require,exports,module){
		var addwheel=require('addwheel');
		var addevent=require('addevent');
		exports.scrollBar=function (contId,scrollBoxId){
					var oCont=document.getElementById(contId);
					var oScrollBox=document.getElementById(scrollBoxId)
					var oBar=oScrollBox.children[1];
					var oBar_up=oScrollBox.children[0];
					var oBar_down=oScrollBox.children[2];
					oBar.style.height=oCont.scrollHeight/4+'px';
					addevent.addEvent(oBar,'mousedown',function(){
								(function(ev){
									var oEvent=ev||event;
									var disY=oEvent.clientY-oBar.offsetTop;
									document.onmousemove=function(ev){
										var oEvent	=ev||event;
										var t=oEvent.clientY-disY;
										changeTop(t);
									};
									document.onmouseup=function(){
										document.onmouseup=null;
										document.onmousemove=null;
										oBar.releaseCapture&&oBar.releaseCapture();
										
									};
									oBar.setCapture&&oBar.setCapture();
									return false;
							})();
					});
					addevent.addEvent(oBar_up,'mousedown',function(){
						(function(){
							var t=oBar.offsetTop;
							clearInterval(oBar_up.timer);
							oBar_up.timer=setInterval(function(){
								t=t-10;
								if(t<16){
									clearInterval(oBar_up.timer)
								}
								changeTop(t);
								
							},30)	
						})();
					});
					addevent.addEvent(oBar_up,'mouseup',function(){
						(function(){
								clearInterval(oBar_up.timer);
							}
					)();
					});
					addevent.addEvent(oBar_down,'mousedown',function(){
						(function(){
							var t=oBar.offsetTop;
							clearInterval(oBar_up.timer);
							oBar_up.timer=setInterval(function(){
								t=t+10;
								if(t>oScrollBox.offsetHeight-oBar.offsetHeight-16){
									clearInterval(oBar_up.timer)
								}
								changeTop(t);
								
							},30)	
						})();
					});
					addevent.addEvent(oBar_down,'mouseup',function(){
						(function(){
						clearInterval(oBar_up.timer);
						})();
					});
					function changeTop(t){
							if(t<16){
								t=16;	
							}	
							else if(t>oScrollBox.offsetHeight-oBar.offsetHeight-16){
								t=oScrollBox.offsetHeight-oBar.offsetHeight-16
								
							}
							oBar.style.top=t+'px';
							var scale=(t-16)/(oScrollBox.offsetHeight-oBar.offsetHeight-32);
							oCont.style.top=(oCont.offsetParent.offsetHeight-oCont.scrollHeight-24)*scale+24+'px';
							//console.log((oCont.offsetParent.offsetHeight-oCont.scrollHeight-24)*scale)
							
					};
					addwheel.addWheel(oCont.parentNode,function(bDir){
							var t=oBar.offsetTop;
							if(bDir){
									t+=10;
							}
							else{
									t-=10;	
							}
							changeTop(t);
						
					})
			}
});