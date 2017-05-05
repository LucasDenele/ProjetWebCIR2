define(['phaser'],function(phaser){
	var create = function(game){
		console.log('Create Lvl2');

		function test(sprite){
			if(sprite.alive){
				sprite.kill();
			}
		};
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

	    //Add both the background and ground layers. We won't be doing anything with the
	    //GroundLayer though
	    this.backgroundLayer = this.map.createLayer('background');
	    //this.subBackgroundLayer = this.map.createLayer('SubBackground');
	    this.CollidersBlocks = this.map.createLayer('collidersBlocks'); 
	    //******************************************************************************* 
	    //Before you can use the collide function you need to set what tiles can collide

	    this.map.setCollisionBetween(1, 10000, true, 'collidersBlocks');
	    //Change the world size to match the size of this layer
	    //*******************************************************************************
	    //  Player physics properties. Give the little guy a slight bounce.
	    player = game.add.sprite(32, game.world.height - 500, 'npc');

	    //  We need to enable physics on the player
	    game.physics.arcade.enable(player);


	    player.body.collideWorldBounds = true;

	    //  Our two animations, walking left and right.
	    player.animations.add('left', [0, 1, 2, 3], 10, true);
	    player.animations.add('right', [5, 6, 7, 8], 10, true);

	    this.CollidersBlocks.resizeWorld();

	    cursors = game.input.keyboard.createCursorKeys();

		this._npc = game.add.sprite(400, 400, 'npc');
        this._npc.animations.add('left', [10, 11, 12], 10, true);
        this._npc.animations.add('right', [3, 4, 5], 10, true);
        this._npc.animations.add('down', [0, 1, 2], 10, true);
        this._npc.animations.add('up', [6, 7, 8], 10, true);

        this._npc.animations.play('down',5,true);
		
		this._light = game.add.sprite(0, 0, 'light');
		this._light.centerX = this._npc.centerX;
		this._light.centerY = this._npc.centerY;
		this._light.alpha = 0.2;

		this._light.inputEnabled = true;
		this._light.events.onInputDown.add(test, this);
	}

	return create;
});