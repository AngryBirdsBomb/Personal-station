// JavaScript Document
'use strict'
window.onload=function(){
function  tab2(videoBoxListId){
		var oVideoBoxList=document.getElementById(videoBoxListId);
		var oUl=oVideoBoxList.getElementsByTagName('ul')[0];
		var aOl=oVideoBoxList.getElementsByTagName('ol');
		var aUl_li=oUl.getElementsByTagName('li');
		var iNum1=0;
			for(var i=0;i<aUl_li.length;i++){
				(function(num){
						aUl_li[i].onmouseover=function(){
								iNum1=num;
								smtab1();
						};	
				})(i);	
			};
		smtab1();
		function smtab1(){
				for(var i=0;i<aUl_li.length;i++){
					aUl_li[i].className='';
					aOl[i].style.display='none';
				};
				aUl_li[iNum1].className='active';
				aOl[iNum1].style.display='block';	
		};
	};
	tab2('video_list5');

};

















