// JavaScript Document
$(function(){
		showXgtList();
	});
	
	function showXgtList(num){
		num=num?num:1;
		$.ajax({
			url:'/Json/GetSearchContent.asp?DisplyObj=field',
			type:'GET',
			data:{
                          page:num,
                          rows:4,
                          Column:'34527',
                         },
			success:function(data){
				if(data.code===200){
					var html=$.sfTemplate('xgttpl',data);
					$('.shouc-ul').html(html);
					showPages('pages',data.total,4,num,'showXgtList');
                                         $('.acvC_list .zt-a').each(function(){
                                          if($(this).text()=='报名中'){
                                             $(this).parent().addClass('a');
                                         }
                                           if($(this).text()=='进行中'){
                                             $(this).parent().addClass('b');
                                         }
                                           if($(this).text()=='已结束'){
                                             $(this).parent().addClass('c');
                                         }   

                                             })
				}else{
					$(".shouc-ul").html('<table border="0" width="100%" cellspacing="5" style="line-height:100%;color:#333;"><tbody><tr><td align="center" height="300">暂无相关内容！</td></tr></tbody></table>');
				}
			}
		});
	}
function showPages(domId,total,rows,currentPage,fun){
		var dom = document.getElementById(domId);
		var pages=Math.ceil(total/rows),
				first=1,
				prev=currentPage<=1?1:(currentPage-1),
				next=currentPage==pages?currentPage:(currentPage+1),
				last=pages;
		var html='',pageLen=pages>7?7:pages;
		html+='<a class="first" href="javascript:'+fun+'('+first+')" style="display:none">首页</a>';
		html+='<a class="prev" href="javascript:'+fun+'('+prev+')"><img src="images/ff1895/i05_21.png"/></a>';
		var sum=pages>3?3:pages,
				start=1;
		if(currentPage<=1){
			start=currentPage;
		}else if(currentPage>=pages && (currentPage-2)>=1){
			start=currentPage-2;
		}else{
			start=currentPage-1;
		}
		for(var i=0,start;i<sum;i++,start++){
			if(start==currentPage){
				html+='<span class="current">'+start+'</span>';
			}else{
				html+='<a href="javascript:'+fun+'('+start+')" class="a">'+start+'</a>';
			}
		}
		html+='<a class="next" href="javascript:'+fun+'('+next+')" ><img src="images/ff1895/i06_23.png"/></a>';
		html+='<a class="last" href="javascript:'+fun+'('+last+')" style="display:none">尾页</a>';
		dom.innerHTML=html;
	}
	
	
	
	
$(function(){
   $('.act_tit .quanbu').click(function(){
     showXgtList();
 
  })
//获取一周内时间
    function GetDateStr(AddDayCount) { 
	var dd = new Date(); 
	dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
	var y = dd.getFullYear(); 
	var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
	var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate(); //获取当前几号，不足10补0
	return y+"/"+m+"/"+d; 
}
   $('.act_tit .zjyz').click(function(){      
         showXgtList1();
         function showXgtList1(num){
                var d = new Date();
                var dq = d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();
                var qt=GetDateStr(7);
		num=num?num:1;
		$.ajax({
			url:'/Json/GetSearchContent.asp?DisplyObj=field&date1='+dq+'&date2='+qt,
			type:'GET',
			data:{
					  page:num,
					  rows:4,
					  Column:'34527',
				 },
			success:function(data){
				if(data.code===200){
					var html=$.sfTemplate('xgttpl',data);
					$('.shouc-ul').html(html);
					showPages('pages',data.total,4,num,'showXgtList');
                                         $('.acvC_list .zt-a').each(function(){
                                          if($(this).text()=='报名中'){
                                             $(this).parent().addClass('a');
                                         }
                                           if($(this).text()=='进行中'){
                                             $(this).parent().addClass('b');
                                         }
                                           if($(this).text()=='已结束'){
                                             $(this).parent().addClass('c');
                                         }   
                                             })
				}else{
					$(".shouc-ul").html('<table border="0" width="100%" cellspacing="5" style="line-height:100%;color:#333;"><tbody><tr><td align="center" height="300">暂无相关内容！</td></tr></tbody></table>');
                                       $('#pages').hide();
				}
			}
		});
	}
  })
  })