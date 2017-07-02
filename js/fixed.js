window.onscroll=function(){

//变量t就是滚动条滚动时，到顶部的距离
var t =document.documentElement.scrollTop||document.body.scrollTop;

var left =document.getElementById("type");
	if( t >=100) {     //当拖动到距离顶部100px处时，左边导航固定，不随滚动条滚动

     left.style.position="fixed";
	 left.style.width="100%";
     left.style.top="68";
	 left.style.bottom="600";
	 left.style.zIndex="99";

}else{

        //恢复正常        
		
	}
}