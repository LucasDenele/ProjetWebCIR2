define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Lvl1');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.jpg');
        game.load.spritesheet('backButton', 'assets/buttons/back.png', 114, 40);
        game.load.spritesheet('npc', 'assets/spritesheets/npc.png', 33, 37);
        game.load.spritesheet('tv', 'assets/spritesheets/tv.png', 264, 200);
        game.load.spritesheet('washmach', 'assets/spritesheets/washmach.png', 515, 569);
        game.load.spritesheet('pc', 'assets/spritesheets/pc.png', 250, 150);
        

	}

	return preload;
});