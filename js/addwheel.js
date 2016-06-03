// JavaScript Document
define(function(require,exports,module){
	var addevent=require('addevent');
		exports.addWheel=function(obj,fn){
			function fnWheel(ev){
				var bOk = true;//标识是往下还是往上，往下true，往上false
				var oEvent = ev||event;
				//oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
				if(oEvent.wheelDelta){
					if(oEvent.wheelDelta<0){
						//下
						bOk=true;
					}else{
						//上
						bOk=false;
					}
				}else{
					if(oEvent.detail>0){
						//下
						bOk=true;
					}else{
						//上
						bOk=false;
					}
				}
				fn&&fn(bOk);
				oEvent.preventDefault&&oEvent.preventDefault();
				return false;
			}
			//判断浏览器是否是火狐
			if(window.navigator.userAgent.indexOf('Firefox')!=-1){
				addevent.addEvent(obj,'DOMMouseScroll',fnWheel);
			}else{
				addevent.addEvent(obj,'mousewheel',fnWheel);
			}
		}
	
})

