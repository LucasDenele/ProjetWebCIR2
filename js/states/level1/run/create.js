define(['phaser', 'class/npc'],function(phaser, Npc){
	var create = function(game){
		console.log('Create Lvl1');

		function backToMenu(){
			game.state.start('home');
		}

		game.add.sprite(0,0,'background');

		this._lamp = game.add.sprite(400,400, 'lamp');
		this._lamp.scale.setTo(41/87,35/225);

		this._lamp2 = game.add.sprite(200,500, 'lamp');
		this._lamp2.scale.setTo(41/87,35/225);

		game.add.text(10, 10, 'Level 1 :', {font: '30px Courier', fill: '#ffffff'});
		game.add.button(700, 500, 'backButton', backToMenu, this, 2, 1, 0);
        
        //this._npc = new Npc(game);
        //game.physics.arcade.enable(this._npc.sprite);

        this._npc = game.add.sprite(100, 100, 'npc');
        this._npc.animations.add('left', [10, 11, 12], 10, true);
        this._npc.animations.add('right', [3, 4, 5], 10, true);
        this._npc.animations.add('down', [0, 1, 2], 10, true);
        this._npc.animations.add('up', [6, 7, 8], 10, true);
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(this._npc);
        game.physics.arcade.enable(this._lamp);
        game.physics.arcade.enable(this._lamp2);

        this._npc.body.enable = true;
        this._npc.alpha = 0.2;
        this._lamp.body.enable = true;
        this._lamp2.body.enable = true;
        
        this._cursors = game.input.keyboard.createCursorKeys();
	}

	return create;
});