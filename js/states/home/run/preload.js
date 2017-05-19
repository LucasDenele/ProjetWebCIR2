define(['phaser'],function(phaser){
	var preload = function(game){
		
		game.add.text(80, 150, 'loading...', {font: '30px Calibri', fill: '#ffffff'});

		game.load.image('background', 'assets/backgrounds/background.jpg');
        game.load.image('logo','assets/backgrounds/background1.png');
	    
	    game.load.spritesheet('Optionsbutton', 'assets/buttons/options.png',118,40);
	    game.load.spritesheet('Creditsbutton', 'assets/buttons/credits.png', 110, 40);
        game.load.spritesheet('Helpbutton','assets/buttons/Help.png', 117, 40);
        
        //Boutons pour les niveaux
        game.load.spritesheet('tutobutton', 'assets/buttons/tuto.png', 118, 40);
        game.load.spritesheet('playbutton', 'assets/buttons/play.png', 95, 40);
        
        //Audio
        game.load.audio('menu', 'assets/music/menu.ogg');
	}

	return preload;
});