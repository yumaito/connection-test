function dispImg(x,y){
	var img ='<img src = "img/circle.png" name = "circle[]" style = "position:absolute;left:' + x + 'px;top:'+ y + 'px">';
	$("#display").append(img)
	//document.circle.style.left = x + "px";
	//document.circle.style.top = y + "px";
}
//window.document.onclick = moveImg;