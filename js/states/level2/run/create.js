define(['phaser','easystar'],function(phaser,Easystar){
	var create = function(game){
		console.log('Create Lvl2');

		//Start the Arcade Physics systems
	    game.physics.startSystem(Phaser.Physics.ARCADE);
	 
	    //Change the background colour
	    game.stage.backgroundColor = "#a9f0ff";
	    this._level = game.add.sprite(0, 0, 'level');

	    //*********************************************************************************
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

	    //*********************************************************************************
	    this._npc = (new Npc(game));

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