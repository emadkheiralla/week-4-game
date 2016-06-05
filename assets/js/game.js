$(document).ready(function () {

	var isFirstChosen = false;
	var isSecondChosen = false;
	var firstChosen;
	var secondChosen;

	function fight(){

	}	   
	
	$('.char').on('click', function () {
	        
		if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'darth'){
	       	$('#darth').animate({left: '-570px', top: '317px'});
	       	firstChosen = 'darth';
	       	isFirstChosen = true;
	    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'yoda'){
	       	$('#yoda').animate({left: '-380px', top: '317px'});
	       	$('.char:not(#luke, #obie, #yoda)').animate({left: '-195px'});
	       	firstChosen = 'yoda';
	       	isFirstChosen = true;
	    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'obie'){
	       	$('#obie').animate({left: '-190px', top: '317px'});
	       	$('.char:not(#obie, #luke)').animate({left: '-195px'});
	       	firstChosen = 'obie';
	       	isFirstChosen = true;
	    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'luke'){
	       	$('#luke').animate({top: '317px'});
	       	$('.char:not(#luke)').animate({left: '-195px'});
	       	firstChosen = 'luke';
	       	isFirstChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'luke' && $(this).attr('id')  == 'darth'){
	    	$('#darth').animate({left: '115px', top: '317px'});
	       	secondChosen = 'darth';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'obie' && $(this).attr('id')  == 'darth'){
	    	$('#darth').animate({left: '115px', top: '317px'});
	       	secondChosen = 'darth';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen === 'yoda' && $(this).attr('id')  == 'darth'){
	    	$('#darth').animate({left: '115px', top: '317px'});
	       	secondChosen = 'darth';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'luke' && $(this).attr('id')  == 'yoda'){
	    	$('#yoda').animate({left: '305px', top: '317px'});
	       	$('#darth').animate({left: '-395px'});
	       	secondChosen = 'yoda';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'obie' && $(this).attr('id')  == 'yoda'){
	    	$('#yoda').animate({left: '305px', top: '317px'});
	       	$('#darth').animate({left: '-395px'});
	       	secondChosen = 'yoda';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'darth' && $(this).attr('id')  == 'yoda'){
	    	$('#yoda').animate({left: '305px', top: '317px'});
	       	secondChosen = 'yoda';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'luke' && $(this).attr('id')  == 'obie'){
	    	$('#obie').animate({left: '495px', top: '317px'});
	    	$('.char:not(#obie, #luke)').animate({left: '-390px'});
	       	secondChosen = 'obie';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'yoda' && $(this).attr('id')  == 'obie'){
	    	$('#obie').animate({left: '495px', top: '317px'});
	    	$('#darth').animate({left: '-390px'});
	       	secondChosen = 'obie';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'darth' && $(this).attr('id')  == 'obie'){
	    	$('#obie').animate({left: '495px', top: '317px'});
	    	$('#yoda').animate({left: '-190px'});
	       	secondChosen = 'obie';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'obie' && $(this).attr('id')  == 'luke'){
	    	$('#luke').animate({left: '683px', top: '317px'});
	    	$('.char:not(#luke, #obie)').animate({left: '-390px'});
	       	secondChosen = 'luke';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'yoda' && $(this).attr('id')  == 'luke'){
	    	$('#luke').animate({left: '683px', top: '317px'});
	    	$('#obie').animate({left: '-190px'});
	    	$('#darth').animate({left: '-390px'});
	       	secondChosen = 'luke';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'darth' && $(this).attr('id')  == 'luke'){
	    	$('#luke').animate({left: '683px', top: '317px'});
	    	$('#obie').animate({left: '-190px'});
	    	$('#yoda').animate({left: '-190px'});
	       	secondChosen = 'luke';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && isSecondChosen){
	    	var snd = new Audio('../../assets/sounds/fight.mp3');
			snd.play();
	    	fight();
	    }
	});
});