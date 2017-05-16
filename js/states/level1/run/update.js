define(['phaser'],function(phaser){
	var update = function(game){
		game.debug.inputInfo(0, 25);
		game.debug.body(this._npc.sprite);
		game.debug.body(this._hitbox);
		
		game.physics.arcade.collide(this._npc.sprite, this._hitbox); 

        this._npc.sprite.body.velocity.x = 0;
        if (this._cursors.left.isDown){

            this._npc.sprite.body.velocity.x = -150;
            this._npc.sprite.animations.play('left');
        }
        else if (this._cursors.right.isDown){

            this._npc.sprite.body.velocity.x = 150;
            this._npc.sprite.animations.play('right');
        }
        else if (this._cursors.up.isDown){

            this._npc.sprite.body.velocity.y = -150;
            this._npc.sprite.animations.play('up');
        }
        else if (this._cursors.down.isDown){

            this._npc.sprite.body.velocity.y = 150;
            this._npc.sprite.animations.play('down');
        }
        else{

            this._npc.sprite.body.velocity.y = 0;
            this._npc.sprite.animations.stop();
            this._npc.sprite.frame = 1;
        }
    }
	return update;
});