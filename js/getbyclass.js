// JavaScript Document
define(function(require,exports,module){
	var fininarr=require('findinarr');
		exports.getByClass=function getByClass(obj,sClass){
					if(obj.getElementsByClass){
							return obj.getElementsByClassName[sClass];	
						
					}	
					else{
							var aEle=obj.getElementsByTagName('*');	
							var aResult=[];
							for(var i=0;i<aEle.length;i++){
								var aClass=aEle[i].className.split(' ');
									if(fininarr.findInArr(aClass,sClass)){
										 aResult.push(aEle[i]);	
									}
								
							};
							return aResult;
					}
			};
			
});