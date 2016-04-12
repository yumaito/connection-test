/*$('#buy').click(function(event) {
	sendmsg(event);
});
*/
$('#connect').click(function(event) {
	/* Act on the event */
	var ip = $('#ip').val();
	open(ip);
	$(this).prop("disabled",true);
});