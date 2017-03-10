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

		game.add.text(10, 10, 'Credits :', {font: '30px Courier', fill: '#ffffff'});
		game.add.text(50, 50, 'Jeu de :', {font: '30px Courier', fill: '#ffffff'});
		this._briquet = game.add.text(90, 90, '- Thomas Briquet', {font: '30px Courier', fill: '#ffffff'});
		this._carlier = game.add.text(130, 130, '- Anthony Carlier', {font: '30px Courier', fill: '#ffffff'});
		this._decolnet = game.add.text(170, 170, '- Timothée de Colnet', {font: '30px Courier', fill: '#ffffff'});
		this._denele = game.add.text(210, 210, '- Lucas Denèle', {font: '30px Courier', fill: '#ffffff'});

		this._briquet.inputEnabled = true;
		this._carlier.inputEnabled = true;
		this._decolnet.inputEnabled = true;
		this._denele.inputEnabled = true;
		
		game.add.button(700, 500, 'backButton', backToMenu, this, 2, 1, 0);

	}
	return create;
});