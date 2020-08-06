$(function(){
	$('#h_det').on('click', function(e){
	e.preventDefault();
	$('#harvard_details').toggleClass('hide');
	if ($('#harvard_details').hasClass('hide') && $('#caltech_details').hasClass('hide')) 
		$('#experience').addClass('up');
	else
		$('#experience').removeClass('up')
	});

	$('#c_det').on('click', function(e){
	e.preventDefault();
	$('#caltech_details').toggleClass('hide');
	if ($('#harvard_details').hasClass('hide') && $('#caltech_details').hasClass('hide')) 
		$('#experience').addClass('up');
	else
		$('#experience').removeClass('up')
	});

	
	
});