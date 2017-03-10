define(['phaser'],function(phaser){
	var create = function(game){
		console.log('Create Options');

		function backToMenu(){
			game.state.start('home');
		}

		//Ajout du fond d'écran :
		this._background = game.add.sprite(0,0,'background');
		this._background.width = game.width;
		this._background.height = game.height;

		game.add.text(10, 10, 'Options :', {font: '30px Courier', fill: '#ffffff'});
		
		//Ajout du boutton de retour au menu
		this._backButton = game.add.button(700, 500, 'backButton', backToMenu, this, 2, 1, 0);
		this._backButton.centerX = game.width

	}

	return create;
});