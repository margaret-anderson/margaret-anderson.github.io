$(function(){
	$('#h_det').on('click', function(e){
	e.preventDefault();
	$('#harvard_details').toggleClass('hide');
	if ($('#harvard_details').hasClass('hide') && $('#caltech_details').hasClass('hide')) 
		$('#experience').addClass('up');
	else
		$('#experience').removeClass('up');
	});

	$('#c_det').on('click', function(e){
	e.preventDefault();
	$('#caltech_details').toggleClass('hide');
	if ($('#harvard_details').hasClass('hide') && $('#caltech_details').hasClass('hide')) 
		$('#experience').addClass('up');
	else
		$('#experience').removeClass('up');
	});

	$('#work1, #work2, #work3, #work4, #work5, #work6, #work7, #work8').on('click', function(e){
		e.preventDefault();
		$('#slide1, #slide2, #slide3, #slide4, #slide5, #slide6, #slide7, #slide8').hide();
		$('#work1, #work2, #work3, #work4, #work5, #work6, #work7, #work8').removeClass('active_slide');
		$(e.target).addClass('active_slide');
		var link_name = $(e.target).attr('id');
		switch (link_name){
			case 'work1':
				$('#slide1').slideToggle(500);
				break;
			case 'work2':
				$('#slide2').slideToggle(500);
				break;
			case 'work3':
				$('#slide3').slideToggle(500);
				break;
			case 'work4':
				$('#slide4').slideToggle(500);
				break;
			case 'work5':
				$('#slide5').slideToggle(500);
				break;
			case 'work6':
				$('#slide6').slideToggle(500);
				break;
			case 'work7':
				$('#slide7').slideToggle(500);
				break;
			case 'work8':
				$('#slide8').slideToggle(500);
				break;
		}
		
		});

	
	
});