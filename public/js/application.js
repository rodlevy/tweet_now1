$(document).ready(function() {
	$("a#login-hook").on('click', function(event){
		event.preventDefault();
		var url = $(this).attr('href');
		console.log(url);
		$.get(url, function(url_response){
			console.log(url_response);
			$('.container').hide();
			$('#login-hook').closest('div').append(url_response);
		});

	});
	
	$('#nav').on('submit','#login-layout', function(event){
		event.preventDefault();
		var data = $(this).serialize();	
		var url = $(this).attr('action');
		console.log(data);
		$.post(url, data, function(body){
			var new_nav = $(body).find('#nav').html();
			console.log(new_nav)
			$('#login-layout').hide();
			$('#nav').html(new_nav);
			$('.container').show();
		});
	});
	// $('#create-hook').on('click', function(event){
	// 	event.preventDefault();
	// 	var url = $(this).attr('href');
	// 	$.get(url, function(url_body){
	// 		var form = $(url_body).find('#regular-create').html();
	// 		$('#create-hook').closest('div').append(form);
	// 	});
	// });
});



 // 1. ready
 // 2. bind event
 // 3. identify url and any vars you are going to pass
 // 4. get/post
