define(['phaser'],function(phaser){
	var update = function(game){
        
        function launchGameOver(){
			this._soundtrack.stop();
            game.state.start('game_over');
		}
        
        function launchWin(){
            this._soundtrack.stop();
            game.state.start('win');
        }
        
        //Win
        console.log(this._win); 
        if(this._win == 14){
            launchWin();
        }
        //Activation des collisions entre le PNJ et les Items
        game.physics.arcade.overlap(this._npc.sprite, this._kitchen._items[0].sprite, this._kitchen._items[0].putItemOn.bind(this._kitchen._items[0]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._kitchen._items[1].sprite, this._kitchen._items[1].putItemOn.bind(this._kitchen._items[1]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._kitchen._items[2].sprite, this._kitchen._items[2].putItemOn.bind(this._kitchen._items[2]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bathroom._items[0].sprite, this._bathroom._items[0].putItemOn.bind(this._bathroom._items[0]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bathroom._items[1].sprite, this._bathroom._items[1].putItemOn.bind(this._bathroom._items[1]).bind(this._kitchen._items[1]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bathroom._items[2].sprite, this._bathroom._items[2].putItemOn.bind(this._bathroom._items[2]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bedroom._items[0].sprite, this._bedroom._items[0].putItemOn.bind(this._bedroom._items[0]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bedroom._items[1].sprite, this._bedroom._items[1].putItemOn.bind(this._bedroom._items[1]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._cellar._items[0].sprite, this._cellar._items[0].putItemOn.bind(this._cellar._items[0]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._livingRoom._items[0].sprite, this._livingRoom._items[0].putItemOn.bind(this._livingRoom._items[0]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._livingRoom._items[1].sprite, this._livingRoom._items[1].putItemOn.bind(this._livingRoom._items[1]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._livingRoom._items[2].sprite, this._livingRoom._items[2].putItemOn.bind(this._livingRoom._items[2]), null, this);
        
        if(this._rooms[0]._lampsLevel == 3){
            for(var i=0; i < this._rooms.length; i++){
                if(!this._rooms[i].checkNpc(this._npc.sprite.position.x, this._npc.sprite.position.y)){
                    this._rooms[i].turnLampsOff();
                }
            }
        }
        if(this._rooms[0]._items[2].getLevel() == 3){
            for(var i=0; i < this._rooms.length; i++){
                if(!this._rooms[i].checkNpc(this._npc.sprite.position.x, this._npc.sprite.position.y)){
                    for(var j=0; j < this._rooms[i]._items.length; j++){
                        if(this._rooms[i]._items[j].getType() == 6
                            || this._rooms[i]._items[j].getType() == 7){this._rooms[i]._items[j].putItemOff();}
                    }
                }
            }
        }
        //Pathfinding
        if(this._check && this._timerPathFinding + 2000  <= (new Date()).getTime()){
            this.timerPathFinding = (new Date()).getTime();
            let actualPosGrid = this._npc.getPosGrid();
            let nextPosGrid = this._npc.getNextPosGrid();
            console.log(nextPosGrid);
            this._view = nextPosGrid[2];
            this.setupPath(actualPosGrid[0], actualPosGrid[1], nextPosGrid[0], nextPosGrid[1]);
            this._check = false;
            this._count = 0;
            this._timer = (new Date()).getTime();
        }
        if(this._path != undefined && !this._check){
            if(this._count == this._path.length-1){
                this._timerPathFinding = (new Date()).getTime();
                this._npc.sprite.animations.stop();
                this._npc.sprite.body.velocity.x = 0;
                this._npc.sprite.body.velocity.y = 0;
                this._npc.sprite.animations.play(this._view);
                this._check = true;
            }else if(this._npc.sprite.position.x >= this._path[this._count].x*8-4 && this._npc.sprite.position.x <= this._path[this._count].x*8+4 
                && this._npc.sprite.position.y >= this._path[this._count].y*8-4 && this._npc.sprite.position.y <= this._path[this._count].y*8+4 ){
                    this._count++;
                    this._npc.updatePosGrid(this._path[_count].x, this._path[_count].y);
                    for(var i = 0; i < this._rooms.length; i++){
                        if(this._rooms[i].checkNpc(this._npc.sprite.position.x, this._npc.sprite.position.y)){
                            if(!this._rooms[i].getLampState()){
                                this._rooms[i].autoSwitch();
                            }
                        }
                    }
            }
        }
        
        //Timer et Textes
        var calculateConsomation = function(){
            this._consomationVar = 0; 
            this._rooms.forEach( (room) => {
                room._items.forEach( (item) => {if(item.getIsOn()) this._consomationVar += item.getEnergyCosts()}); 
                if(room.getLampOn()) this._consomationVar += room.getNumberOfLamp() * room.getLampsConsomation(); 
            }); 
            return this._consomationVar; 
        }
        this._timerCheck = (new Date()).getTime();

        if(this._timerCheck >= this._timer + 10000){
            this._soldeVar += this._revenusVar;
            //this._revenusVar = 100;


            this._solde.setText('Solde : '+Math.round(_soldeVar*10)/10+' €', {font: '20px Calibri', fill: '#ffffff'})
            //this._revenus.setText('Dépenses : -'+_revenusVar+' €', {font: '20px Calibri', fill: '#ffffff'});    
            
            this._timer = this._timerCheck;
        }
        
        if(this._timerCheck >= this._timer2 + 1000){
            console.log(this._kitchen._items[1].getIsOn());
            this._consomationVar = calculateConsomation()*4; 
            this._timer2 = this._timerCheck;
    
            this._depensesVar = 0; 
            this._depensesVar -= this._consomationVar;
            this._soldeVar += this._depensesVar; 
            this._scoreVar += (this._revenusVar-this._depensesVar)/2;

            this._solde.setText('Solde : '+Math.round(_soldeVar*10)/10+' €', {font: '20px Calibri', fill: '#ffffff'})
            this._consomation.setText('Consommation : '+Math.round(_consomationVar*10)/10+' kWh', {font: '20px Calibri', fill: '#ffffff'});
            this._revenus.setText('Dépenses : '+Math.round(_depensesVar*10)/10+' €', {font: '20px Calibri', fill: '#ffffff'});
            this._score.setText('Score : '+Math.round(_scoreVar*10)/10, {font: '20px Calibri', fill: '#ffffff'});
        }
        
        if(this._soldeVar<0){
            console.log("game over");
            launchGameOver();
        }
        
        if(this._light_Upgrade.input.pointerOver()){
            this._light_text.revive();
        }else{
            this._light_text.kill();
        }
        
        if(this._heat_upgrade.input.pointerOver()){
            this._heat_text.revive();
        }else{
            this._heat_text.kill();
        }
        
        if(this._computer_upgrade.input.pointerOver()){
            this._computer_text.revive();
        }else{
            this._computer_text.kill();
        }
        
        if(this._television_upgrade.input.pointerOver()){
            this._tv_text.revive();
        }else{
            this._tv_text.kill();
        }
        
        if(this._washing_upgrade.input.pointerOver()){
            this._washing_text.revive();
        }else{
            this._washing_text.kill();
        }
        
        if(this._bathroom_upgrade.input.pointerOver()){
            this._water_text.revive();
        }else{
            this._water_text.kill();
        }
        
        if(this._oven_upgrade.input.pointerOver()){
            this._oven_text.revive();
        }else{
            this._oven_text.kill();
        }
        
	}

	return update;
});