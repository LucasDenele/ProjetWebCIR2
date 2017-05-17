define(['phaser'],function(phaser){
	var update = function(game){

		if(!this._light.alive){
			this._npc.centerX = game.rnd.integerInRange(200,600);
			this._npc.centerY = game.rnd.integerInRange(200,600);
			this._light.reset(0, 0);
			this._light.centerX = this._npc.centerX;
			this._light.centerY = this._npc.centerY;
		}
	
	game.physics.arcade.collide(player.body, this.blocksColliders);

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
	if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else if (cursors.up.isDown){
        player.body.velocity.y = -150; 

        player.animations.play('left');
    }
    else if (cursors.down.isDown){
        player.body.velocity.y = 150; 

        player.animations.play('left');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }
	}
	return update;
});