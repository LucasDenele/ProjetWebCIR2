define(['phaser'],function(phaser){
	var create = function(game){

		function backToMenu(){
			game.state.start('home');
		}

		//Ajout du fond d'écran :
		this._background = game.add.sprite(0,0,'background');
		this._background.width = game.width;
		this._background.height = game.height;

		game.add.text(10, 10, 'Credits :', {font: '30px Courier', fill: '#000000'});
		game.add.text(50, 50, 'Jeu de :', {font: '30px Courier', fill: '#000000'});
		this._briquet = game.add.text(90, 90, '- Thomas Briquet', {font: '30px Courier', fill: '#000000'});
		this._carlier = game.add.text(130, 130, '- Anthony Carlier', {font: '30px Courier', fill: '#000000'});
		this._decolnet = game.add.text(170, 170, '- Timothée de Colnet', {font: '30px Courier', fill: '#000000'});
		this._denele = game.add.text(210, 210, '- Lucas Denèle', {font: '30px Courier', fill: '#000000'});

		this._briquet.inputEnabled = true;
		this._carlier.inputEnabled = true;
		this._decolnet.inputEnabled = true;
		this._denele.inputEnabled = true;
		
		//Ajout du bouton de retour au menu :
		this._backButton = game.add.button(0, 0, 'backButton', backToMenu, this, 1, 0, 2);
		this._backButton.centerX = game.width - this._backButton.width;
		this._backButton.centerY = game.height - this._backButton.height;

	}
	return create;
});