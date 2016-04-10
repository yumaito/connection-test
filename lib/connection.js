//websocketオブジェクト
var websocket = null;

//接続イベント
function onOpen(event){
	log("接続しました！");
}

//エラーイベント
function onError(event){
	log("エラーが発生しました")
}
//切断イベント
function onClose(event){
	chat("切断しました。3秒後に再接続します。("+event.code+")");
	websocket = null;
	setTimeout("open()",3000);
}
//ログに表示
function log(message){
	//100件まで残す
	var chats = $("[data-name='chat']").find("div");
	while(chats.length >= 100){
		chats = chats.last().remove();
	}
	//メッセージ表示
	var msgtag = $("<div>").text(message);
	$("[data-name='chat']").prepend(msgtag);		
}