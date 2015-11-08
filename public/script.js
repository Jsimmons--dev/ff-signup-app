function submit(){
	var form = document.getElementById("subForm");
	var thank = document.getElementById("thank");
	$.ajax({
		url: 'http://api.joshsimmons.rocks/freefall/maillist',
		type: 'POST',
		data: {
			email: $("#email").val() 
		},
		success: function(res){
				form.style.display = "none"
				thank.style.display = "block"
				setTimeout(function(){
				form.style.display = "block";
				thank.style.display = "none";
				$("#email").val("");
				},5000);
		},
		error: function(XMLHttpRequest,textStatus,errorThrown){
			console.log(textStatus);
		}
	});
}
