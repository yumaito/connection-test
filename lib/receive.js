//接続先URL
var url = "ws://localhost:8080/subscribe";
//websocketオブジェクト
var websocket = null;
//初期処理
function init(){
	//ボタン押下イベント設定
	//$("[data-name='message']").keypress(press);
	//接続
	open();
}
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
//接続イベント
function onOpen(event){
	chat("接続しました！");
}
//メッセージ受信イベント
function onMessage(event){
	if(event && event.data){
		var msg = event.data;//JSON.parse(event.data);
		chat("received:" + msg);
	}
}
//エラーイベント
function onError(event){
	chat("エラー発生しました")
}
//切断イベント
function onClose(event){
	chat("切断しました。3秒後に再接続します。("+event.code+")");
	websocket = null;
	setTimeout("open()",3000);
}

//キー押下時
/*function press(event){
	//キーがenterか判定
	if(event && event.which == 13){
		//メッセージ取得
		var message = $("[data-name='message']").val();
		//存在チェック
		if(message && websocket){
			websocket.send(""+message);
			//メッセージ初期化
			$("[data-name='message']").val();	
		}
	}
}*/
//チャットに表示
function chat(message){
	//100件まで残す
	var chats = $("[data-name='chat']").find("div");
	while(chats.length >= 100){
		chats = chats.last().remove();
	}
	//メッセージ表示
	var msgtag = $("<div>").text(message);
	$("[data-name='chat']").prepend(msgtag);		
}
//初期化処理登録
$(init);