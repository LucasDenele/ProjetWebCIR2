define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Home');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.jpg');
	    
	    game.load.spritesheet('Optionsbutton', 'assets/buttons/options.png',118,40);
	    game.load.spritesheet('Creditsbutton', 'assets/buttons/credits.png', 110, 40);
        game.load.image('Helpbutton','assets/buttons/Help.png');
        
        //Boutons pour les niveaux
        game.load.spritesheet('Lvl1button', 'assets/buttons/level1.png', 107, 40);
        game.load.spritesheet('Lvl2button', 'assets/buttons/level2.png', 107, 40);
        game.load.spritesheet('Lvl3button', 'assets/buttons/level3.png', 107, 40);
        game.load.spritesheet('Lvl4button', 'assets/buttons/level4.png', 107, 40);
	}

	return preload;
});