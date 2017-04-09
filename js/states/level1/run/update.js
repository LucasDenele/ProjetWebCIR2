define(['phaser'],function(phaser){
	var update = function(game){

        game.physics.arcade.moveToPointer(this._npc, 60, game.input.activePointer, 500);

/*        this._npc.body.velocity.x = 0;
        if (this._cursors.left.isDown){

            this._npc.body.velocity.x = -150;
            this._npc.animations.play('left');
        }
        else if (this._cursors.right.isDown){

            this._npc.body.velocity.x = 150;
            this._npc.animations.play('right');
        }
        else if (this._cursors.up.isDown){

            this._npc.body.velocity.y = -150;
            this._npc.animations.play('up');
        }
        else if (this._cursors.down.isDown){

            this._npc.body.velocity.y = 150;
            this._npc.animations.play('down');
        }
        else{

            this._npc.body.velocity.y = 0;
            this._npc.animations.stop();
            this._npc.frame = 1;
        }*/
	}

	return update;
});