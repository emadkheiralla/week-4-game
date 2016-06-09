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
	}

	var secondChosen = {
		'name': "",
		'healthMeter': 0,
		'attackPower': 0,
		'attackFactor': 0,
	}

	var luke = {
		'dead': false
	}

	var obie = {
		'dead': false
	}

	var yoda = {
		'dead': false
	}

	var darth = {
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
		$('#choose').hide();
		$('#firstrow').fireworks();
		$('#toph1').html('Thank you for playing!').css('color', 'red');

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

		if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'luke'){
			$( "#luke" ).hide( "explode", {pieces: 16}, 1000 );
			luke.dead = true;
			tryAgain();
		}else if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'obie'){
			$( "#obie" ).hide( "explode", {pieces: 16}, 1000 );
			obie.dead = true;
			tryAgain();
		}else if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'yoda'){
			$( "#yoda" ).hide( "explode", {pieces: 16}, 1000 );
			yoda.dead = true;
			tryAgain();
		}else if(firstChosen.healthMeter <= 0 && secondChosen.healthMeter > 0 && firstChosen.name == 'darth'){
			$( "#darth" ).hide( "explode", {pieces: 16}, 1000 );
			darth.dead = true;
			tryAgain();
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'luke' && numAlive == 2){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#luke" ).hide( "explode", {pieces: 16}, 1000 );
			$('#luke').appendTo('.opp1container');
		    $('#luke').show('explode', {pieces: 16}, 400);
		    $('#defarea').show();
			$('hr').show();
		    $('#choose').show();
		    numAlive--;
		    fightsComplete++;
			luke.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'luke' && numAlive == 1){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#luke" ).hide( "explode", {pieces: 16}, 1000 );
			$('#luke').appendTo('.opp2container');
		    $('#luke').show('explode', {pieces: 16}, 400);
		    $('#defarea').show();
			$('hr').show();
		    $('#choose').show();
		    numAlive--;
		    fightsComplete++;
			luke.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'luke' && numAlive == 0){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#luke" ).hide( "explode", {pieces: 16}, 1000 );
			$('#luke').appendTo('.opp3container');
		    $('#luke').show('explode', {pieces: 16}, 400);
		    $('#defarea').show();
		    $('hr').show();
		    $('#choose').show();
		    numAlive--;
		    fightsComplete++;
			luke.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'obie' && numAlive == 2){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#obie" ).hide( "explode", {pieces: 16}, 1000 );
			$('#obie').appendTo('.opp1container');
	    	$('#obie').show('explode', {pieces: 16}, 400);
		    $('#defarea').show();
		   	$('hr').show();
		   	$('#choose').show();
			numAlive--;
		    fightsComplete++;
			obie.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'obie' && numAlive == 1){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#obie" ).hide( "explode", {pieces: 16}, 1000 );
			$('#obie').appendTo('.opp2container');
		  	$('#obie').show('explode', {pieces: 16}, 400);
		   	$('#defarea').show();
		   	$('hr').show();
		   	$('#choose').show();
		    numAlive--;
		    fightsComplete++;
			obie.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'obie' && numAlive == 0){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#obie" ).hide( "explode", {pieces: 16}, 1000 );
			$('#obie').appendTo('.opp3container');
		   	$('#obie').show('explode', {pieces: 16}, 400);
		   	$('#defarea').show();
		   	$('hr').show();
		   	$('#choose').show();
		    numAlive--;
		    fightsComplete++;
			obie.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'yoda' && numAlive == 2){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#yoda" ).hide( "explode", {pieces: 16}, 1000 );
			$('#yoda').appendTo('.opp1container');
		   	$('#yoda').show('explode', {pieces: 16}, 400);
		   	$('#defarea').show();
		   	$('hr').show();
		   	$('#choose').show();
		    numAlive--;
		    fightsComplete++;
			yoda.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'yoda' && numAlive == 1){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#yoda" ).hide( "explode", {pieces: 16}, 1000 );
			$('#yoda').appendTo('.opp2container');
	    	$('#yoda').show('explode', {pieces: 16}, 400);
		   	$('#defarea').show();
		   	$('hr').show();
		   	$('#choose').show();
		    numAlive--;
		    fightsComplete++;
			yoda.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'yoda' && numAlive == 0){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#yoda" ).hide( "explode", {pieces: 16}, 1000 );
	    	$('#yoda').appendTo('.opp3container');
	    	$('#yoda').show('explode', {pieces: 16}, 400);
		   	$('#defarea').show();
		   	$('hr').show();
		   	$('#choose').show();
		    numAlive--;
		    fightsComplete++;
			yoda.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'darth' && numAlive == 2){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#darth" ).hide( "explode", {pieces: 16}, 1000 );
			$('#darth').appendTo('.opp1container');
	    	$('#darth').show('explode', {pieces: 16}, 400);
	    	$('#defarea').show();
		   	$('hr').show();
		   	$('#choose').show();
		    numAlive--;
		    fightsComplete++;
			darth.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'darth' && numAlive == 1){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#darth" ).hide( "explode", {pieces: 16}, 1000 );
			$('#darth').appendTo('.opp2container');
	   		$('#darth').show('explode', {pieces: 16}, 400);
	   		$('#defarea').show();
		   	$('hr').show();
			$('#choose').show();
		    numAlive--;
		    fightsComplete++;
			darth.dead = true;
			isSecondChosen = false;
		}else if(firstChosen.healthMeter > 0 && secondChosen.healthMeter <= 0  && secondChosen.name == 'darth' && numAlive == 0){
			$('#youwonlost').html("You destroyed your opponent...Please choose next opponent" );
			$( "#darth" ).hide( "explode", {pieces: 16}, 1000 );
			$('#darth').appendTo('.opp3container');
		   	$('#darth').show('explode', {pieces: 16}, 400);
		   	$('#defarea').show();
		   	$('hr').show();
		   	$('#choose').show();
		    numAlive--;
		    fightsComplete++;
			darth.dead = true;
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
		       	firstChosen.name = 'darth';
		       	firstChosen.healthMeter = 180;
		       	firstChosen.attackFactor = 25;
		       	isFirstChosen = true;
		       	$('#darth').appendTo('#yourchar').hide().fadeIn('slow');
		       	$('#choose').html("Choose an opponent!");
		       	$('#character').show();		       	
		    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'yoda'){
		       	firstChosen.name = 'yoda';
		       	firstChosen.healthMeter = 150;
		       	firstChosen.attackFactor = 15;
		       	isFirstChosen = true;
		       	$('#yoda').appendTo('#yourchar').hide().fadeIn('slow');
		       	$('#darth').appendTo('.yodacontainer');
		       	$('#choose').html("Choose an opponent!");
		       	$('#character').show();
		       	$('#youwonlost').hide();		       	
		    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'obie'){
		       	firstChosen.name = 'obie';
		       	firstChosen.healthMeter = 120;
		       	firstChosen.attackFactor = 8;
		       	isFirstChosen = true;
		       	$('#obie').appendTo('#yourchar').hide().fadeIn('slow');
		       	$('#yoda').appendTo('.obiecontainer');			       	
			    $('#darth').appendTo('.yodacontainer');
		       	$('#choose').html("Choose an opponent!");
		       	$('#character').show();
		       	$('#youwonlost').hide();		       	
		    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'luke'){
		    	firstChosen.name = 'luke';
		       	firstChosen.healthMeter = 100;
		       	firstChosen.attackFactor = 5;
		       	isFirstChosen = true;
		       	$('#luke').appendTo('#yourchar').hide().fadeIn('slow');
			    $('#obie').appendTo('.lukecontainer');
			    $('#yoda').appendTo('.obiecontainer');
			    $('#darth').appendTo('.yodacontainer');
		       	$('#choose').html("Choose an opponent!");
		       	$('#character').show();
		       	$('#youwonlost').hide();
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'luke' && $(this).attr('id')  == 'darth'){
		       	secondChosen.name = 'darth';
		       	secondChosen.healthMeter = 180;
		       	secondChosen.attackFactor = 25;
		       	isSecondChosen = true;
		       	$('#darth').appendTo('#youropp').hide().fadeIn('slow');
		    	$('#choose').hide();
		    	$('#opponent').show();
		    	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'luke' && $(this).attr('id')  == 'yoda'){
		       	secondChosen.name = 'yoda';
		       	secondChosen.healthMeter = 150;
		       	secondChosen.attackFactor = 15;
		       	isSecondChosen = true;
		       	$('#yoda').appendTo('#youropp').hide().fadeIn('slow');
		       	if(!obie.dead) {
			       	$('#obie').appendTo('.lukecontainer');			       	
		       	}

		       	if(!darth.dead && !obie.dead){
		       		$('#darth').appendTo('.obiecontainer');
		       	}else if(!darth.dead && obie.dead){
		       		$('#darth').appendTo('.lukecontainer');
		       	}
		       	$('#choose').hide();
		       	$('#opponent').show(500);
		       	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'luke' && $(this).attr('id')  == 'obie'){
		    	secondChosen.name = 'obie';
		       	secondChosen.healthMeter = 120;
		       	secondChosen.attackFactor = 8;
		       	isSecondChosen = true;
		    	$('#obie').appendTo('#youropp').hide().fadeIn('slow');
		    	if(!yoda.dead){
			       	$('#yoda').appendTo('.lukecontainer');			       	
		       	}

		       	if(!darth.dead && !yoda.dead){
		       		$('#darth').appendTo('.obiecontainer');
		       	}else if(!darth.dead && yoda.dead){
		       		$('#darth').appendTo('.lukecontainer');
		       	}
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'obie' && $(this).attr('id')  == 'darth'){
		       	secondChosen.name = 'darth';
		       	secondChosen.healthMeter = 180;
		       	secondChosen.attackFactor = 25;
		       	isSecondChosen = true;
		       	$('#darth').appendTo('#youropp').hide().fadeIn('slow');
		    	$('#choose').hide();
		    	$('#opponent').show();
		    	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'obie' && $(this).attr('id')  == 'yoda'){
		    	secondChosen.name = 'yoda';
		       	secondChosen.healthMeter = 150;
		       	secondChosen.attackFactor = 15;
		       	isSecondChosen = true;
		       	$('#yoda').appendTo('#youropp').hide().fadeIn('slow');
		       	if (!darth.dead && !luke.dead){
		       		$('#darth').appendTo('.obiecontainer');
		       	}else if(!darth.dead && luke.dead){
		       		$('#darth').appendTo('.lukecontainer');
		       	}
		       	$('#choose').hide();
		       	$('#opponent').show(500);
		       	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'obie' && $(this).attr('id')  == 'luke'){
		    	secondChosen.name = 'luke';
		       	secondChosen.healthMeter = 100;
		       	secondChosen.attackFactor = 5;
		       	isSecondChosen = true;
		    	$('#luke').appendTo('#youropp').hide().fadeIn('slow');
		    	if (!yoda.dead){
			       	$('#yoda').appendTo('.lukecontainer');			       	
		       	}

		       	if(!darth.dead && !yoda.dead){
		       		$('#darth').appendTo('.obiecontainer');
		       	}else if(!darth.dead && yoda.dead){
		       		$('#darth').appendTo('.lukecontainer');
		       	}
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'yoda' && $(this).attr('id')  == 'darth'){
		       	secondChosen.name = 'darth';
		       	secondChosen.healthMeter = 180;
		       	secondChosen.attackFactor = 25;
		       	isSecondChosen = true;
		       	$('#darth').appendTo('#youropp').hide().fadeIn('slow');
		    	$('#choose').hide();
		    	$('#opponent').show();
		    	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'yoda' && $(this).attr('id')  == 'obie'){
		    	secondChosen.name = 'obie';
		       	secondChosen.healthMeter = 120;
		       	secondChosen.attackFactor = 8;
		       	isSecondChosen = true;
		    	$('#obie').appendTo('#youropp').hide().fadeIn('slow');
		    	if (!darth.dead && !luke.dead) {
		       		$('#darth').appendTo('.obiecontainer');
		       	}else if(!darth.dead && luke.dead){
		       		$('#darth').appendTo('.lukecontainer');
		       	}
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'yoda' && $(this).attr('id')  == 'luke'){
		    	secondChosen.name = 'luke';
		       	secondChosen.healthMeter = 100;
		       	secondChosen.attackFactor = 5;
		       	isSecondChosen = true;
		    	$('#luke').appendTo('#youropp').hide().fadeIn('slow');
		    	if (!obie.dead){
			       	$('#obie').appendTo('.lukecontainer');			       	
		       	}

		       	if(!darth.dead && !obie.dead){
		       		$('#darth').appendTo('.obiecontainer');
		       	}else if(!darth.dead && obie.dead){
		       		$('#darth').appendTo('.lukecontainer');
		       	}
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'darth' && $(this).attr('id')  == 'luke'){
		    	secondChosen.name = 'luke';
		       	secondChosen.healthMeter = 100;
		       	secondChosen.attackFactor = 5;
		       	isSecondChosen = true;
		    	$('#luke').appendTo('#youropp').hide().fadeIn('slow');
		    	if (!obie.dead){
			       	$('#obie').appendTo('.lukecontainer');			       	
		       	}
		       	if(!yoda.dead && !obie.dead){
		       		$('#yoda').appendTo('.obiecontainer');
		       	}else if(!yoda.dead && obie.dead){
		       		$('#yoda').appendTo('.lukecontainer');
		       	}
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'darth' && $(this).attr('id')  == 'obie'){
		    	secondChosen.name = 'obie';
		       	secondChosen.healthMeter = 120;
		       	secondChosen.attackFactor = 8;
		       	isSecondChosen = true;
		    	$('#obie').appendTo('#youropp').hide().fadeIn('slow');
		    	if (!yoda.dead) {
		       		$('#yoda').appendTo('.obiecontainer');
		       	}
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		    	$('#attack').show();		       	
		    }else if(isFirstChosen && !isSecondChosen && firstChosen.name == 'darth' && $(this).attr('id')  == 'yoda'){
		    	secondChosen.name = 'yoda';
		       	secondChosen.healthMeter = 150;
		       	secondChosen.attackFactor = 15;
		       	isSecondChosen = true;
		    	$('#yoda').appendTo('#youropp').hide().fadeIn('slow');
		    	$('#choose').hide();
		    	$('#opponent').show(500);
		    	$('#youwonlost').hide();
		    	$('#attack').show();		       	
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