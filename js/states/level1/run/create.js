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
        game.add.text(830, 400, 'Améliorations Disponibles', {font: '30px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        
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
        
        //Déclaration des textes d'amélioration
        this._light_text = game.add.sprite(830,450,'light_text');
        this._heat_text = game.add.sprite(860,450,'heat_text');
        this._computer_text = game.add.sprite(870,450,'computer_text');
        this._tv_text = game.add.sprite(870,450,'tv_text');
        this._washing_text = game.add.sprite(870,450,'washing_text');
        this._water_text = game.add.sprite(870,450,'water_text');
        this._oven_text = game.add.sprite(870,450,'oven_text');

        this._light_text.kill();
        this._heat_text.kill();
        this._computer_text.kill();
        this._tv_text.kill();
        this._washing_text.kill();
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
        item.setX(8);
        item.setY(50);
        game.physics.arcade.enable(item.sprite);
        this._kitchen.addItem(item);
        //Four
        item = new Item(game);
        item.setObjectType(game, 5);
        item.setX(200);
        item.setY(30);
        game.physics.arcade.enable(item.sprite);
        this._kitchen.addItem(item);
        //Radiateur
        item = new Item(game);
        item.setObjectType(game, 6);
        item.setX(4);
        item.setY(330);
        game.physics.arcade.enable(item.sprite);
        this._kitchen.addItem(item);
        
        this._kitchen.addLamp(70, 60, 200);
        this._kitchen.addLamp(125, 280, 170);
        this._kitchen.addSwitch(268, 8);
        /********************************* Cuisine ***************************************/
        
        /****************************** Salle de Bain ************************************/
        this._bathroom = new Room(game, 1);
        //baignoire
        item = new Item(game);
        item.setObjectType(game, 8);
        item.setX(8);
        item.setY(567);
        game.physics.arcade.enable(item.sprite);
        this._bathroom.addItem(item);
        //Lavabo
        item = new Item(game);
        item.setObjectType(game, 9);
        item.setX(40);
        item.setY(448);
        game.physics.arcade.enable(item.sprite);
        this._bathroom.addItem(item);
        //Radiateur
        item = new Item(game);
        item.setObjectType(game, 7);
        item.setX(180);
        item.setY(445);
        game.physics.arcade.enable(item.sprite);
        this._bathroom.addItem(item);
        
        this._bathroom.addLamp(80, 470, 150);
        this._bathroom.addSwitch(268, 604);
        /****************************** Salle de Bain ************************************/
        
        
        /********************************* Chambre ***************************************/
        this._bedroom = new Room(game, 2);
        //Pc
        item = new Item(game);
        item.setObjectType(game, 2);
        item.setX(710);
        item.setY(395);
        game.physics.arcade.enable(item.sprite);
        this._bedroom.addItem(item);
        //Radiateur
        item = new Item(game);//Chambre
        item.setObjectType(game, 7);
        item.setX(570);
        item.sprite.scale.y = -item.sprite.scale.y;
        item.setY(632);
        game.physics.arcade.enable(item.sprite);
        this._bedroom.addItem(item);
        
        this._bedroom.addLamp(550, 440, 200);
        this._bedroom.addSwitch(480, 605);
        /********************************* Chambre ***************************************/
        
        /********************************* Cellier ***************************************/
        this._cellar = new Room(game, 3);
        //Machine
        item = new Item(game);
        item.setObjectType(game, 3);
        item.setX(480);
        item.setY(265);
        game.physics.arcade.enable(item.sprite);
        this._cellar.addItem(item);
        
        this._cellar.addLamp(520, 260, 130);
        this._cellar.addSwitch(571, 372);
        /********************************* Cellier ***************************************/
        
        /********************************** Salon ****************************************/
        this._livingRoom = new Room(game, 4);
        //Tv
        item = new Item(game);
        item.setObjectType(game, 1);
        item.setX(640);
        item.setY(50);
        game.physics.arcade.enable(item.sprite);
        this._livingRoom.addItem(item);
        //Radiateur vertical
        item = new Item(game);
        item.setObjectType(game, 6);
        item.setX(300);
        item.setY(200);
        game.physics.arcade.enable(item.sprite);
        this._livingRoom.addItem(item);
        //Radiateur Horizontal
        item = new Item(game);
        item.setObjectType(game, 7);
        item.setX(450);
        item.setY(8);
        game.physics.arcade.enable(item.sprite);
        this._livingRoom.addItem(item);
        
        this._livingRoom.addLamp(585, 60, 200);
        this._livingRoom.addLamp(390, 50, 150);
        this._livingRoom.addLamp(310, 240, 150);
        this._livingRoom.addLamp(310, 440, 150);
        this._livingRoom.addSwitch(765, 8);
        this._livingRoom.addSwitch(300, 380);
        /********************************** Salon ****************************************/
                
        //Déclaration du PNJ
        this._npc = new Npc(game);
        game.physics.arcade.enable(this._npc.sprite);

        //Déclaration commandes PNJ
        this._cursors = game.input.keyboard.createCursorKeys();
        
	}

	return create;
});