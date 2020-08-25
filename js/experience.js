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

	$('#work1, #work2, #work3, #work4, #work5, #work6, #work7, #work8, #work9, #work10, #work11').on('click', function(e){
		e.preventDefault();
		$('#slide1, #slide2, #slide3, #slide4, #slide5, #slide6, #slide7, #slide8, #slide9, #slide10, #slide11').hide();
		$('#work1, #work2, #work3, #work4, #work5, #work6, #work7, #work8, #work9, #work10, #work11').removeClass('active_slide');
		$(e.target).addClass('active_slide');
		var link_name = $(e.target).attr('id');
		switch (link_name){
			case 'work1':
				$('#slide1').show();
				break;
			case 'work2':
				$('#slide2').show();
				break;
			case 'work3':
				$('#slide3').show();
				break;
			case 'work4':
				$('#slide4').show();
				break;
			case 'work5':
				$('#slide5').show();
				break;
			case 'work6':
				$('#slide6').show();
				break;
			case 'work7':
				$('#slide7').show();
				break;
			case 'work8':
				$('#slide8').show();
				break;
			case 'work9':
				$('#slide9').show();
				break;
			case 'work10':
				$('#slide10').show();
				break;
			case 'work11':
				$('#slide11').show();
				break;
		}
		
		});

	
	
});