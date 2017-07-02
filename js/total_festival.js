// JavaScript Document
$(function(){
            $('.mt_top a:last').css({'border-right':'none'});
            $('.mt_top a:eq(0)').hover(function () {
                $(this).css({'background-color': '#fff','color':'#000'}).text('类型∧');
                $('.mt_top a:eq(1)').css({'background': 'transparent','color':'#000'});
                $('.mt_top a:eq(2)').css({'background': 'transparent','color':'#000'});
                $('.mt_bot .mtBot_div:eq(0)').show();
                $('.mt_bot .mtBot_div:eq(1)').hide();
                $('.mt_bot .mtBot_div:eq(2)').hide();
            },function(){
                $(this).text('类型∨')
         });
            $('.mt_top a:eq(1)').hover(function () {
                $(this).css({'background': '#fff','color':'#000'}).text('地域∧');
                $('.mt_top a:eq(0)').css({'background': 'transparent','color':'#000'});
                $('.mt_top a:eq(2)').css({'background': 'transparent','color':'#000'});
                $('.mt_bot .mtBot_div:eq(0)').hide();
                $('.mt_bot .mtBot_div:eq(1)').show();
                $('.mt_bot .mtBot_div:eq(2)').hide();
            },function(){
                $(this).text('地域∨');
         });
            $('.mt_top a:eq(2)').hover(function () {
                $(this).css({'background': '#fff','color':'#000'}).text('时间∧');
                $('.mt_top a:eq(1)').css({'background': 'transparent','color':'#000'});
                $('.mt_top a:eq(0)').css({'background': 'transparent','color':'#000'});
                $('.mt_bot .mtBot_div:eq(0)').hide();
                $('.mt_bot .mtBot_div:eq(1)').hide();
                $('.mt_bot .mtBot_div:eq(2)').show();
            },function(){
                $(this).text('时间∨');
        });
            

        });


var key={field10:'',field11:'',field12:'',keyword:''};

	$(function(){
		getField('.jiaAAA','field10','fieldtpl');
		getField('.jiaAAA','field11','fieldtpl');
		getField('.jiaAAA','field12','fieldtpl');
		initSearch(['field10','field11','field12']);
		showXgtList();
	});
	function initSearch(arr){
		for(var i=0,len=arr.length,val='';i<len;i++){
			val=GG.getUrlParam(arr[i]);
			if(val){
				key[arr[i]]=val;
				$('.screenList a:contains("'+val+'")').addClass('act');
			}
		}
	}
	function showXgtList(num){
		num=num?num:1;
		var parem={}
		$.extend(parem,key,{
			Column:GG.getUrlParam('Column_ID'),
			page:num,
			rows:'9',
			DisplyObj:'field'
		});
		$.ajax({
			url:'/Json/GetSearchContent.asp',
			type:'GET',
			data:parem,
			success:function(data){
				if(data.code===200){                                        
                                        for(var i=0;i<data.rows.length;i++){
                                            data.rows[i].OVF_Field1=data.rows[i].OVF_Field1.split(',');
                                           }
					var html=$.sfTemplate('xgttpl',data);
					$('.lianCont01_uiAAA').html(html);
					showPages('pages',data.total,9,num,'showXgtList');   
                                       $('.main .w .main_cont .main_ui li > div.img a img:eq(0)').css({'width':'534px','height':'313px'});
                                       $('.main .w .main_cont .main_ui li > div.img a img:eq(4)').css({'width':'534px','height':'313px'});
                                       $('.main .w .main_cont .main_ui li > div.img a img:eq(8)').css({'width':'534px','height':'313px'});
                                       $('.main_ui li:eq(0)').css({'width':'534px'});
                                       $('.main_ui li:eq(4)').css({'width':'534px'});
                                       $('.main_ui li:eq(8)').css({'width':'534px'});  
            
				}else{
					$(".lianCont01_uiAAA").html('<table border="0" width="100%" cellspacing="5" style="line-height:100%;color:#333;"><tbody><tr><td align="center" height="300">暂无相关内容！</td></tr></tbody></table>');
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
	function getField(dom,field,tpl){
		$.ajax({
			url:"/Json/GetBasicField.asp",
			type:"GET",
			async:false,
			data:{
				action:'GetShow',
				ObjType:'isContent',
				ObjField:field
			},success:function (data) {
				if(data.code === 200) {
					data['length']=data.value.length;
					var html=$.sfTemplate(tpl, data);
					var dqdom=$(dom).append(html),dqli=dqdom.find('.screenList').last();
					dqli.find('a.xgt_nav_showMore').click(function(){
						$(this).toggleClass('showMore_down');
						$(this).parents('.screenList').toggleClass('height_36');
					});
                                        dqli.find('a.all').click(function(){
			                  key[field]='';
          		                   $(this).addClass('act').siblings().removeClass('act');
				           showXgtList();
                                           })
    
					dqli.find('a.item_n').click(function(){
                                                $(this).parent('dd').children('a.all').removeClass('act');
						var actflag=$(this).attr('class').match('act');
						if(actflag){
							$(this).removeClass('act');
						}else{
							$(this).addClass('act');
						}
						var vals='';
						$(this).parent().find('.act').each(function(i,n){
							if(i===0){
								vals=$(this).text();
							}else{
								vals+=','+$(this).text();
							}

						});
						console.log(vals);
						key[field]=vals;
						showXgtList();
					});
				}
			}
		});
	}