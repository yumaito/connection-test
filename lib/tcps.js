var net = require('net');
var HOST = '127.0.0.1';
var PORT = 3000;
//サーバーインスタンスを生成し、リッスンします
//net.createServer()に渡す関数は、'connection'イベントハンドラーになります
//コールバック関数が受け取るsocketオブジェクトは各接続ごとにユニークなものとなります
net.createServer(function(sock){
	//TCPサーバーが接続しました。socketオブジェクトが自動的に割当てられます
	console.log('CONNECTED:' + sock.remoteAddress + ':'+sock.remotePort);
	//'data'イベントハンドラー
	sock.on('data',function(data){
		console.log('DATA:'+data);
		//ソケットに応答を書き込みます。クライアントはその書き込みを受信します
		sock.write('RECEIVED');
	});
	//'clone'イベントハンドラー
	sock.on('close',function(had_error){
		console.log('CLOSED.Had Error:'+had_error);
	});
	//'error'イベントハンドラー
	sock.on('error',function(err){
		console.log('ERROR:'+err.stack);
	});
}).listen(PORT,HOST);
console.log('Server listening on'+HOST+':'+PORT);