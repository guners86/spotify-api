$(document).ready(function() {	
	$('#query').on('keyup', function(e) {
		if (e.which === 13) {
			searchAlbums($("#query").val());
			$('#query').val("");
		}
	});	
	
	var searchAlbums = function (query) {
		$.ajax({
			url: 'https://api.spotify.com/v1/search',
			data: {
				q: query,
				type: 'track'
			},
			success: function (response) {
				console.log(response.tracks);
				var template = Handlebars.compile($('#results-template').html());
				$('#results').html(template({ tracks: response.tracks }));
			},
			error : function(xhr, status) {
				alert('Disculpe, existió un problema');
			}
		});
	};
});