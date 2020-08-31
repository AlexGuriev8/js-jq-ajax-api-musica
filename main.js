$(document).ready(function() {
	$.ajax(
		{
			url: "https://flynn.boolean.careers/exercises/api/array/music",
			method: "GET",
			success: function (risultato) {
			 insertCD(risultato);

			},
			error: function () {
				alert("E' avvenuto un errore. " + errore);
			}
		}
	);
	$('#scelta option').click(function(){
		var genere = $(this).html();
		console.log(genere);
		//nascondere tutti gli elementi
		//visualizzare gli elementi con la classe uguale alla option selezionata 
		if(genere == 'All'){
			$('.cd').show();
		}else{
			$('.cd').hide();
		$('.cd.' + genere).show();
		}
	});
});


function insertCD (data){
	var source = $("#entry-template").html();
	var template = Handlebars.compile(source);

	for (var i = 0; i < data.response.length; i++) {
		var a = data.response[i];
		var html = template(a);
		$('.cds-container').append(html);
	}
}