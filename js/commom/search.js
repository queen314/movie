// JavaScript Document
$(document).ready(function search(){
	$("#isearch").click(function(){
		$("#header").hide();
		$(".sch img,.sch .sch_k").show();
		$("#search").css({"border-bottom":"1px solid #000","position":"fixed","background":"#f4f4f2","width":"100%","z-index":"9","min-width":"1300px"});
	})
	$("#close").click(function(){
		$(".sch img,.sch .sch_k").hide();
		$("#header").show();
	})
	})