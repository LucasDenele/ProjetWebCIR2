define(['phaser'],function(phaser){
	var update = function(game){
        
        //Collision du PNJ avec Item
        function putItemOn(npc, item){
            item.animations.play('on');
        }
        
        game.physics.arcade.overlap(this._npc.sprite, this._tv.sprite, putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._wash.sprite, putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._pc.sprite, putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._sink.sprite, putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._oven.sprite,putItemOn, null, this);
        
        //Le PNJ se dirige vers le curseur
        //game.physics.arcade.moveToPointer(this._npc, 60, game.input.activePointer, 500);
        
        //Le PNJ est controlé par les flèches
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