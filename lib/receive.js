//接続先URL
var url = "ws://localhost:8080/subscribe";
//接続
function open(){
	if(websocket == null){
		//websocketの初期化
		websocket = new WebSocket(url);
		//イベントハンドラの設定
		websocket.onopen = onOpen;
		websocket.onmessage = onMessage;
		websocket.onclose = onClose;
		websocket.onerror = onError;
	}
}
//メッセージ受信イベント
function onMessage(event){
	if(event && event.data){
		//log(event.data);
		//
		var msg = JSON.parse(event.data);
		//displayの横幅と縦幅を取得
		//座標と回転角がランダム
		var w = $("#display").width();
		var h = $("#display").height();
		var x = Math.floor(Math.random()*(w-109));
		var y = Math.floor(Math.random()*(h-109));
		//
		var r = Math.floor(Math.random()*360);
		//
		dispImg(x,y,r);
	}
}
//初期処理
function init(){
	//ボタン押下イベント設定
	//$("[data-name='message']").keypress(press);
	//接続
	open();
}
$(init);