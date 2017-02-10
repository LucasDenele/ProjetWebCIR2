define(['phaser'],function(phaser){
	var _preload = {
		preload:function(){
			console.log('Preload');

			let loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
			
			game.load.image('sky', 'js/assets/sky.png');
	    	game.load.image('ground', 'js/assets/platform.png');
	    	game.load.image('star', 'js/assets/star.png');
	    	game.load.spritesheet('dude', 'js/assets/dude.png', 32, 48);

			game.state.start('create');
		}
	}

	return _preload;
});