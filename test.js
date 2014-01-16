$( document ).ready( function(){
	$.ajax({
		url: 'fail.php',
		dataType: 'json',
		success: function(data, textStatus, jqXHR){
			console.log(data);
			console.log(textStatus);
			console.log(jqXHR);
			console.log(jqXHR.responseText);
		},
		error: function(jqXHR, textStatus, errorThrown){
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
			console.log(jqXHR.responseText);
		}
	});
})
