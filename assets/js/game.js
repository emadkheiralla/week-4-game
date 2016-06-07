$(document).ready(function () {

	var isFirstChosen = false;
	var isSecondChosen = false;
	var remOpponents = 2;


	var firstChosen = {
		'name': "",
		'healthMeter': 0,
		'attackPower': 0,
		'attackFactor': 0
	}

	var secondChosen = {
		'name': "",
		'healthMeter': 0,
		'attackPower': 0,
		'attackFactor': 0
	}	
		   
	$('#character').hide();
	$('#opponent').hide();
	$('#attacks').hide();
	$('#attacked').hide();
	$('.opp1').hide();
	$('.opp2').hide();
	$('.opp3').hide();

	
	function tryAgain(){

		$('#youwonlost').html("You lost...Page is now reloading!");
		setTimeout(function() { location.reload() },2000);
	}

	function nextLevel(){
		remOpponents--;
		$('#choose').show();
		chooseChar();
		if(firstChosen.attackPower <= 0 && secondChosen.attackPower > 0){
			tryAgain();
		}else if(firstChosen.attackPower > 0 && secondChosen.attackPower > 0){
			fight()
		}
	}

	function youWon(){
		$('#youwonlost').show();
		$('#youwonlost').html("You won the game!");
		$('body').fireworks();
	}

	function fight(){
		
		firstChosen.attackPower += firstChosen.attackFactor;
		firstChosen.healthMeter -= secondChosen.attackFactor;
		secondChosen.healthMeter -= firstChosen.attackPower;
		$('#attacks').show();
		$('#attacked').show();
		$('#attackedyoufor').html(secondChosen.attackFactor);
		$('#youattackedfor').html(firstChosen.attackPower);

		if(firstChosen.name == 'luke' && secondChosen.name == 'obie'){
			$('#lukeapnum').html(firstChosen.healthMeter);
			$('#obieapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'luke' && secondChosen.name == 'yoda'){
			$('#lukeapnum').html(firstChosen.healthMeter);
			$('#yodaapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'luke' && secondChosen.name == 'darth'){
			$('#lukeapnum').html(firstChosen.healthMeter);
			$('#darthapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'obie' && secondChosen.name == 'luke'){
			$('#obieapnum').html(firstChosen.healthMeter);
			$('#lukeapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'obie' && secondChosen.name == 'yoda'){
			$('#obieapnum').html(firstChosen.healthMeter);
			$('#yodaapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'obie' && secondChosen.name == 'darth'){
			$('#obieapnum').html(firstChosen.healthMeter);
			$('#darthapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'yoda' && secondChosen.name == 'luke'){
			$('#yodaapnum').html(firstChosen.healthMeter);
			$('#lukeapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'yoda' && secondChosen.name == 'obie'){
			$('#yodaapnum').html(firstChosen.healthMeter);
			$('#obieapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'yoda' && secondChosen.name == 'darth'){
			$('#yodaapnum').html(firstChosen.healthMeter);
			$('#darthapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'darth' && secondChosen.name == 'luke'){
			$('#darthapnum').html(firstChosen.healthMeter);
			$('#lukeapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'darth' && secondChosen.name == 'obie'){
			$('#darthapnum').html(firstChosen.healthMeter);
			$('#obieapnum').html(secondChosen.healthMeter);
		}else if(firstChosen.name == 'darth' && secondChosen.name == 'yoda'){
			$('#darthapnum').html(firstChosen.healthMeter);
			$('#yodaapnum').html(secondChosen.healthMeter);
		}

		if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0 && remOpponents == 0){
			youWon();
		}else if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'luke'){
			$( "#luke" ).hide( "explode", {pieces: 16}, 2000 );
			tryAgain();
		}else if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'obie'){
			$( "#obie" ).hide( "explode", {pieces: 16}, 2000 );
			tryAgain();
		}else if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'yoda'){
			$( "#yoda" ).hide( "explode", {pieces: 16}, 2000 );
			tryAgain();
		}else if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'darth'){
			$( "#darth" ).hide( "explode", {pieces: 16}, 2000 );
			tryAgain();
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0 && remOpponents >= 0 && secondChosen.name == 'luke'){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#luke" ).hide( "explode", {pieces: 16}, 2000 );
			isSecondChosen = false;
			nextLevel();
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0 && remOpponents >= 0 && secondChosen.name == 'obie'){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#obie" ).hide( "explode", {pieces: 16}, 2000 );
			isSecondChosen = false;
			nextLevel();
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0 && remOpponents >= 0 && secondChosen.name == 'yoda'){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#yoda" ).hide( "explode", {pieces: 16}, 2000 );
			isSecondChosen = false;
			nextLevel();
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0 && remOpponents >= 0 && secondChosen.name == 'darth'){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#darth" ).hide( "explode", {pieces: 16}, 2000 );
			isSecondChosen = false;
			nextLevel();
		} 
	}
	
	function chooseChar(){
		$('#youwonlost').show();
		$('.char').on('click', function () {
	        
			if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'darth'){
		       	$('#darth').animate({left: '-570px', top: '317px'});
		       	$('#choose').html("Choose an opponent!");
		       	$('#character').show(500);
		       	firstChosen.name = 'darth';
		       	firstChosen.healthMeter = 180;
		       	firstChosen.attackFactor = 25;
		       	isFirstChosen = true;
		    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'yoda'){
		       	$('#yoda').animate({left: '-380px', top: '317px'});
		       	$('.char:not(#luke, #obie, #yoda)').animate({left: '-195px'});
		       	$('#choose').html("Choose an opponent!");
		       	$('#character').show(500);
		       	$('#youwonlost').hide();
		       	firstChosen.name = 'yoda';
		       	firstChosen.healthMeter = 150;
		       	firstChosen.attackFactor = 15;
		       	isFirstChosen = true;
		    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'obie'){
		       	$('#obie').animate({left: '-190px', top: '317px'});
		       	$('.char:not(#obie, #luke)').animate({left: '-195px'});
		       	$('#choose').html("Choose an opponent!");
		       	$('#character').show(500);
		       	$('#youwonlost').hide();
		       	firstChosen.name = 'obie';
		       	firstChosen.healthMeter = 120;
		       	firstChosen.attackFactor = 8;
		       	isFirstChosen = true;
		    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'luke'){
		       	$('#luke').animate({top: '317px'});
		       	$('.char:not(#luke)').animate({left: '-195px'});
		       	$('#choose').html("Choose an opponent!");
		       	$('#character').show(500);
		       	$('#youwonlost').hide();
		       	firstChosen.name = 'luke';
		       	firstChosen.healthMeter = 100;
		       	firstChosen.attackFactor = 5;
		       	isFirstChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'luke' && $(this).attr('id')  == 'darth'){
		    	$('#darth').animate({left: '205px', top: '317px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		       	secondChosen.name = 'darth';
		       	secondChosen.healthMeter = 180;
		       	secondChosen.attackFactor = 25;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'obie' && $(this).attr('id')  == 'darth'){
		    	$('#darth').animate({left: '205px', top: '317px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		       	secondChosen.name = 'darth';
		       	secondChosen.healthMeter = 180;
		       	secondChosen.attackFactor = 25;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name === 'yoda' && $(this).attr('id')  == 'darth'){
		    	$('#darth').animate({left: '205px', top: '317px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		       	secondChosen.name = 'darth';
		       	secondChosen.healthMeter = 180;
		       	secondChosen.attackFactor = 25;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'luke' && $(this).attr('id')  == 'yoda'){
		    	$('#yoda').animate({left: '400px', top: '317px'});
		       	$('#darth').animate({left: '-395px'});
		       	$('#choose').hide();
		       	$('#opponent').show(500);
		       	$('#youwonlost').hide();
		       	secondChosen.name = 'yoda';
		       	secondChosen.healthMeter = 150;
		       	secondChosen.attackFactor = 15;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'obie' && $(this).attr('id')  == 'yoda'){
		    	$('#yoda').animate({left: '395px', top: '317px'});
		       	$('#darth').animate({left: '-395px'});
		       	$('#choose').hide();
		       	$('#opponent').show(500);
		       	$('#youwonlost').hide();
		       	secondChosen.name = 'yoda';
		       	secondChosen.healthMeter = 150;
		       	secondChosen.attackFactor = 15;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'darth' && $(this).attr('id')  == 'yoda'){
		    	$('#yoda').animate({left: '395px', top: '317px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		       	secondChosen.name = 'yoda';
		       	secondChosen.healthMeter = 150;
		       	secondChosen.attackFactor = 15;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'luke' && $(this).attr('id')  == 'obie'){
		    	$('#obie').animate({left: '580px', top: '317px'});
		    	$('.char:not(#obie, #luke)').animate({left: '-390px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		       	secondChosen.name = 'obie';
		       	secondChosen.healthMeter = 120;
		       	secondChosen.attackFactor = 8;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'yoda' && $(this).attr('id')  == 'obie'){
		    	$('#obie').animate({left: '580px', top: '317px'});
		    	$('#darth').animate({left: '-390px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		       	secondChosen.name = 'obie';
		       	secondChosen.healthMeter = 120;
		       	secondChosen.attackFactor = 8;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'darth' && $(this).attr('id')  == 'obie'){
		    	$('#obie').animate({left: '585px', top: '317px'});
		    	$('#yoda').animate({left: '-190px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		       	secondChosen.name = 'obie';
		       	secondChosen.healthMeter = 120;
		       	secondChosen.attackFactor = 8;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'obie' && $(this).attr('id')  == 'luke'){
		    	$('#luke').animate({left: '773px', top: '317px'});
		    	$('.char:not(#luke, #obie)').animate({left: '-390px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		       	secondChosen.name = 'luke';
		       	secondChosen.healthMeter = 100;
		       	secondChosen.attackFactor = 5;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'yoda' && $(this).attr('id')  == 'luke'){
		    	$('#luke').animate({left: '773px', top: '317px'});
		    	$('#obie').animate({left: '-190px'});
		    	$('#darth').animate({left: '-390px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		       	secondChosen.name = 'luke';
		       	secondChosen.healthMeter = 100;
		       	secondChosen.attackFactor = 5;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'darth' && $(this).attr('id')  == 'luke'){
		    	$('#luke').animate({left: '773px', top: '317px'});
		    	$('#obie').animate({left: '-190px'});
		    	$('#yoda').animate({left: '-190px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		       	secondChosen.name = 'luke';
		       	secondChosen.healthMeter = 100;
		       	secondChosen.attackFactor = 5;
		       	isSecondChosen = true;	       	
		    }
		});
	}

	chooseChar();
	$('#attack').on('click', function () {
		
		if(isFirstChosen && isSecondChosen){
	    	fight();
	    }
	});
});