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
        
        //Déclaration Pièces + Items
        
        /********************************* Cuisine ***************************************/
        /**/this._kitchen = new Room(game, 0);                                         /**/
        /**/                                                                           /**/
        /**/var item = new Item(game);                                                 /**/
        /**/item.setObjectType(game, 4);                                               /**/
        /**/item.setX(8);                                                              /**/
        /**/item.setY(50);                                                             /**/
        /**/game.physics.arcade.enable(item.sprite);                                   /**/
        /**/this._kitchen.addItem(item);                                               /**/
        /**/                                                                           /**/
        /**/item = new Item(game);                                                     /**/
        /**/item.setObjectType(game, 5);                                               /**/
        /**/item.setX(200);                                                            /**/
        /**/item.setY(30);                                                             /**/
        /**/game.physics.arcade.enable(item.sprite);                                   /**/
        /**/this._kitchen.addItem(item);                                               /**/
        /**/                                                                           /**/
        /**/item = new Item(game);                                                     /**/
        /**/item.setObjectType(game, 6);                                               /**/
        /**/item.setX(4);                                                              /**/
        /**/item.setY(330);                                                            /**/
        /**/game.physics.arcade.enable(item.sprite);                                   /**/
        /**/this._kitchen.addItem(item);                                               /**/
        /**/                                                                           /**/
        /**/this._kitchen.addLamp(70, 60, 200);                                        /**/
        /**/this._kitchen.addLamp(125, 280, 170);                                      /**/
        /**/this._kitchen.addSwitch(268, 8);                                           /**/
        /********************************* Cuisine ***************************************/
        
        /****************************** Salle de Bain ************************************/
        this._bathroom = new Room(game, 1);
        this._bathroom.addLamp(80, 470, 150);
        this._bathroom.addSwitch(268, 604);
        
        this._bedroom = new Room(game, 2);
        this._bedroom.addLamp(550, 440, 200);
        this._bedroom.addSwitch(480, 605);
        
        this.cellar = new Room(game, 3);
        this.cellar.addLamp(520, 260, 130);
        this.cellar.addSwitch(571, 372);
        
        this._livingRoom = new Room(game, 4);
        this._livingRoom.addLamp(585, 60, 200);
        this._livingRoom.addLamp(390, 50, 150);
        this._livingRoom.addLamp(310, 240, 150);
        this._livingRoom.addLamp(310, 440, 150);
        this._livingRoom.addSwitch(765, 8);
        this._livingRoom.addSwitch(300, 380);
        
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