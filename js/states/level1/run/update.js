define(['phaser'],function(phaser){
	var update = function(game){
        
        this._npc.body.velocity.x = 0;
        if (this._cursors.left.isDown)
        {
            this._npc.body.velocity.x = -150;
            this._npc.animations.play('left');
        }
        else if (this._cursors.right.isDown)
        {
            this._npc.body.velocity.x = 150;
            this._npc.animations.play('right');
        }
        else
        {
            this._npc.animations.stop();
            this._npc.frame = 1;
        }
	}

	return update;
});