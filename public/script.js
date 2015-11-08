function submit(){
	$.ajax({
		url: 'http://api.joshsimmons.rocks/freefall/maillist',
		type: 'POST',
		data: {
			email: $("#email").val() 
		},
		success: function(res){
		},
		error: function(XMLHttpRequest,textStatus,errorThrown){
			console.log(textStatus);
		}
	});
}
