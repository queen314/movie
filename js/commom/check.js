// JavaScript Document

function emailCheck(obj, labelName) {  
		var objName = eval("document.all."+obj);  
		var pattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;  
		if (!pattern.test(objName.value)) {  
			alert("��������ȷ�������ַ");  
			objName.focus();  
			return false;  
		}  
		return true;  
	}  
function check(){
		if(document.getElementById('txtPwd').value==""){
			alert('���벻��Ϊ��');
			return false;
		}
		if(document.getElementById('txtPwd').value.length < 6){
			alert('���볤������Ϊ6λ������������');
			return false;
		}
	}
	
function check_2(){
	if(document.getElementById('txtPwd_2').value!=document.getElementById('txtPwd').value){
		alert('�����������벻һ�£�');
		return false;
	}
}