define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Lvl3');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

        //Backgrounds
		game.load.image('background', 'assets/background.jpg');
        game.load.image('interfaceBack','assets/icons/greyback.jpg');
        //Icons Shop
        game.load.image('Light_UP','assets/icons/Light_up.png');
        game.load.image('heat_UP','assets/icons/heat_up.png');
        game.load.image('computer_UP','assets/icons/computer_up.png');
        game.load.image('television_UP','assets/icons/television_up.png');
        game.load.image('washing_UP','assets/icons/washing_machine_up.png');
        game.load.image('bathroom_UP','assets/icons/bathroom_up.png');
        //buttons
        game.load.spritesheet('backButton', 'assets/buttons/back.png', 114, 40);
        //Spritesheets pnj + items
        game.load.spritesheet('npc', 'assets/spritesheets/npc.png', 33, 37);
        game.load.spritesheet('tv', 'assets/spritesheets/tv.png', 264, 200);
        game.load.spritesheet('washmach', 'assets/spritesheets/washmach.png', 515, 569);
        game.load.spritesheet('pc', 'assets/spritesheets/pc.png', 250, 150);

	}

	return preload;
});