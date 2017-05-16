define(['phaser', 'NPC'], function(phaser, NPC){
	var create = function(game){
		console.log('Create Lvl1');

		function backToMenu(){
			game.state.start('home');
		}
        
        //Declarations des éléments à afficher
		game.add.sprite(0,0,'background');
		game.add.button(700, 500, 'backButton', backToMenu, this, 1, 0, 2);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Déclaration du PNJ
        this._npc = new Npc(game);
        game.physics.arcade.enable(this._npc.sprite);


        this._hitbox = game.add.sprite(400, 400, null); 
        game.physics.arcade.enable(this._hitbox);
        this._hitbox.body.setSize(100,100,0,0);
        this._hitbox.body.immovable = true;

        

        //Déclaration commandes PNJ
        this._cursors = game.input.keyboard.createCursorKeys();
	}

	return create;
});