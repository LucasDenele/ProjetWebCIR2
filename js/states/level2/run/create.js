define(['phaser','easystar'],function(phaser,Easystar){
	var create = function(game){
		console.log('Create Lvl2');

		//Start the Arcade Physics systems
	    game.physics.startSystem(Phaser.Physics.ARCADE);
	 
	    //Change the background colour
	    game.stage.backgroundColor = "#a9f0ff";
	    this._level = game.add.sprite(0, 0, 'level');

	    //*******************************************************************************
	    //  this._npc physics properties. Give the little guy a slight bounce.
	    this._npc = (new Npc(game));

	    //  We need to enable physics on the this._npc
	    game.physics.arcade.enable(this._npc.sprite);

	    //*********************************************************************************
		game.add.tilemap('hitbox');
	    this._starGrid = new Array();
	    this._count = 0
		for(var i=0; i<80; ++i){
        	this._starGrid.push(new Array());
        	for(var j=0; j<100; ++j){
            	this._starGrid[i].push(game.cache.getTilemapData('hitbox').data.layers[0].data[this._count])
            	this._count++;
			}
    	}
    	console.log(this._starGrid);
    	//*********************************************************************************
	    this._cursors = game.input.keyboard.createCursorKeys();

	    //*********************************************************************************
	    this._rooms = new Array();

	    //*********************************************************************************
	    this._easyStar = new EasyStar.js();
	    this._easyStar.setGrid(this._starGrid);
	    this._easyStar.setAcceptableTiles([0]);
		this._easyStar.disableDiagonals();
		this._d = 0;
		this._easyStar.findPath(10, 10, 9, 9, function( path ) {
			console.log('caca');
	        if (path === null) {
		        console.log("The path to the destination point was not found.");
		    } else {
		      	console.log(path);
		    	for (var i = 0; i < path.length; i++){
		    		console.log("P: " + i + ", X: " + path[i].x + ",Y: " + path[i].y);
		    	}
		    	
		    }
		});
		console.log("create");
	}
	return create;
});