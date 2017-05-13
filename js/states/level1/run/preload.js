define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Lvl1');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.image('background', 'assets/background.jpg');
        game.load.image('interfaceBack','assets/greyback.jpg');
        game.load.image('Light_UP','assets/Light_up.png');
        game.load.image('heat_UP','assets/heat_up.png');
        game.load.image('computer_UP','assets/computer_up.png');
        game.load.image('television_UP','assets/television_up.png');
        game.load.image('washing_UP','assets/washing_machine_up.png');
        game.load.image('bathroom_UP','assets/bathroom_up.png');
		game.load.spritesheet('backButton', 'assets/buttons/back.png',114,40);

	}

	return preload;
});