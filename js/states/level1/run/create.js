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
        
        //Activation arcade pour collisions
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Déclaration Backgrounds
        this._load.destroy();
        game.stage.backgroundColor="#363942";
		game.add.sprite(200, 160, 'background');
        
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
        //Lampes
        this._kitchen.addLamp(220, 250, 150);
        this._kitchen.addSwitch(340, 164);
        //Hitbox pièce
        this._kitchen.addHitbox(0, 0, 296, 440);
        //Ajout à l'appartement
        this._rooms.push(this._kitchen);
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
        //Lampes
        this._bedroom.addLamp(380, 200, 200);
        this._bedroom.addSwitch(567, 164);
        //Hitbox
        this._bedroom.addHitbox(480, 408, 792-480, 632-408);
        //Ajout à l'appartement
        this._rooms.push(this._bedroom);
        /********************************* Chambre ***************************************/
                        
        //Déclaration du PNJ
        this._npc = (new Npc(game, 290, 308, 
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
        
        /******************************** Aides Tuto *************************************/
        
        this._right_arrow = game.add.sprite(0,0,'right_arrow');
        this._right_arrow.centerX = 800;
        this._right_arrow.centerY = 570;
        
        this._down_arrow = game.add.sprite(0,0,'down_arrow');
        this._down_arrow.centerX = 500;
        this._down_arrow.centerY = 125;
        this._down_arrow1 = game.add.sprite(0,0,'down_arrow');
        this._down_arrow1.centerX = 285;
        this._down_arrow1.centerY = 160;
        this._down_arrow2 = game.add.sprite(0,0,'down_arrow');
        this._down_arrow2.centerX = 580;
        this._down_arrow2.centerY = 125;
        
        this._right_arrow1 = game.add.sprite(0,0,'right_arrow');
        this._right_arrow1.centerX = 800;
        this._right_arrow1.centerY = 250;
        
        game.add.text(450, 565, 'Cliquez ici pour améliorer vos appareils', {font: '15px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        game.add.text(280, 75, 'Cliquez ici pour éteindre des appareils', {font: '15px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        game.add.text(650, 200, 'Attention !', {font: '14px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        game.add.text(620, 220, 'La consommation influe', {font: '14px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        game.add.text(620, 240, 'sur vos revenues.', {font: '14px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        game.add.text(620, 280, 'Gardez un solde positif', {font: '14px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        game.add.text(620, 300, 'sinon ce sera perdu', {font: '14px Calibri', fill: '#ffffff', fontStyle: 'italic'});

        
        
        
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