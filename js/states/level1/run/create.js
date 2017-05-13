define(['phaser', 'NPC', 'ITEM'], function(phaser, NPC, ITEM){
	var create = function(game){
		console.log('Create Lvl1');

		function backToMenu(){
			game.state.start('home');
		}
                
        //Declarations des éléments à afficher
		game.add.sprite(0,0,'background');
		game.add.text(10, 10, 'Level 1 :', {font: '30px Courier', fill: '#ffffff'});
		game.add.button(700, 500, 'backButton', backToMenu, this, 1, 0, 2);
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Déclaration des Items
        
        this._tv = new Item(game);
        this._tv.setObjectType(game, 1);
        this._tv.setX(200);
        game.physics.arcade.enable(this._tv.sprite);
        
        this._pc = new Item(game);
        this._pc.setObjectType(game, 2);
        this._pc.setX(100);
        game.physics.arcade.enable(this._pc.sprite);
        
        this._wash = new Item(game);
        this._wash.setObjectType(game, 3);
        this._wash.setY(100);
        game.physics.arcade.enable(this._wash.sprite);
        
        //Déclaration du PNJ
        this._npc = new Npc(game);
        game.physics.arcade.enable(this._npc.sprite);
        
        //Déclaration commandes PNJ
        this._cursors = game.input.keyboard.createCursorKeys();
        
	}

	return create;
});