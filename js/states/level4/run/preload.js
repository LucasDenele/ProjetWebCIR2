define(['phaser'],function(phaser){
        var preload = function(game){
                console.log('Preload Lvl1');
                
                game.add.text(80, 150, 'loading...', {font: '30px Calibri', fill: '#ffffff'});

        //Backgrounds
                game.load.image('background', 'assets/maps/level.png');
        
        //Icons buttons Shop
        game.load.spritesheet('Light_UP','assets/icons/Light_up.png', 52, 66);
        game.load.spritesheet('heat_UP','assets/icons/heat_up.png', 52, 66);
        game.load.spritesheet('computer_UP','assets/icons/computer_up.png', 52, 66);
        game.load.spritesheet('television_UP','assets/icons/television_up.png', 52, 66);
        game.load.spritesheet('washing_UP','assets/icons/washing_machine_up.png', 52, 66);
        game.load.spritesheet('bathroom_UP', 'assets/icons/bathroom_up.png', 52, 66);
        game.load.spritesheet('oven_UP','assets/icons/oven_up.png', 52, 66);
        
        //bouton retour + lights
        game.load.spritesheet('backButton', 'assets/buttons/back.png', 114, 40);
        game.load.image('light', 'assets/light.png');
        game.load.image('lampOn', 'assets/lampOn.png');
        game.load.image('lampOff', 'assets/lampOff.png');
        
        //Spritesheets pnj + items
        game.load.spritesheet('npc', 'assets/spritesheets/npc.png', 33, 37);
        game.load.spritesheet('tv', 'assets/spritesheets/tv.png', 264, 200);
        game.load.spritesheet('washmach', 'assets/spritesheets/washmach.png', 515, 569);
        game.load.spritesheet('pc', 'assets/spritesheets/pc.png', 250, 150);
        game.load.spritesheet('sink_k', 'assets/spritesheets/sink_k.png', 30, 95);
        game.load.spritesheet('oven', 'assets/spritesheets/oven.png', 736, 782);
        game.load.spritesheet('heat', 'assets/spritesheets/heat.png', 121, 350);
        game.load.spritesheet('heat_turn', 'assets/spritesheets/heat_turn.png', 350, 121);
        game.load.spritesheet('bath', 'assets/spritesheets/bath.png', 32, 61);
        game.load.spritesheet('sink_b', 'assets/spritesheets/sink_b.png', 24, 26);

        }
        
        return preload;
});