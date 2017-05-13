define(['phaser', 'NPC', 'ITEM'], function(phaser, NPC, ITEM){
	var create = function(game){
		console.log('Create Lvl2');

	       var gamePause = function(){
                      var gameUnpause = function(){
                        console.log('caca');
                        this._unpauseButton.destroy();
                        game.paused = false;
                      }
		      game.paused = true;
                      this._unpauseButton = game.add.sprite(500,500, 'backButton');
                      this._unpauseButton.events.onInputDown.add(gameUnpause);
		};
        
                //Déclaration Backgrounds
        	this._gameLocation = game.add.sprite(0,0,'background');
                this._gameLocation.width = 800;
                this._gameLocation.length = 640;
                
                //Déclaration Textes
        	game.add.text(810, 10, 'Niveau 2 :', {font: '30px Courier', fill: '#ffffff'});
                game.add.text(840, 100, 'Solde :', {font: '20px Courier', fill: '#ffffff'});
                game.add.text(840, 175, 'Revenus :', {font: '20px Courier', fill: '#ffffff'});
                game.add.text(840, 250, 'Consommation :', {font: '20px Courier', fill: '#ffffff'});
                game.add.text(840, 325, 'Energie gagnée :', {font: '20px Courier', fill: '#ffffff'});
                game.add.text(810, 400, 'Magasin :', {font: '30px Courier', fill: '#ffffff'});
                
                //Déclaration Shop
                this._light_Upgrade = game.add.button(810,460, 'Light_UP');
                this._heat_upgrade = game.add.button(870,460, 'heat_UP');
                this._computer_upgrade = game.add.button(930,460, 'computer_UP');
                this._television_upgrade = game.add.button(990,460, 'television_UP');
                this._washing_upgrade = game.add.button(1050,460, 'washing_UP');
                this._bathroom_upgrade = game.add.button(1110,460, 'bathroom_UP');
                this._oven_upgrade = game.add.button(1170, 460, 'oven_UP');

                //Menu Pause
        	this._back = game.add.button(0,0, 'backButton', gamePause, this, 1, 0, 2);
                this._back.centerX = game.width - this._back.width/2 - 10; // -10 pour éviter qu'il colle à la bordure
        	this._back.centerY = game.height - this._back.height/2 - 570;
                
                //Activation arcade pour collisions
                game.physics.startSystem(Phaser.Physics.ARCADE);
                
                //Déclaration des Items
                this._tv = new Item(game);
                this._tv.setObjectType(game, 1);
                this._tv.setX(200);
                game.physics.arcade.enable(this._tv.sprite);
                
                this._pc = new Item(game);
                this._pc.setObjectType(game, 2);
                this._pc.setX(100);
                game.physics.arcade.enable(this._pc.sprite);
                
                this._wash = new Item(game);
                this._wash.setObjectType(game, 3);
                this._wash.setY(100);
                game.physics.arcade.enable(this._wash.sprite);
                
                //Déclaration du PNJ
                this._npc = new Npc(game);
                game.physics.arcade.enable(this._npc.sprite);
                
                //Déclaration commandes PNJ
                this._cursors = game.input.keyboard.createCursorKeys();
        
	}

	return create;
});