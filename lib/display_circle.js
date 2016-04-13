function priceFormat(){
	//var result = ('000000000'+currentPrice).slice(-8);
	var result = currentPrice.toLocaleString();
	return '¥'+result + "-";
}
function dispPrice(){
	$('#footer p').text(priceFormat());
}

function dispImg(x,y,deg){
	var img ='<img src = "img/sale.png" name = "circle" style = "position:absolute;';
	img+= 'left:' + x + 'px;top:'+ y + 'px;';
	img += rotate(deg);
	img += '"">';
	$("#display").append(img)
	//append後にappendした要素をセレクト
	var circles = $('[name=circle]');
	var last = circles[circles.length-1];
	//
	var fadeSpeed = 1500;
	//fadeSpeedミリ秒でフェードアウト、完了後にremove
	$(last).stop().animate(
		{
			opacity: 'hide',
			//top: "-=20px"
		},
		fadeSpeed,
		function(){
			$(this).remove();
		});
	//document.circle.style.left = x + "px";
	//document.circle.style.top = y + "px";
}
//回転のcssの文字列を返す関数
function rotate(deg){
	var result = "transform:rotate(" + deg + "deg);";
	result += "-ms-transform:rotate(" + deg + "deg);";
	result += "-moz-transform:rotate(" + deg + "deg);";
	result += "-o-transform:rotate(" + deg + "deg);";
	//
	return result;
}
//window.document.onclick = moveImg;