//接続先URL
var url = "ws://localhost:8080/publish";
//websocketオブジェクト
var websocket = null;
//初期処理
function init(){
	//ボタン押下イベント設定
	$("[data-name='message']").keypress(press);
	//接続
	open();
}
//接続
function open(){
	//websocketの初期化
	websocket = new Wenbsocket(url);
}