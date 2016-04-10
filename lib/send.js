//接続
function open(ip){
	if(websocket == null){
		//websocketの初期化
		var url = "ws://"+ip+":8080/publish";
		websocket = new WebSocket(url);
		//イベントハンドラの設定
		websocket.onopen = onOpen;
		websocket.onmessage = onMessage;
		websocket.onclose = onClose;
		websocket.onerror = onError;
	}
}
function sendmsg(event){
	var x = Math.floor(Math.random()*301);
	var y = Math.floor(Math.random()*301);
	var message = JSON.stringify({x:x,y:y});
	if(message && websocket){
		websocket.send("" + message);
		log("send: " + "" + message);
	}
}
//メッセージ受信イベント
function onMessage(event){
	if(event && event.data){
		var msg = JSON.parse(event.data);
		log(msg);
	}
}