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
	    }
	});
	
	function fight(){
		
		if (this.firstChosen == 'luke' && this.secondChosen == 'obie') {
			luke.attackPower += luke.attackFactor;
			luke.healthMeter -= obie.attackFactor;
			$('#attackedyoufor').html(obie.attackFactor);
			$('#youattackedfor').html(luke.attackPower);
		}else if (this.firstChosen == 'luke' && this.secondChosen == 'yoda') {
			luke.attackPower += luke.attackFactor;
			luke.healthMeter -= yoda.attackFactor;
			$('#attackedyoufor').html(yoda.attackFactor);
			$('#youattackedfor').html(luke.attackPower);
		}else if (this.firstChosen == 'luke' && this.secondChosen == 'darth') {
			luke.attackPower += luke.attackFactor;
			luke.healthMeter -= darth.attackFactor;
			$('#attackedyoufor').html(darth.attackFactor);
			$('#youattackedfor').html(luke.attackPower);
		}else if (this.firstChosen == 'obie' && this.secondChosen == 'luke') {
			obie.attackPower += obie.attackFactor;
			obie.healthMeter -= luke.attackFactor;
			$('#attackedyoufor').html(luke.attackFactor);
			$('#youattackedfor').html(obie.attackPower);
		}else if (this.firstChosen == 'obie' && this.secondChosen == 'yoda') {
			obie.attackPower += obie.attackFactor;
			obie.healthMeter -= yoda.attackFactor;
			$('#attackedyoufor').html(yoda.attackFactor);
			$('#youattackedfor').html(obie.attackPower);
		}else if (this.firstChosen == 'obie' && this.secondChosen == 'darth') {
			obie.attackPower += obie.attackFactor;
			obie.healthMeter -= darth.attackFactor;
			$('#attackedyoufor').html(darth.attackFactor);
			$('#youattackedfor').html(obie.attackPower);
		}else if (this.firstChosen == 'yoda' && this.secondChosen == 'luke') {
			yoda.attackPower += yoda.attackFactor;
			yoda.healthMeter -= luke.attackFactor;
			$('#attackedyoufor').html(luke.attackFactor);
			$('#youattackedfor').html(yoda.attackPower);
		}else if (this.firstChosen == 'yoda' && this.secondChosen == 'obie') {
			yoda.attackPower += yoda.attackFactor;
			yoda.healthMeter -= obie.attackFactor;
			$('#attackedyoufor').html(obie.attackFactor);
			$('#youattackedfor').html(yoda.attackPower);
		}else if (this.firstChosen == 'yoda' && this.secondChosen == 'darth') {
			yoda.attackPower += yoda.attackFactor;
			yoda.healthMeter -= darth.attackFactor;
			$('#attackedyoufor').html(darth.attackFactor);
			$('#youattackedfor').text(yoda.attackPower);
		}else if (this.firstChosen == 'darth' && this.secondChosen == 'luke') {
			darth.attackPower += darth.attackFactor;
			darth.healthMeter -= luke.attackFactor;
			$('#attackedyoufor').html(luke.attackFactor);
			$('#youattackedfor').html(darth.attackPower);
		}else if (this.firstChosen == 'darth' && this.secondChosen == 'obie') {
			darth.attackPower += darth.attackFactor;
			darth.healthMeter -= obie.attackFactor;
			$('#attackedyoufor').html(obie.attackFactor);
			$('#youattackedfor').html(darth.attackPower);
		}else if (this.firstChosen == 'darth' && this.secondChosen == 'yoda') {
			darth.attackPower += darth.attackFactor;
			darth.healthMeter -= yoda.attackFactor;
			$('#attackedyoufor').html(yoda.attackFactor);
			$('#youattackedfor').html(darth.attackPower);
		}
	}

	$('#attack').on('click', function () {
		
		if(isFirstChosen && isSecondChosen){
	    	fight();
	    }
	});
});