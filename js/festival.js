// JavaScript Document
$('#zfabu').click(function(){
   addTopic(getUrlParam(location.href,"C_ID"),'isContent')
   })

 
  /** 
  * 获取指定URL的参数值 
  * @param url  指定的URL地址 
  * @param name 参数名称 
  * @return 参数值 
  */  
 function getUrlParam(url,name){  
     var pattern = new RegExp("[?&]"+name+"\=([^&]+)", "g");  
     var matcher = pattern.exec(url);  
     var items = null;  
     if(null != matcher){  
             try{  
                    items = decodeURIComponent(decodeURIComponent(matcher[1]));  
             }catch(e){  
                     try{  
                             items = decodeURIComponent(matcher[1]);  
                     }catch(e){  
                             items = matcher[1];  
                     }  
             }  
     }  
     return items;  
}  
   var c_id=(getUrlParam(location.href,"C_ID")),
       column_ID=(getUrlParam(location.href,"Column_ID"));

       $(function(){
                  $.ajax({
			url:'/Json/GetSearchContent.asp?action=GetShow&Column_ID='+column_ID+'&C_ID='+c_id+'&DisplyObj=field',
			type:'GET',			
			success:function(data){
				if(data.code===200){                                        
                                            field2=data.OVF_Field2.split('-');
                                            $('.dTime .dT02 .p-01').text(field2[0]);
                                            $('.dTime .dT02 .p-02').text(field2[1]);
                                           field17=data.OVF_Field17.split('-');
                                            $('.dTime .dT01 .p-01').text(field17[0]);
                                            $('.dTime .dT01 .p-02').text(field17[1]);
                                           field1=data.OVF_Field1.split(',');
                                          for(var i=0;i<field1.length;i++){
                                           $('.dRight .dLabel').append('<p><span>'+field1[i]+'</span></p>')
                                          }
					 field23=data.OVF_Field23.split(',');
                                          for(var i=0;i<field23.length;i++){
                                           $('.x_l .x_lt').append('<a>'+field23[i]+'</a>')
                                          }

				}else{
					
				}
			}
		});
  })
