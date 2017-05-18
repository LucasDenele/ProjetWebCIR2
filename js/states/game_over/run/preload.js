define(['phaser'],function(phaser){
	var preload = function(game){
		
        game.load.audio('looser', ['assets/music/looser.mp3', 'assets/music/looser.ogg']);
		game.load.image('background', 'assets/backgrounds/gameOver.png');
		game.load.spritesheet('backButton', 'assets/buttons/back.png',114,40);
		game.load.spritesheet('restartButton', 'assets/buttons/restart.png',118,40);

    }

	return preload;
});