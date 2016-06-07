$(document).ready(function () {

	var isFirstChosen = false;
	var isSecondChosen = false;
	var numAlive = 2;
	var fightsComplete = 0;

	var firstChosen = {
		'name': "",
		'healthMeter': 0,
		'attackPower': 0,
		'attackFactor': 0,
		'dead': false
	}

	var secondChosen = {
		'name': "",
		'healthMeter': 0,
		'attackPower': 0,
		'attackFactor': 0,
		'dead': false
	}	
		   
	$('#character').hide();
	$('#opponent').hide();
	$('#attacks').hide();
	$('#attacked').hide();
	$('#defarea').hide();
	$('#attack').hide();
	$('#restart').hide();
	$('hr').hide();
	
	function tryAgain(){

		$('#youwonlost').html("You lost...Page is now reloading!");
		setTimeout(function() { location.reload() },2000);
	}

	function youWon(){
		$('#youwonlost').show();
		$('#youwonlost').html("You won the game!");
		$('#restart').show();
		$('#firstrow').fireworks();
	}	

	function fight(){
			console.log(numAlive);
			console.log(fightsComplete);
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

			if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'luke'){
				$( "#luke" ).hide( "explode", {pieces: 16}, 1000 );
				firstChosen.dead = true;
				tryAgain();
			}else if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'obie'){
				$( "#obie" ).hide( "explode", {pieces: 16}, 1000 );
				firstChosen.dead = true;
				tryAgain();
			}else if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'yoda'){
				$( "#yoda" ).hide( "explode", {pieces: 16}, 1000 );
				firstChosen.dead = true;
				tryAgain();
			}else if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'darth'){
				$( "#darth" ).hide( "explode", {pieces: 16}, 1000 );
				firstChosen.dead = true;
				tryAgain();
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'luke' && numAlive == 2){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#luke" ).hide( "explode", {pieces: 16}, 1000 );
				$('#luke').animate({left: '0px', top: '680px'});
			    $('#luke').show('explode', {pieces: 16}, 400);
			    $('#defarea').show();
			    $('hr').show();
			    $('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'luke' && numAlive == 1){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#luke" ).hide( "explode", {pieces: 16}, 1000 );
				$('#luke').animate({left: '390px', top: '680px'});
			    $('#luke').show('explode', {pieces: 16}, 400);
			    $('#defarea').show();
			    $('hr').show();
			    $('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'luke' && numAlive == 0){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#luke" ).hide( "explode", {pieces: 16}, 1000 );
				$('#luke').animate({left: '780px', top: '680px'});
			    $('#luke').show('explode', {pieces: 16}, 400);
			    $('#defarea').show();
			    $('hr').show();
			    $('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'obie' && numAlive == 2){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#obie" ).hide( "explode", {pieces: 16}, 1000 );
				$('#obie').animate({left: '-190px', top: '680px'});
		    	$('#obie').show('explode', {pieces: 16}, 400);
		    	$('#defarea').show();
		    	$('hr').show();
		    	$('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'obie' && numAlive == 1){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#obie" ).hide( "explode", {pieces: 16}, 1000 );
				$('#obie').animate({left: '200px', top: '680px'});
		    	$('#obie').show('explode', {pieces: 16}, 400);
		    	$('#defarea').show();
		    	$('hr').show();
		    	$('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'obie' && numAlive == 0){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#obie" ).hide( "explode", {pieces: 16}, 1000 );
				$('#obie').animate({left: '590px', top: '680px'});
		    	$('#obie').show('explode', {pieces: 16}, 400);
		    	$('#defarea').show();
		    	$('hr').show();
		    	$('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'yoda' && numAlive == 2){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#yoda" ).hide( "explode", {pieces: 16}, 1000 );
				$('#yoda').animate({left: '-380px', top: '680px'});
		    	$('#yoda').show('explode', {pieces: 16}, 400);
		    	$('#defarea').show();
		    	$('hr').show();
		    	$('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'yoda' && numAlive == 1){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#yoda" ).hide( "explode", {pieces: 16}, 1000 );
				$('#yoda').animate({left: '10px', top: '680px'});
		    	$('#yoda').show('explode', {pieces: 16}, 400);
		    	$('#defarea').show();
		    	$('hr').show();
		    	$('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'yoda' && numAlive == 0){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#yoda" ).hide( "explode", {pieces: 16}, 1000 );
		    	$('#yoda').animate({left: '400px', top: '680px'});
		    	$('#yoda').show('explode', {pieces: 16}, 400);
		    	$('#defarea').show();
		    	$('hr').show();
		    	$('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'darth' && numAlive == 2){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#darth" ).hide( "explode", {pieces: 16}, 1000 );
				$('#darth').animate({left: '-570px', top: '680px'});
		    	$('#darth').show('explode', {pieces: 16}, 400);
		    	$('#defarea').show();
		    	$('hr').show();
		    	$('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'darth' && numAlive == 1){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#darth" ).hide( "explode", {pieces: 16}, 1000 );
				$('#darth').animate({left: '-270px', top: '680px'});
		   		$('#darth').show('explode', {pieces: 16}, 400);
		   		$('#defarea').show();
		   		$('hr').show();
		   		$('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'darth' && numAlive == 0){
				$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
				$( "#darth" ).hide( "explode", {pieces: 16}, 1000 );
				$('#darth').animate({left: '30px', top: '680px'});
		    	$('#darth').show('explode', {pieces: 16}, 400);
		    	$('#defarea').show();
		    	$('hr').show();
		    	$('#choose').show();
			    numAlive--;
			    fightsComplete++;
				secondChosen.dead = true;
				isSecondChosen = false;
			}
			if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && fightsComplete ==3){
				youWon();
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
		    	$('#attack').show();
		       	secondChosen.name = 'darth';
		       	secondChosen.healthMeter = 180;
		       	secondChosen.attackFactor = 25;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'obie' && $(this).attr('id')  == 'darth'){
		    	$('#darth').animate({left: '205px', top: '317px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		    	$('#attack').show();
		       	secondChosen.name = 'darth';
		       	secondChosen.healthMeter = 180;
		       	secondChosen.attackFactor = 25;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name === 'yoda' && $(this).attr('id')  == 'darth'){
		    	$('#darth').animate({left: '205px', top: '317px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		    	$('#attack').show();
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
		    	$('#attack').show();
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
		    	$('#attack').show();
		       	secondChosen.name = 'yoda';
		       	secondChosen.healthMeter = 150;
		       	secondChosen.attackFactor = 15;
		       	isSecondChosen = true;
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'darth' && $(this).attr('id')  == 'yoda'){
		    	$('#yoda').animate({left: '395px', top: '317px'});
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		    	$('#attack').show();
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
		    	$('#attack').show();
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
		    	$('#attack').show();
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
		    	$('#attack').show();
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
		    	$('#attack').show();
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
		    	$('#attack').show();
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
		    	$('#attack').show();
		       	secondChosen.name = 'luke';
		       	secondChosen.healthMeter = 100;
		       	secondChosen.attackFactor = 5;
		       	isSecondChosen = true;	       	
		    }
		});
		
	}
	$('#attack').on('click', function () {
		
		if(isFirstChosen && isSecondChosen){
	    	fight();
	    }
	});

	$('#restart').on('click', function () {
		window.location.reload();
	});

	chooseChar();
});