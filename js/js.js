// JavaScript Document
'use strict'
define(function(require,exports,module){
	var AW=require('addwheel');
	var getbyclass=require('getbyclass');
	var scrollbar=require('scrollbar');
	var addevent=require('addevent');
	var move=require('move');
	exports.main_l=function(){
			function  tab1(videoBoxListId){
				var oVideoBoxList=document.getElementById(videoBoxListId);
				var oUl=oVideoBoxList.getElementsByTagName('ul')[0];
				var aOl=oVideoBoxList.getElementsByTagName('ol');
				var aUl_li=oUl.getElementsByTagName('li');
				var iNum1=0;
				var oZk=getbyclass.getByClass(oVideoBoxList,'zk')[0];
					for(var i=0;i<aUl_li.length;i++){
						(function(num){
								addevent.addEvent(aUl_li[i],'mouseover',function(){
										iNum1=num;
										smtab1();
								});	
								
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
				
				var timer1=null;
				timer1=setInterval(function(){
					iNum1++;
					if(iNum1==aUl_li.length){
						iNum1=0;	
					};	
					smtab1();
				},1000);	
				addevent.addEvent(oVideoBoxList,'mouseover',function(){
						clearInterval(timer1);	
				});
				addevent.addEvent(oVideoBoxList,'mouseout',function(){
						clearInterval(timer1);
						timer1=setInterval(function(){
							iNum1++;
							if(iNum1==aUl_li.length){
								iNum1=0;	
							};	
							smtab1();
						},1000);	
				});	
				addevent.addEvent(oZk,'click',function(){
					if(oZk.innerHTML=='-'){
						clearInterval(timer1);
						timer1=setInterval(function(){
							iNum1++;
							if(iNum1==aUl_li.length){
								iNum1=0;	
							};	
							smtab1();
						},1000);
					}
					else{
						clearInterval(timer1);
					}
				});
				
				
			};
			tab1('video_list1');
			tab1('video_list2');
			tab1('video_list3');
			tab1('video_list4');
			function  tab2(videoBoxListId){
				var oVideoBoxList=document.getElementById(videoBoxListId);
				var oUl=oVideoBoxList.getElementsByTagName('ul')[0];
				var aOl=oVideoBoxList.getElementsByTagName('ol');
				var aUl_li=oUl.getElementsByTagName('li');
				var iNum1=0;
					for(var i=0;i<aUl_li.length;i++){
						(function(num){
								addevent.addEvent(aUl_li[i],'mouseover',function(){
										iNum1=num;
										smtab1();
								});	
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
			function Zk(videoBoxListId){
				var oVideoBoxList=document.getElementById(videoBoxListId);
				var oBox=getbyclass.getByClass(oVideoBoxList,'video_list_cont')[0];
				var oZk=getbyclass.getByClass(oVideoBoxList,'zk')[0];
				var oOldHeight=oBox.offsetHeight;
				var speed=0;
					(function(num){
						addevent.addEvent(oZk,'click',function(){
							if(oZk.innerHTML=='-'){
								oZk.innerHTML='+';
								move.startMove(oBox,{height:0},{time:1000});
							}
							else{
								oZk.innerHTML='-';
								move.startMove(oBox,{height:oOldHeight},{time:1000});
							};
						});
					})();
			};
			Zk('video_list1');
			Zk('video_list2');
			Zk('video_list3');
			Zk('video_list4');
			Zk('video_list5');
			function smlist_hd(VideosmListId){
					var oVideosmList=document.getElementById(VideosmListId);
					var aVideotext=getbyclass.getByClass(oVideosmList,'videotext');
					var aList=getbyclass.getByClass(oVideosmList,'active2');
					var aLi=oVideosmList.getElementsByTagName('li');
					for(var i=0;i<aLi.length;i++){
						(function(num){
							addevent.addEvent(aLi[i],'mouseover',function(){
								for(var i=0;i<aLi.length;i++){
									aVideotext[i].style.display='none';
									aList[i].style.display='block';
								};
										aVideotext[num].style.display='block';
										aList[num].style.display='none';
							});
						})(i);
					};
			};
			smlist_hd('video_hd1');
			smlist_hd('video_hd2');
			smlist_hd('video_hd3');
			smlist_hd('video_hd4');
			scrollbar.scrollBar('main_l_cont','scrollbox')
		
		};

});



















































































