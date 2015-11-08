
function submit(){
	$.ajax({
			url: 'http://api.joshsimmons.rocks/freefall/maillist',
		type: 'POST',
		dataType: 'json',
		data: {
			"email": $("#email").val()
		},
		success: function(res){
		},
		error: function(XMLHttpRequest,textStatus,errorThrown){
			console.log(textStatus);
		}
	});
}
