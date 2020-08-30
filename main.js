$(document).ready(function() {
	$.ajax(
		{
			url: "https://flynn.boolean.careers/exercises/api/array/music",
			method: "GET",
			success: function (risultato) {
				$("#risultati").html(risultato);
				console.log(risultato.response); 
				var source = $("#entry-template").html();
				console.log(source);
				var template = Handlebars.compile(source);
				console.log(template);

				for(var i = 0; i < risultato.response.length; i++ ){
					var a = risultato.response[i];

					var html = template(a);
					console.log(html);
					$('.cds-container').append(html);
				}

			},
			error: function (richiesta, stato, errori) {
				alert("E' avvenuto un errore. " + errore);
			}
		}
	);
});