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
        
        //Déclaration piece test
        this._room = new Room(game, 0);
        
        //Déclaration des Items
        this._tv = new Item(game);
        this._tv.setObjectType(game, 1);
        this._tv.setX(200);
        game.physics.arcade.enable(this._tv.sprite);
        this._room.addItem(this._tv);
        
        this._pc = new Item(game);
        this._pc.setObjectType(game, 2);
        this._pc.setX(100);
        game.physics.arcade.enable(this._pc.sprite);
        this._room.addItem(this._pc);
        
        this._wash = new Item(game);
        this._wash.setObjectType(game, 3);
        this._wash.setY(100);
        game.physics.arcade.enable(this._wash.sprite);
        this._room.addItem(this._wash);
        
        this._sink = new Item(game);
        this._sink.setObjectType(game, 4);
        this._sink.setX(100);
        this._sink.setY(100);
        game.physics.arcade.enable(this._sink.sprite);
        this._room.addItem(this._sink);
        
        this._oven = new Item(game);
        this._oven.setObjectType(game, 5);
        this._oven.setX(200);
        this._oven.setY(200);
        game.physics.arcade.enable(this._oven.sprite);
        this._room.addItem(this._oven);
        
        this._heat = new Item(game);
        this._heat.setObjectType(game, 6);
        this._heat.setX(300);
        this._heat.setY(200);
        game.physics.arcade.enable(this._heat.sprite);
        this._room.addItem(this._heat);
        
        //Déclaration du PNJ
        this._npc = new Npc(game);
        game.physics.arcade.enable(this._npc.sprite);
        
        //Déclaration commandes PNJ
        this._cursors = game.input.keyboard.createCursorKeys();
        
	}

	return create;
});