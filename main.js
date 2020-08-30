$(document).ready(function() {
	$.ajax(
		{
			url: "https://flynn.boolean.careers/exercises/api/array/music",
			method: "GET",
			success: function (risultato) {
				var source = $("#entry-template").html();
				var template = Handlebars.compile(source);

				for(var i = 0; i < risultato.response.length; i++ ){
					var a = risultato.response[i];
					var html = template(a);
					$('.cds-container').append(html);
				}

			},
			error: function () {
				alert("E' avvenuto un errore. " + errore);
			}
		}
	);
});