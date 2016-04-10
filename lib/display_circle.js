function dispImg(x,y){
	var img ='<img src = "img/circle.png" name = "circle" style = "position:absolute;';
	img+= 'left:' + x + 'px;top:'+ y + 'px"';
	img += '>';
	$("#display").append(img)
	//append後にappendした要素をセレクト、フェードアウトをかける
	var circles = $('[name=circle]');
	var last = circles[circles.length-1];
	//
	var fadeSpeed = 2000;
	//fadeSpeedミリ秒でフェードアウト、完了後にremove
	$(last).stop().animate(
		{
			opacity: 'hide'
		},
		fadeSpeed,
		function(){
			$(this).remove();
		});
	//document.circle.style.left = x + "px";
	//document.circle.style.top = y + "px";
}
//window.document.onclick = moveImg;