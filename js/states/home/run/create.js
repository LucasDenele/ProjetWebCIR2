define(['phaser'],function(phaser){
	var create = function(game){

		function launchOptions(){
			game.state.start('options');
		}
		function launchCredits(){
			game.state.start('credits');
		}
		console.log('Create Home');

		game.add.sprite(0,0,'background');
		game.add.text(250, 50, 'LE TITRE DU JEU', {font: '30px Courier', fill: '#ffffff'});
		game.add.button(700, 500, 'Optionsbutton', launchOptions, this, 2, 1, 0);
		game.add.button(0, 500, 'Creditsbutton', launchCredits, this, 2, 1, 0);
	
	}

	return create;
});