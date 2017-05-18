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
        this._load.destroy();
        game.stage.backgroundColor="#363942";
        
		this._gameLocation = game.add.sprite(200, 160, 'background');
        this._gameLocation.width = 400;
        this._gameLocation.length = 320;
        
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
        game.add.text(830, 400, 'Améliorations Disponibles', {font: '30px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        
        //Déclaration Boutons Shop
        this._light_Upgrade = game.add.button(830, 550, 'Light_UP', upgrade, this, 0);
        this._heat_upgrade = game.add.button(920, 550, 'heat_UP', upgrade, this, 0);
        this._computer_upgrade = game.add.button(1010, 550, 'computer_UP', upgrade, this, 0);
        this._bathroom_upgrade = game.add.button(1100, 550, 'bathroom_UP', upgrade, this, 0);
        this._oven_upgrade = game.add.button(1190, 550, 'oven_UP', upgrade, this, 0);
        this._light_Upgrade.id = 0;
        this._heat_upgrade.id = 1;
        this._computer_upgrade.id = 2;
        this._bathroom_upgrade.id = 3;
        this._oven_upgrade.id = 4;
        
        //Déclaration des textes d'amélioration
        this._light_text = game.add.sprite(830,450,'light_text');
        this._heat_text = game.add.sprite(860,450,'heat_text');
        this._computer_text = game.add.sprite(870,450,'computer_text');
        this._water_text = game.add.sprite(870,450,'water_text');
        this._oven_text = game.add.sprite(870,450,'oven_text');

        this._light_text.kill();
        this._heat_text.kill();
        this._computer_text.kill();
        this._water_text.kill();
        this._oven_text.kill();
        
        
        //Retour Menu
		this._back = game.add.button(0,0, 'backButton', backToMenu, this, 1, 0, 2);
        this._back.centerX = game.width - this._back.width/2 - 10; // -10 pour éviter qu'il colle à la bordure
		this._back.centerY = game.height - this._back.height/2 - 570;
        
        //Activation arcade pour collisions
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Déclaration Pièces + Items
        var item;
        /********************************* Cuisine ***************************************/
        this._kitchen = new Room(game, 0);
        //Lavabo
        item = new Item(game);
        item.setObjectType(game, 4);
        item.setX(208);
        item.setY(210);
        game.physics.arcade.enable(item.sprite);
        this._kitchen.addItem(item);
        //Four
        item = new Item(game);
        item.setObjectType(game, 5);
        item.setX(270);
        item.setY(185);
        game.physics.arcade.enable(item.sprite);
        this._kitchen.addItem(item);
        //Radiateur
        item = new Item(game);
        item.setObjectType(game, 6);
        item.setX(204);
        item.setY(350);
        game.physics.arcade.enable(item.sprite);
        this._kitchen.addItem(item);
        
        this._kitchen.addLamp(220, 250, 150);
        this._kitchen.addSwitch(340, 164);
        /********************************* Cuisine ***************************************/
                
        /********************************* Chambre ***************************************/
        this._bedroom = new Room(game, 1);
        //Pc
        item = new Item(game);
        item.setObjectType(game, 2);
        item.setX(463);
        item.setY(150);
        game.physics.arcade.enable(item.sprite);
        this._bedroom.addItem(item);
        //Radiateur
        item = new Item(game);//Chambre
        item.setObjectType(game, 7);
        item.setX(445);
        item.setY(475);
        item.sprite.scale.y = -item.sprite.scale.y;
        game.physics.arcade.enable(item.sprite);
        this._bedroom.addItem(item);
        
        this._bedroom.addLamp(380, 200, 200);
        this._bedroom.addSwitch(567, 164);
        /********************************* Chambre ***************************************/
                        
        //Déclaration du PNJ
        this._npc = new Npc(game, 300, 250);
        game.physics.arcade.enable(this._npc.sprite);

        //Déclaration commandes PNJ
        this._cursors = game.input.keyboard.createCursorKeys();
        
	}

	return create;
});