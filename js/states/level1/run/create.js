define(['phaser', 'class/npc'],function(phaser, Npc){
	var create = function(game){
		console.log('Create Lvl1');

		function backToMenu(){
			game.state.start('home');
		}

		game.add.sprite(0,0,'background');
		game.add.text(10, 10, 'Level 1 :', {font: '30px Courier', fill: '#ffffff'});
		game.add.button(700, 500, 'backButton', backToMenu, this, 2, 1, 0);
        
        //this._npc = new Npc(game);
        //game.physics.arcade.enable(this._npc.sprite);

        this._npc = game.add.sprite(100, 100, 'npc');
        this._npc.animations.add('left', [10, 11, 12], 10, true);
        this._npc.animations.add('right', [3, 4, 5], 10, true);
        
        game.physics.arcade.enable(this._npc);
        this._cursors = game.input.keyboard.createCursorKeys();
	}

	return create;
});