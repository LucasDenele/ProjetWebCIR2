define(['phaser', 'NPC'], function(phaser, NPC){
	var create = function(game){
		console.log('Create Lvl1');

		function backToMenu(){
			game.state.start('home');
		}
        
        //Declarations des éléments à afficher
		game.add.sprite(0,0,'background');

		this._lamp = game.add.sprite(400,400, 'lamp');
		this._lamp.scale.setTo(41/87,35/225);

		this._lamp2 = game.add.sprite(200,500, 'lamp');
		this._lamp2.scale.setTo(41/87,35/225);

		game.add.text(10, 10, 'Level 1 :', {font: '30px Courier', fill: '#ffffff'});
		game.add.button(700, 500, 'backButton', backToMenu, this, 1, 0, 2);
        
        //Déclaration du PNJ
        this._npc = new Npc(game);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(this._npc);
        game.physics.arcade.enable(this._lamp);
        game.physics.arcade.enable(this._lamp2);

        this._npc.body.enable = true;
        this._npc.alpha = 0.2;
        this._lamp.body.enable = true;
        this._lamp2.body.enable = true;
        //Déclaration commandes PNJ
        this._cursors = game.input.keyboard.createCursorKeys();
	}

	return create;
});