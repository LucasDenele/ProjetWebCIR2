define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Options');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

<<<<<<< HEAD
		game.load.image('background', 'assets/background.jpg');
		game.load.image('backButton', 'assets/back.png');
=======
		game.load.image('background', 'assets/background.gif');
		game.load.image('backButton', 'assets/buttons/back.png');
>>>>>>> 5dcb7db161d2b9a9289caf09b60f37743ed528c1

	}

	return preload;
});