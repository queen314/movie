// JavaScript Document
function isExists(obj){
		var name=$(obj).val();
		var txtname=$("#txtName").val();
		var res="0";
		//��֤�û����Ƿ����
		$.ajax({
			type:"post",
			url:"Handler4.ashx",
			data:"act=vality&username="+name,
			beforeSend:function(){$("#div1").text("������֤...");},
			success:function(res){
				if(res=="1"){
					$("#div1").text("�Ѵ���").css({"color":"red","font-weight":"600"});
				}
				if(res=="2"){
					$("#div1").text("ͨ��").css({"color":"green","font-weight":"600"});
				}
				if(res=="3"){
					$("#div1").text("������...").css({"color":"orange","font-weight":"600"});
				}
			},
			error:function(){ $("#div1").text("��֤����").css("color":"red");}
		});
	}
	
	//ע��
	function btnReg(){
		var uname=$("#txtName").val();
		var upwd=$("#txtPwd").val();
		if($("#div1").text()!="ͨ��"){
			alert("����д��ȷ��Ϣ");
			return false;
		}
		$.ajax({
			type:"post",
			data:"act=reg&uname="+uname+"&upwd="+upwd,
			url:"Handler4.ashx",
			beforeSend:function(){
				$("#regmsg").text("�����ύ..");
			},
			success:function(reg){
				if(reg==1){
					alert("ע��ɹ���");
					$("#regmsg").text("");
				}
				else{
					alert("ע��ʧ�ܣ�");
				}
			},
			error:function(){ alert("ע�����");}
		});
	}
	
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