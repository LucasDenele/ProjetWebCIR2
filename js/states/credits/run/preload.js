define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Options');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.gif');
		game.load.image('backButton', 'assets/back.png');
		game.load.image('briquet', 'assets/briquet.jpg');
		game.load.image('carlier', 'assets/carlier.jpg');
		game.load.image('decolnet', 'assets/decolnet.jpg');
		game.load.image('denele', 'assets/denele.jpg');

	}

	return preload;
});