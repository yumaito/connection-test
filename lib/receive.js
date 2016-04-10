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
//初期処理
function init(){
	//ボタン押下イベント設定
	//$("[data-name='message']").keypress(press);
	//接続
	open();
}
$(init);