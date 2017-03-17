define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Options');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

<<<<<<< HEAD
		game.load.image('background', 'assets/Creditsbackground.gif');
=======
		game.load.image('background', 'assets/background.jpg');
>>>>>>> fe91121f553c9463877a0add922b8436827f742f
		game.load.image('backButton', 'assets/back.png');
		game.load.image('briquet', 'assets/Credits/briquet.jpg');
		game.load.image('carlier', 'assets/Credits/carlier.jpg');
		game.load.image('decolnet', 'assets/Credits/decolnet.jpg');
		game.load.image('denele', 'assets/Credits/denele.jpg');

	}

	return preload;
});