define(['phaser'], function(phaser){
	var create = function(game){
		console.log('Create Lvl3');
        this._soundtrack = game.add.audio('theme');
        this._soundtrack.play();
        
		function backToMenu(){
            this._soundtrack.stop();
			game.state.start('home');
		} 
        
        function upgrade(button){
                        switch(button.id){
                case 0://lamp
                    console.log('id 0');
                    if(this._rooms[0]._lampsLevel < 3){
                        this._rooms.forEach((room) => room.lampsLevelUp());
                        button.setFrames(this._rooms[0]._lampsLevel-1);
                    }
                    break;
                case 1://heat
                    console.log('id 1');
                    this._rooms.forEach((room) => room._items.forEach( (item) => { 
                        if((item.getType() == 7 || item.getType() == 6) && item.getLevel() < 3){ 
                        item.setLevel(item.getLevel()+1);
                        button.setFrames(item.getLevel()-1); 
                    }}))
                    break;
                case 2://computer
                    console.log('id 2');
                    this._rooms.forEach((room) => room._items.forEach( (item) => { 
                        if(item.getType() == 2 && item.getLevel() < 3){ 
                        item.setLevel(item.getLevel()+1);
                        button.setFrames(item.getLevel()-1); 
                    }}))
                    break;
                case 3://tv
                    console.log('id 3');
                    this._rooms.forEach((room) => room._items.forEach( (item) => { 
                        if(item.getType() == 1 && item.getLevel() < 3){ 
                        item.setLevel(item.getLevel()+1);
                        button.setFrames(item.getLevel()-1); 
                    }}))
                    break;
                case 4://washmach
                    console.log('id 4');
                    this._rooms.forEach((room) => room._items.forEach( (item) => { 
                        if(item.getType() == 3 && item.getLevel() < 3){ 
                        item.setLevel(item.getLevel()+1);
                        button.setFrames(item.getLevel()-1); 
                    }}))
                    break;
                case 5://water
                    console.log('id 5');
                    this._rooms.forEach((room) => room._items.forEach( (item) => { 
                        if((item.getType() == 4 || item.getType() == 8 || item.getType() == 9) && item.getLevel() < 3){ 
                        item.setLevel(item.getLevel()+1);
                        button.setFrames(item.getLevel()-1); 
                    }}))
                    break;
                case 6://oven
                    console.log('id 6');
                    this._rooms.forEach((room) => room._items.forEach( (item) => { 
                        if(item.getType() == 5 && item.getLevel() < 3){ 
                        item.setLevel(item.getLevel()+1);
                        button.setFrames(item.getLevel()-1); 
                    }}))
                    break;
            }
        }
        
        //Activation arcade pour collisions
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Déclaration Backgrounds
        game.stage.backgroundColor="#363942";
		game.add.sprite(0, 0, 'background');
        
        //Variables
        this._soldeVar = 1000;
        this._revenusVar = 100;
        this._consomationVar = 0;
        this._scoreVar = 0;
        this._timer = (new Date()).getTime();
        this._timer2 = this._timer;
        
        //Déclaration Textes
		game.add.text(900, 20, 'Niveau 3', {font: '30px Calibri', fill: '#ffffff', fontStyle: 'italic'});
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
        
        //Mise en place de la hitbox de la map
        game.add.tilemap('hitbox');
	    let starGrid = new Array();
	    let count = 0
		for(var i=0; i<80; ++i){
        	starGrid.push(new Array());
        	for(var j=0; j<100; ++j){
            	starGrid[i].push(game.cache.getTilemapData('hitbox').data.layers[0].data[count])
            	count++;
			}
    	}
        
        //Déclaration Pièces + Items
        var item;
        this._rooms = new Array();
        /********************************* Cuisine ***************************************/
        this._kitchen = new Room(game, 0);
        //Lavabo
        item = new Item(game, 4);
        item.setX(8);
        item.setY(50);
        game.physics.arcade.enable(item.sprite);
        this._kitchen.addItem(item);
        //Four
        item = new Item(game, 5);
        item.setX(200);
        item.setY(30);
        game.physics.arcade.enable(item.sprite);
        this._kitchen.addItem(item);
        //Radiateur
        item = new Item(game, 6);
        item.setX(4);
        item.setY(330);
        game.physics.arcade.enable(item.sprite);
        this._kitchen.addItem(item);
        //Lampes
        this._kitchen.addLamp(70, 60, 200);
        this._kitchen.addLamp(125, 280, 170);
        this._kitchen.addSwitch(268, 8);
        //Hitbox pièce
        this._kitchen.addHitbox(0, 0, 296, 440);
        //Ajout à l'appartement
        this._rooms.push(this._kitchen);
        /********************************* Cuisine ***************************************/
        
        /****************************** Salle de Bain ************************************/
        this._bathroom = new Room(game, 1);
        //baignoire
        item = new Item(game, 8);
        item.setX(8);
        item.setY(567);
        game.physics.arcade.enable(item.sprite);
        this._bathroom.addItem(item);
        //Lavabo
        item = new Item(game, 9);
        item.setX(40);
        item.setY(448);
        game.physics.arcade.enable(item.sprite);
        this._bathroom.addItem(item);
        //Radiateur
        item = new Item(game, 7);
        item.setX(180);
        item.setY(445);
        game.physics.arcade.enable(item.sprite);
        this._bathroom.addItem(item);
        //Lampes
        this._bathroom.addLamp(80, 470, 150);
        this._bathroom.addSwitch(268, 604);
        //Hitbox
        this._bathroom.addHitbox(8, 448, 292-8, 632-448);
        //Ajout à l'appartement
        this._rooms.push(this._bathroom);
        /****************************** Salle de Bain ************************************/
        
        
        /********************************* Chambre ***************************************/
        this._bedroom = new Room(game, 2);
        //Pc
        item = new Item(game, 2);
        item.setX(710);
        item.setY(395);
        game.physics.arcade.enable(item.sprite);
        this._bedroom.addItem(item);
        //Radiateur
        item = new Item(game, 7);
        item.setX(570);
        item.sprite.scale.y = -item.sprite.scale.y;
        item.setY(632);
        game.physics.arcade.enable(item.sprite);
        this._bedroom.addItem(item);
        //Lampes
        this._bedroom.addLamp(550, 440, 200);
        this._bedroom.addSwitch(480, 605);
        //Hitbox
        this._bedroom.addHitbox(480, 408, 792-480, 632-408);
        //Ajout à l'appartement
        this._rooms.push(this._bedroom);
        /********************************* Chambre ***************************************/
        
        /********************************* Cellier ***************************************/
        this._cellar = new Room(game, 3);
        //Machine
        item = new Item(game, 3);
        item.setX(480);
        item.setY(265);
        game.physics.arcade.enable(item.sprite);
        this._cellar.addItem(item);
        //Lampes
        this._cellar.addLamp(520, 260, 130);
        this._cellar.addSwitch(571, 372);
        //Hitbox
        this._cellar.addHitbox(480, 264, 792-480, 400-264);
        //Ajout à l'appartement
        this._rooms.push(this._cellar);
        /********************************* Cellier ***************************************/
        
        /********************************** Salon ****************************************/
        this._livingRoom = new Room(game, 4);
        //Tv
        item = new Item(game, 1);
        item.setX(640);
        item.setY(50);
        game.physics.arcade.enable(item.sprite);
        this._livingRoom.addItem(item);
        //Radiateur vertical
        item = new Item(game, 6);
        item.setX(300);
        item.setY(200);
        game.physics.arcade.enable(item.sprite);
        this._livingRoom.addItem(item);
        //Radiateur Horizontal
        item = new Item(game, 7);
        item.setX(450);
        item.setY(8);
        game.physics.arcade.enable(item.sprite);
        this._livingRoom.addItem(item);
        //Lampes
        this._livingRoom.addLamp(585, 60, 200);
        this._livingRoom.addLamp(390, 50, 150);
        this._livingRoom.addLamp(310, 240, 150);
        this._livingRoom.addLamp(310, 440, 150);
        this._livingRoom.addSwitch(765, 8);
        this._livingRoom.addSwitch(300, 380);
        //Hitbox
        this._livingRoom.addHitbox(303, 8, 791-303, 254-8);
        this._livingRoom.addHitbox(303, 254, 472-303, 631-254);
        //Ajout à l'appartement
        this._rooms.push(this._livingRoom);
        /********************************** Salon ****************************************/
                
        //Déclaration du PNJ
        this._npc = (new Npc(game, 368, 544, 
							    [[25,56,'up'],
						    	[62,1,'up'],
						    	[55,34,'right'],
								[91,70,'down'],
						    	[33,68,'right'],
						    	[62,33,'up'],
								[92,53,'up'],
						    	[0,71, 'down'],
						    	[4,58, 'up'],
						    	[85,11, 'up'],
						    	[24,6, 'up'],
						    	[5,9, 'left']]
					));


        //Lancement du pathFinding
        this._easyStar = new EasyStar.js();
		this._easyStar.setGrid(starGrid);
		this._easyStar.setAcceptableTiles([0]);
		this._easyStar.disableDiagonals();

        this.setupPath = function(npcX , npcY, destinationX, destinationY){
            this._easyStar.findPath(npcX , npcY, destinationX, destinationY, function( path ) {
            	//if(path == null)console.log('ca pue');
                this._path = path;
            }.bind(this));
            this._easyStar.calculate();
        }
        
        let actualPosGrid = this._npc.getPosGrid();
        let nextPosGrid = this._npc.getNextPosGrid();
        this._view = nextPosGrid[2];
        console.log(nextPosGrid);
        this.setupPath(actualPosGrid[0], actualPosGrid[1], nextPosGrid[0], nextPosGrid[1]);
        this._count = 0;
        this._check = false;
	}

	return create;
});