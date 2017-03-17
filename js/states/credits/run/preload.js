define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Options');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/Creditsbackground.gif');
		game.load.image('backButton', 'assets/back.png');
		game.load.image('briquet', 'assets/Credits/briquet.jpg');
		game.load.image('carlier', 'assets/Credits/carlier.jpg');
		game.load.image('decolnet', 'assets/Credits/decolnet.jpg');
		game.load.image('denele', 'assets/Credits/denele.jpg');

	}

	return preload;
});