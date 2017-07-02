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
                          rows:5,
                          Column:'34524',
                         },
			success:function(data){
				if(data.code===200){

					var html=$.sfTemplate('xgttpl',data);
					$('.shouc-ul').html(html);
					showPages('pages',data.total,3,num,'showXgtList');

                    
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
		html+='<a class="prev" href="javascript:'+fun+'('+prev+')"><img src="images/commom/search_img/i05_21.png"/></a>';
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
		html+='<a class="next" href="javascript:'+fun+'('+next+')" ><img src="images/commom/search_img/i06_23.png"/></a>';
		html+='<a class="last" href="javascript:'+fun+'('+last+')" style="display:none">尾页</a>';
		dom.innerHTML=html;
	}