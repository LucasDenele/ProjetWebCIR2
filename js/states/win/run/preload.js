define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Game Over');
        game.load.audio('win', ['assets/music/win.mp3', 'assets/music/win.ogg']);
		game.load.image('background', 'assets/background_win.png');
		game.load.spritesheet('backButton', 'assets/buttons/back.png',114,40);
		game.load.spritesheet('restartButton', 'assets/buttons/restart.png',118,40);

    }

	return preload;
});