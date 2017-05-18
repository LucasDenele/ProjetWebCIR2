define(['phaser'],function(phaser){
	var update = function(game){
		game.debug.inputInfo(500, 500);
        if(this._check && this._timer + 2000  <= (new Date()).getTime()){
            this.timer = (new Date()).getTime();
            var actualPosGrid = this._npc.getPosGrid();
            var nextPosGrid = this._npc.getNextPosGrid();
            console.log(nextPosGrid);
            this._view = nextPosGrid[2];
            this.setupPath(actualPosGrid[0], actualPosGrid[1], nextPosGrid[0], nextPosGrid[1]);
            this._check = false;
            this._count = 0;
            this._timer = (new Date()).getTime();
        }
        if(this._path != undefined && !this._check){
            if(this._count == this._path.length-1){
                this._timer = (new Date()).getTime();
                this._npc.sprite.animations.stop();
                this._npc.sprite.body.velocity.x = 0;
                this._npc.sprite.body.velocity.y = 0;
                this._npc.sprite.animations.play(this._view);
                this._check = true;
            }else if(this._npc.sprite.position.x >= this._path[this._count].x*8-4 && this._npc.sprite.position.x <= this._path[this._count].x*8+4 
                && this._npc.sprite.position.y >= this._path[this._count].y*8-4 && this._npc.sprite.position.y <= this._path[this._count].y*8+4 ){
                    this._count++;
                    this._npc.updatePosGrid(this._path[_count].x, this._path[_count].y);
                    if(this.test.checkNpc(this._npc.sprite.position.x, this._npc.sprite.position.y)){
                        if(!this.test.getLampState()){
                            this.test.autoSwitch();
                        }
                    }
            }
        }
	}

	return update;
});