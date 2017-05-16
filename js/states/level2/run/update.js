define(['phaser'],function(phaser){
	var update = function(game){
		game.debug.inputInfo(500, 500);

        if(this._path != undefined){
            if(this.timer + 100 <= (new Date()).getTime()){
                this.timer = (new Date()).getTime();
                if(this.count < this._path.length){
                    this._npc.updatePosGrid(this._path[count].x, this._path[count].y);
                    this.count++;
                }
                if(this.count == this._path.length){
                    this._npc.sprite.animations.stop();
                    this._npc.sprite.body.velocity.x = 0;
                    this._npc.sprite.body.velocity.y = 0;
                    //this.check = true;
                }
            }
        }
        /*if(this.check){
            let actualPosGrid = this._npc.getPosGrid();
            this.setupPath(actualPosGrid[0], actualPosGrid[1], 60, 20);
            this.check = false;
            this.count = 1;
            this.timer = (new Date()).getTime();
        }*/

	}

	return update;
});