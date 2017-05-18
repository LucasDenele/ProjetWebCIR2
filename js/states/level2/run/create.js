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
	    var starGrid = new Array();
	    var count = 0
		for(var i=0; i<80; ++i){
        	starGrid.push(new Array());
        	for(var j=0; j<100; ++j){
            	starGrid[i].push(game.cache.getTilemapData('hitbox').data.layers[0].data[count])
            	count++;
			}
    	}

	    //*********************************************************************************
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
						    	[85,16, 'up'],
						    	[24,6, 'up'],
						    	[5,9, 'left']]
					));

	    //************************************************************************************
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
        

        var actualPosGrid = this._npc.getPosGrid();
        var nextPosGrid = this._npc.getNextPosGrid();
        this._view = nextPosGrid[2];
        console.log(nextPosGrid);
        this.setupPath(actualPosGrid[0], actualPosGrid[1], nextPosGrid[0], nextPosGrid[1]);
        this._count = 0;
        this._check = false;

        //*************************************************************************************
        this.test = new Room(game, 0);
        this.test.addLamp(0,0,100);
        this.test.addSwitch(10,10);
        this.test.addHitbox(0,0,200,200);
	}
	return create;
});