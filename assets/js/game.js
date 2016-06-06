$(document).ready(function () {

	var isFirstChosen = false;
	var isSecondChosen = false;

	var firstChosen;
	var secondChosen;

	var luke = {
		'healthMeter': 100,
		'attackPower': 0,
		'attackFactor': 5
	}
	var obie = {
		'healthMeter': 120,
		'attackPower': 0,
		'attackFactor': 8
	}
	var yoda = {
		'healthMeter': 150,
		'attackPower': 0,
		'attackFactor': 15
	}
	var darth = {
		'healthMeter': 180,
		'attackPower': 0,
		'attackFactor': 25
	}

	
		   
	$('#character').hide();
	$('#opponent').hide();
	$('#attacks').hide();
	$('#attacked').hide();
	
	$('.char').on('click', function () {
	        
		if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'darth'){
	       	$('#darth').animate({left: '-570px', top: '317px'});
	       	$('#character').show(500);
	       	firstChosen = 'darth';
	       	isFirstChosen = true;
	    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'yoda'){
	       	$('#yoda').animate({left: '-380px', top: '317px'});
	       	$('.char:not(#luke, #obie, #yoda)').animate({left: '-195px'});
	       	$('#character').show(500);
	       	firstChosen = 'yoda';
	       	isFirstChosen = true;
	    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'obie'){
	       	$('#obie').animate({left: '-190px', top: '317px'});
	       	$('.char:not(#obie, #luke)').animate({left: '-195px'});
	       	$('#character').show(500);
	       	firstChosen = 'obie';
	       	isFirstChosen = true;
	    }else if(!isFirstChosen && !isSecondChosen && $(this).attr('id')  == 'luke'){
	       	$('#luke').animate({top: '317px'});
	       	$('.char:not(#luke)').animate({left: '-195px'});
	       	$('#character').show(500);
	       	firstChosen = 'luke';
	       	isFirstChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'luke' && $(this).attr('id')  == 'darth'){
	    	$('#darth').animate({left: '115px', top: '317px'});
	    	$('#opponent').show(500);
	       	secondChosen = 'darth';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'obie' && $(this).attr('id')  == 'darth'){
	    	$('#darth').animate({left: '115px', top: '317px'});
	    	$('#opponent').show(500);
	       	secondChosen = 'darth';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen === 'yoda' && $(this).attr('id')  == 'darth'){
	    	$('#darth').animate({left: '115px', top: '317px'});
	    	$('#opponent').show(500);
	       	secondChosen = 'darth';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'luke' && $(this).attr('id')  == 'yoda'){
	    	$('#yoda').animate({left: '305px', top: '317px'});
	       	$('#darth').animate({left: '-395px'});
	       	$('#opponent').show(500);
	       	secondChosen = 'yoda';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'obie' && $(this).attr('id')  == 'yoda'){
	    	$('#yoda').animate({left: '305px', top: '317px'});
	       	$('#darth').animate({left: '-395px'});
	       	$('#opponent').show(500);
	       	secondChosen = 'yoda';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'darth' && $(this).attr('id')  == 'yoda'){
	    	$('#yoda').animate({left: '305px', top: '317px'});
	    	$('#opponent').show(500);
	       	secondChosen = 'yoda';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'luke' && $(this).attr('id')  == 'obie'){
	    	$('#obie').animate({left: '495px', top: '317px'});
	    	$('.char:not(#obie, #luke)').animate({left: '-390px'});
	    	$('#opponent').show(500);
	       	secondChosen = 'obie';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'yoda' && $(this).attr('id')  == 'obie'){
	    	$('#obie').animate({left: '495px', top: '317px'});
	    	$('#darth').animate({left: '-390px'});
	    	$('#opponent').show(500);
	       	secondChosen = 'obie';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'darth' && $(this).attr('id')  == 'obie'){
	    	$('#obie').animate({left: '495px', top: '317px'});
	    	$('#yoda').animate({left: '-190px'});
	    	$('#opponent').show(500);
	       	secondChosen = 'obie';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'obie' && $(this).attr('id')  == 'luke'){
	    	$('#luke').animate({left: '683px', top: '317px'});
	    	$('.char:not(#luke, #obie)').animate({left: '-390px'});
	    	$('#opponent').show(500);
	       	secondChosen = 'luke';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'yoda' && $(this).attr('id')  == 'luke'){
	    	$('#luke').animate({left: '683px', top: '317px'});
	    	$('#obie').animate({left: '-190px'});
	    	$('#darth').animate({left: '-390px'});
	    	$('#opponent').show(500);
	       	secondChosen = 'luke';
	       	isSecondChosen = true;
	    }else if(isFirstChosen && !isSecondChosen && firstChosen == 'darth' && $(this).attr('id')  == 'luke'){
	    	$('#luke').animate({left: '683px', top: '317px'});
	    	$('#obie').animate({left: '-190px'});
	    	$('#yoda').animate({left: '-190px'});
	    	$('#opponent').show(500);
	       	secondChosen = 'luke';
	       	isSecondChosen = true;	       	
	    }else if(isFirstChosen && isSecondChosen){
	    	fight();
	    }
	});
	
	function nextLevel(){
		$('#youwon').html("Hooray! You won!");
		
	}

	function tryAgain(){
		$('#youlost').html("You lost...Page is now reloading!");
		setTimeout(function() { location.reload() },2000);
	}
	
	function fight(){
		
		if (firstChosen == 'luke' && secondChosen == 'obie') {
			luke.attackPower += luke.attackFactor;
			luke.healthMeter -= obie.attackFactor;
			obie.healthMeter -= luke.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#lukeapnum').html(luke.healthMeter);
			$('#obieapnum').html(obie.healthMeter);
			$('#attackedyoufor').html(obie.attackFactor);
			$('#youattackedfor').html(luke.attackPower);
			if(luke.healthMeter <= 0 && obie.healthMeter > 0){
				$('#luke').toggle('explode');
				tryAgain();
			}else if(luke.healthMeter > obie.healthMeter && obie.healthMeter <= 0){
				$('#obie').toggle('explode');
				nextLevel();
			}
		}else if (firstChosen == 'luke' && secondChosen == 'yoda') {
			luke.attackPower += luke.attackFactor;
			luke.healthMeter -= yoda.attackFactor;
			yoda.healthMeter -= luke.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#lukeapnum').html(luke.healthMeter);
			$('#yodaapnum').html(yoda.healthMeter);
			$('#attackedyoufor').html(yoda.attackFactor);
			$('#youattackedfor').html(luke.attackPower);
			if(luke.healthMeter <= 0 && yoda.healthMeter > 0){
				tryAgain();
			}else if(luke.healthMeter > yoda.healthMeter && yoda.healthMeter <= 0){
				nextLevel();
			}
		}else if (firstChosen == 'luke' && secondChosen == 'darth') {
			luke.attackPower += luke.attackFactor;
			luke.healthMeter -= darth.attackFactor;
			darth.healthMeter -= luke.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#lukeapnum').html(luke.healthMeter);
			$('#darthapnum').html(darth.healthMeter);
			$('#attackedyoufor').html(darth.attackFactor);
			$('#youattackedfor').html(luke.attackPower);
			if(luke.healthMeter <= 0 && darth.healthMeter > 0){
				tryAgain();
			}else if(luke.healthMeter > darth.healthMeter && darth.healthMeter <= 0){
				nextLevel();
			}
		}else if (firstChosen == 'obie' && secondChosen == 'luke') {
			obie.attackPower += obie.attackFactor;
			obie.healthMeter -= luke.attackFactor;
			luke.healthMeter -= obie.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#obieapnum').html(obie.healthMeter);
			$('#lukeapnum').html(luke.healthMeter);
			$('#attackedyoufor').html(luke.attackFactor);
			$('#youattackedfor').html(obie.attackPower);
			if(obie.healthMeter <= 0 && luke.healthMeter > 0){
				tryAgain();
			}else if(obie.healthMeter > luke.healthMeter && luke.healthMeter <= 0){
				nextLevel();
			}
		}else if (firstChosen == 'obie' && secondChosen == 'yoda') {
			obie.attackPower += obie.attackFactor;
			obie.healthMeter -= yoda.attackFactor;
			yoda.healthMeter -= obie.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#obieapnum').html(obie.healthMeter);
			$('#yodaapnum').html(yoda.healthMeter);
			$('#attackedyoufor').html(yoda.attackFactor);
			$('#youattackedfor').html(obie.attackPower);
			if(obie.healthMeter <= 0 && yoda.healthMeter > 0){
				tryAgain();
			}else if(obie.healthMeter > yoda.healthMeter && yoda.healthMeter <= 0){
				nextLevel();
			}
		}else if (firstChosen == 'obie' && secondChosen == 'darth') {
			obie.attackPower += obie.attackFactor;
			obie.healthMeter -= darth.attackFactor;
			darth.healthMeter -= obie.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#obieapnum').html(obie.healthMeter);
			$('#darthapnum').html(darth.healthMeter);
			$('#attackedyoufor').html(darth.attackFactor);
			$('#youattackedfor').html(obie.attackPower);
			if(obie.healthMeter <= 0 && darth.healthMeter > 0){
				tryAgain();
			}else if(obie.healthMeter > darth.healthMeter && darth.healthMeter <= 0){
				nextLevel();
			}
		}else if (firstChosen == 'yoda' && secondChosen == 'luke') {
			yoda.attackPower += yoda.attackFactor;
			yoda.healthMeter -= luke.attackFactor;
			luke.healthMeter -= yoda.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#yodaapnum').html(yoda.healthMeter);
			$('#lukeapnum').html(luke.healthMeter);
			$('#attackedyoufor').html(luke.attackFactor);
			$('#youattackedfor').html(yoda.attackPower);
			if(yoda.healthMeter <= 0 && luke.healthMeter > 0){
				tryAgain();
			}else if(yoda.healthMeter > luke.healthMeter && luke.healthMeter <= 0){
				nextLevel();
			}
		}else if (firstChosen == 'yoda' && secondChosen == 'obie') {
			yoda.attackPower += yoda.attackFactor;
			yoda.healthMeter -= obie.attackFactor;
			obie.healthMeter -= yoda.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#yodaapnum').html(yoda.healthMeter);
			$('#obieapnum').html(obie.healthMeter);
			$('#attackedyoufor').html(obie.attackFactor);
			$('#youattackedfor').html(yoda.attackPower);
			if(yoda.healthMeter <= 0 && obie.healthMeter > 0){
				tryAgain();
			}else if(yoda.healthMeter > obie.healthMeter && obie.healthMeter <= 0){
				nextLevel();
			}
		}else if (firstChosen == 'yoda' && secondChosen == 'darth') {
			yoda.attackPower += yoda.attackFactor;
			yoda.healthMeter -= darth.attackFactor;
			darth.healthMeter -= yoda.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#yodaapnum').html(yoda.healthMeter);
			$('#darthapnum').html(darth.healthMeter);
			$('#attackedyoufor').html(darth.attackFactor);
			$('#youattackedfor').text(yoda.attackPower);
			if(yoda.healthMeter <= 0 && darth.healthMeter > 0){
				tryAgain();
			}else if(yoda.healthMeter > darth.healthMeter && darth.healthMeter <= 0){
				nextLevel();
			}
		}else if (firstChosen == 'darth' && secondChosen == 'luke') {
			darth.attackPower += darth.attackFactor;
			darth.healthMeter -= luke.attackFactor;
			luke.healthMeter -= darth.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#darthapnum').html(darth.healthMeter);
			$('#lukeapnum').html(luke.healthMeter);
			$('#attackedyoufor').html(luke.attackFactor);
			$('#youattackedfor').html(darth.attackPower);
			if(darth.healthMeter <= 0 && luke.healthMeter > 0){
				tryAgain();
			}else if(darth.healthMeter > luke.healthMeter && luke.healthMeter <= 0){
				nextLevel();
			}
		}else if (firstChosen == 'darth' && secondChosen == 'obie') {
			darth.attackPower += darth.attackFactor;
			darth.healthMeter -= obie.attackFactor;
			obie.healthMeter -= darth.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#darthapnum').html(darth.healthMeter);
			$('#obieapnum').html(obie.healthMeter);
			$('#attackedyoufor').html(obie.attackFactor);
			$('#youattackedfor').html(darth.attackPower);
			if(darth.healthMeter <= 0 && obie.healthMeter > 0){
				tryAgain();
			}else if(darth.healthMeter > obie.healthMeter && obie.healthMeter <= 0){
				nextLevel();
			}
		}else if (firstChosen == 'darth' && secondChosen == 'yoda') {
			darth.attackPower += darth.attackFactor;
			darth.healthMeter -= yoda.attackFactor;
			yoda.healthMeter -= darth.attackPower;
			$('#attacks').show();
			$('#attacked').show();
			$('#darthapnum').html(darth.healthMeter);
			$('#yodaapnum').html(yoda.healthMeter);
			$('#attackedyoufor').html(yoda.attackFactor);
			$('#youattackedfor').html(darth.attackPower);
			if(darth.healthMeter <= 0 && yoda.healthMeter > 0){
				tryAgain();
			}else if(darth.healthMeter > yoda.healthMeter && yoda.healthMeter <= 0){
				nextLevel();
			}
		}
	}

	$('#attack').on('click', function () {
		
		if(isFirstChosen && isSecondChosen){
	    	fight();
	    }
	});
});