define(['phaser'], function(phaser){
	var create = function(game){
		console.log('Create Lvl1');

		function backToMenu(){
			game.state.start('home');
		}
        
        function upgrade(button){
			switch(button.id){
                case 0:
                    //button.setFrames(1);
                    console.log('id 0');
                    break;
                case 1:
                    console.log('id 1');
                    break;
                case 2:
                    console.log('id 2');
                    break;
                case 3:
                    console.log('id 3');
                    break;
                case 4:
                    console.log('id 4');
                    break;
                case 5:
                    console.log('id 5');
                    break;
                case 6:
                    console.log('id 6');
                    break;
            }
		}
        
        //Déclaration Backgrounds
        game.stage.backgroundColor="#363942";
        
		this._gameLocation = game.add.sprite(0,0,'background');
        this._gameLocation.width = 800;
        this._gameLocation.length = 640;
        
        //Variables
        this._soldeVar = 0;
        this._revenusVar = 500;
        this._consomationVar = 20;
        this._consomationNew = 20;
        this._scoreVar = 0;
        this._timer = (new Date()).getTime();
        this._timer2 = this._timer;
        
        //Déclaration Textes
		game.add.text(900, 20, 'Niveau 1', {font: '30px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        this._solde = game.add.text(840, 100, 'Solde : '+this._soldeVar+' €', {font: '20px Calibri', fill: '#ffffff'});
        this._revenus = game.add.text(840, 175, 'Revenus : '+this._revenusVar+' €', {font: '20px Calibri', fill: '#ffffff'});
        this._consomation = game.add.text(840, 250, 'Consommation : '+this._consomationVar+' kWh', {font: '20px Calibri', fill: '#ffffff'});
        this._score = game.add.text(840, 325, 'Score : '+this._scoreVar, {font: '20px Calibri', fill: '#ffffff'});
        game.add.text(830, 500, 'Améliorations Disponibles', {font: '30px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        
        //Déclaration Boutons Shop
        this._light_Upgrade = game.add.button(830, 550, 'Light_UP', upgrade, this, 0);
        this._heat_upgrade = game.add.button(890, 550, 'heat_UP', upgrade, this, 0);
        this._computer_upgrade = game.add.button(950, 550, 'computer_UP', upgrade, this, 0);
        this._television_upgrade = game.add.button(1010, 550, 'television_UP', upgrade, this, 0);
        this._washing_upgrade = game.add.button(1070, 550, 'washing_UP', upgrade, this, 0);
        this._bathroom_upgrade = game.add.button(1130, 550, 'bathroom_UP', upgrade, this, 0);
        this._oven_upgrade = game.add.button(1190, 550, 'oven_UP', upgrade, this, 0);
        this._light_Upgrade.id = 0;
        this._heat_upgrade.id = 1;
        this._computer_upgrade.id = 2;
        this._television_upgrade.id = 3;
        this._washing_upgrade.id = 4;
        this._bathroom_upgrade.id = 5;
        this._oven_upgrade.id = 6;
        
        //Retour Menu
		this._back = game.add.button(0,0, 'backButton', backToMenu, this, 1, 0, 2);
        this._back.centerX = game.width - this._back.width/2 - 10; // -10 pour éviter qu'il colle à la bordure
		this._back.centerY = game.height - this._back.height/2 - 570;
        
        //Activation arcade pour collisions
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Déclaration Pièces
        this._kitchen = new Room(game, 0);
        this._kitchen.addLamp(125, 280, 150);
        this._kitchen.addLamp(70, 50, 200);
        this._kitchen.addSwitch(268, 170);
        //this._room.addSwitch(200, 400);
        
        //Déclaration des Items
        this._tv = new Item(game);
        this._tv.setObjectType(game, 1);
        this._tv.setX(640);
        this._tv.setY(50);
        game.physics.arcade.enable(this._tv.sprite);
        //this._room.addItem(this._tv);
        
        this._pc = new Item(game);
        this._pc.setObjectType(game, 2);
        this._pc.setX(710);
        this._pc.setY(395);
        game.physics.arcade.enable(this._pc.sprite);
        ///this._room.addItem(this._pc);
        
        this._wash = new Item(game);
        this._wash.setObjectType(game, 3);
        this._wash.setX(480);
        this._wash.setY(265);
        game.physics.arcade.enable(this._wash.sprite);
        //this._room.addItem(this._wash);
        
        this._sink_k = new Item(game);
        this._sink_k.setObjectType(game, 4);
        this._sink_k.setX(8);
        this._sink_k.setY(50);
        game.physics.arcade.enable(this._sink_k.sprite);
        //this._room.addItem(this._sink_k);
        
        this._oven = new Item(game);
        this._oven.setObjectType(game, 5);
        this._oven.setX(200);
        this._oven.setY(30);
        game.physics.arcade.enable(this._oven.sprite);
        //this._room.addItem(this._oven);
        
        this._heat = new Item(game);
        this._heat.setObjectType(game, 6);
        this._heat.setX(300);
        this._heat.setY(200);
        game.physics.arcade.enable(this._heat.sprite);
        //this._room.addItem(this._heat);
        
        this._bath = new Item(game);
        this._bath.setObjectType(game, 8);
        this._bath.setX(8);
        this._bath.setY(567);
        game.physics.arcade.enable(this._bath.sprite);
        //this._room.addItem(this._bath);
        
        this._sink_b = new Item(game);
        this._sink_b.setObjectType(game, 9);
        this._sink_b.setX(40);
        this._sink_b.setY(448);
        game.physics.arcade.enable(this._sink_b.sprite);
        //this._room.addItem(this._sink_b);
        
        this._heat1 = new Item(game);//Cuisine
        this._heat1.setObjectType(game, 6);
        this._heat1.setX(4);
        this._heat1.setY(330);
        game.physics.arcade.enable(this._heat1.sprite);
        //this._room.addItem(this._heat1);
        
        this._heat2 = new Item(game);//Chambre
        this._heat2.setObjectType(game, 7);
        this._heat2.setX(570);
        this._heat2.sprite.scale.y = -this._heat2.sprite.scale.y;
        this._heat2.setY(632);
        game.physics.arcade.enable(this._heat2.sprite);
        //this._room.addItem(this._heat2);
        
        this._heat3 = new Item(game);//SdB
        this._heat3.setObjectType(game, 7);
        this._heat3.setX(180);
        this._heat3.setY(445);
        game.physics.arcade.enable(this._heat3.sprite);
        //this._room.addItem(this._heat3);
        
        this._heat4 = new Item(game);//Salon
        this._heat4.setObjectType(game, 7);
        this._heat4.setX(450);
        this._heat4.setY(8);
        game.physics.arcade.enable(this._heat4.sprite);
        //this._room.addItem(this._heat4);
        
        //Déclaration du PNJ
        this._npc = new Npc(game);
        game.physics.arcade.enable(this._npc.sprite);
        
        //Déclaration commandes PNJ
        this._cursors = game.input.keyboard.createCursorKeys();
        
	}

	return create;
});