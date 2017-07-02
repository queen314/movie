// JavaScript Document

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