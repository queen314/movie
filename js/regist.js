// JavaScript Document
function isExists(obj){
		var name=$(obj).val();
		var txtname=$("#txtName").val();
		var res="0";
		//验证用户名是否存在
		$.ajax({
			type:"post",
			url:"Handler4.ashx",
			data:"act=vality&username="+name,
			beforeSend:function(){$("#div1").text("正在验证...");},
			success:function(res){
				if(res=="1"){
					$("#div1").text("已存在").css({"color":"red","font-weight":"600"});
				}
				if(res=="2"){
					$("#div1").text("通过").css({"color":"green","font-weight":"600"});
				}
				if(res=="3"){
					$("#div1").text("请输入...").css({"color":"orange","font-weight":"600"});
				}
			},
			error:function(){ $("#div1").text("验证出错").css("color":"red");}
		});
	}
	
	//注册
	function btnReg(){
		var uname=$("#txtName").val();
		var upwd=$("#txtPwd").val();
		if($("#div1").text()!="通过"){
			alert("请填写正确信息");
			return false;
		}
		$.ajax({
			type:"post",
			data:"act=reg&uname="+uname+"&upwd="+upwd,
			url:"Handler4.ashx",
			beforeSend:function(){
				$("#regmsg").text("正在提交..");
			},
			success:function(reg){
				if(reg==1){
					alert("注册成功！");
					$("#regmsg").text("");
				}
				else{
					alert("注册失败！");
				}
			},
			error:function(){ alert("注册出错！");}
		});
	}
	
	function emailCheck(obj, labelName) {  
		var objName = eval("document.all."+obj);  
		var pattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;  
		if (!pattern.test(objName.value)) {  
			alert("请输入正确的邮箱地址");  
			objName.focus();  
			return false;  
		}  
		return true;  
	}  

	function check(){
		if(document.getElementById('txtPwd').value==""){
			alert('密码不能为空');
			return false;
		}
		if(document.getElementById('txtPwd').value.length < 6){
			alert('密码长度至少为6位，请重新输入');
			return false;
		}
	}
	
	function check_2(){
		if(document.getElementById('txtPwd_2').value!=document.getElementById('txtPwd').value){
			alert('两次输入密码不一致！');
			return false;
		}
	}