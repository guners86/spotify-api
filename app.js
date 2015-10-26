$(document).ready(function() {	
	$("#search-text").on('focus', function(e) {
		e.preventDefault(); 
		$(this).keydown( function(event) {
			if (event.which === 13) {				
				searchAlbums($("#search-text").val());
			}
		});		
	});
	
	
	var searchAlbums = function (query) {
		alert(query);
		$.ajax({
			url: 'https://api.spotify.com/v1/search',
			data: {
				q: query,
				type: 'track'
			},
			success: function (response) {
				alert(response);
				console.log(response);
			},
			error : function(xhr, status) {
				alert('Disculpe, existió un problema');
			}
		});
	};
});