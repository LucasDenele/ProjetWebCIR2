define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Lvl1');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.jpg');
		game.load.image('backButton', 'assets/buttons/back.png');
		game.load.image('lamp', 'assets/images.png');
        game.load.spritesheet('npc', 'assets/npc.png', 33, 37);

	}

	return preload;
});