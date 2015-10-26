
function submit(){
	$.ajax({
			url: 'http://api.joshsimmons.rocks/freefall/maillist',
		type: 'POST',
		data: {email:$("#email").text()},
		success: function(res){
			console.log(res);
		}
	});
}
