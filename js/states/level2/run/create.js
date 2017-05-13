define(['phaser'],function(phaser){
	var create = function(game){
		console.log('Create Lvl2');

		//Start the Arcade Physics systems
	    game.physics.startSystem(Phaser.Physics.ARCADE);
	 
	    //Change the background colour
	    game.stage.backgroundColor = "#a9f0ff";
	 
	    //Add the tilemap and tileset image. The first parameter in addTilesetImage
	    //is the name you gave the tilesheet when importing it into Tiled, the second
	    //is the key to the asset in Phaser
	    this.map = game.add.tilemap('tilemap');
	    this.map.addTilesetImage('tileset_floor_1', 'tiles1');
	    this.map.addTilesetImage('tileset_floor_2', 'tiles2');
	    this.map.addTilesetImage('tileset_floor_3', 'tiles3');
	    this.map.addTilesetImage('tileset_kitchen', 'tiles4');
	    this.map.addTilesetImage('tileset_modern', 'tiles5');
	    this.map.addTilesetImage('tileset_livingroom', 'tiles6');
	    //this.map.addTilesetImage('tileset_furniture', 'tiles7');
	    this.map.addTilesetImage('tileset', 'tiles8');

	    //Add both the background and ground layers. We won't be doing anything with the
	    //GroundLayer though
	    this.backgroundLayer = this.map.createLayer('background');
	    //this.subBackgroundLayer = this.map.createLayer('SubBackground');
	    this.CollidersBlocks = this.map.createLayer('collidersBlocks');
	    //******************************************************************************* 
	    //Before you can use the collide function you need to set what tiles can collide

	    this.map.setCollisionBetween(1, 100000, true, 'collidersBlocks');
	    //Change the world size to match the size of this layer
	    //*******************************************************************************
	    //  this._npc physics properties. Give the little guy a slight bounce.
	    this._npc = (new Npc(game));

	    //  We need to enable physics on the this._npc
	    game.physics.arcade.enable(this._npc.sprite);


	    this._npc.sprite.body.collideWorldBounds = true;

	    this._cursors = game.input.keyboard.createCursorKeys();

	    this.CollidersBlocks.resizeWorld();

	    //*********************************************************************************
	    this._rooms = new Array();
	    
	    //Room 0 : Bedroom
	    this._rooms.push(new Room(game, 0));
	    this._rooms[0].addLamp(0, 0, 200);
	    this._rooms[0].addSwitch(0, 155);

	    //Room 1 : Kitchen
	    this._rooms.push(new Room(game, 1));
	    this._rooms[1].addLamp(225, 0, 170);
	    this._rooms[1].addSwitch(225, 155);

	    //Room 2 : Bathroom
	    this._rooms.push(new Room(game, 2));
	    this._rooms[2].addLamp(220, 250, 170);
	    this._rooms[2].addSwitch(211, 371);

	    //Room 3 : Toilet
	    this._rooms.push(new Room(game, 3));
	    this._rooms[3].addLamp(84, 305, 100);
	    this._rooms[3].addSwitch(84, 305);

	    //Room 4 : Livingroom
	    this._rooms.push(new Room(game, 4));
	    this._rooms[4].addLamp(39, 198, 100);
	    this._rooms[4].addLamp(268, 195, 50);
	    this._rooms[4].addSwitch(0, 315);
	 	}

	return create;
});