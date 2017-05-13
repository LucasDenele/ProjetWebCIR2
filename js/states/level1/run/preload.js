define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Lvl1');
		
		game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

        //Backgrounds
		game.load.image('background', 'assets/background.jpg');
        
        //Icons Shop
        game.load.image('Light_UP1','assets/icons/Light_up1.png');
        game.load.image('heat_UP1','assets/icons/heat_up1.png');
        game.load.image('computer_UP1','assets/icons/computer_up1.png');
        game.load.image('television_UP1','assets/icons/television_up1.png');
        game.load.image('washing_UP1','assets/icons/washing_machine_up1.png');
        game.load.image('bathroom_UP1','assets/icons/bathroom_up1.png');
        game.load.image('oven_UP1','assets/icons/oven_up1.png');
        
        game.load.image('Light_UP2','assets/icons/Light_up2.png');
        game.load.image('heat_UP2','assets/icons/heat_up2.png');
        game.load.image('computer_UP2','assets/icons/computer_up2.png');
        game.load.image('television_UP2','assets/icons/television_up2.png');
        game.load.image('washing_UP2','assets/icons/washing_machine_up2.png');
        game.load.image('bathroom_UP2','assets/icons/bathroom_up2.png');
        game.load.image('oven_UP2','assets/icons/oven_up2.png');
        
        game.load.image('Light_UP3','assets/icons/Light_up3.png');
        game.load.image('heat_UP3','assets/icons/heat_up3.png');
        game.load.image('computer_UP3','assets/icons/computer_up3.png');
        game.load.image('television_UP3','assets/icons/television_up3.png');
        game.load.image('washing_UP3','assets/icons/washing_machine_up3.png');
        game.load.image('bathroom_UP3','assets/icons/bathroom_up3.png');
        game.load.image('oven_UP3','assets/icons/oven_up3.png');
        
        //buttons
        game.load.spritesheet('backButton', 'assets/buttons/back.png', 114, 40);
        
        //Spritesheets pnj + items
        game.load.spritesheet('npc', 'assets/spritesheets/npc.png', 33, 37);
        game.load.spritesheet('tv', 'assets/spritesheets/tv.png', 264, 200);
        game.load.spritesheet('washmach', 'assets/spritesheets/washmach.png', 515, 569);
        game.load.spritesheet('pc', 'assets/spritesheets/pc.png', 250, 150);
        game.load.spritesheet('sink', 'assets/spritesheets/sink.png', 25, 95);


	}

	return preload;
});