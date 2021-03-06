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
		
		//Ajout du bouton de retour au menu :
		this._backButton = game.add.button(0, 0, 'backButton', backToMenu, this, 1, 0, 2);
		this._backButton.centerX = game.width - this._backButton.width - 10;
		this._backButton.centerY = game.height - this._backButton.height - 10;

	}

	return create;
});