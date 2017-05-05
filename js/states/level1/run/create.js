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
        
        //Déclaration du PNJ
        this._npc = new Npc(game);
        this._item = new Item(game, 0, 0, 0, 0, 0);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(this._npc.sprite);
        
        //Déclaration commandes PNJ
        this._cursors = game.input.keyboard.createCursorKeys();
	}

	return create;
});