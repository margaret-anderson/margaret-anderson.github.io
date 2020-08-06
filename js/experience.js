$(function(){
	$('#h_det').on('click', function(e){
	e.preventDefault();
	$('#harvard_details').toggleClass('hide')
	});

	$('#c_det').on('click', function(e){
	e.preventDefault();
	$('#caltech_details').toggleClass('hide')
	});
});