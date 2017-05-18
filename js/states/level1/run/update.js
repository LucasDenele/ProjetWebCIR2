define(['phaser'],function(phaser){
	var update = function(game){
        
        //Activation des collisions entre le PNJ et les Items
        game.physics.arcade.overlap(this._npc.sprite, this._kitchen._items[0].sprite, this._kitchen._items[0].putItemOn.bind(this._kitchen._items[0]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._kitchen._items[1].sprite, this._kitchen._items[1].putItemOn.bind(this._kitchen._items[1]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._kitchen._items[2].sprite, this._kitchen._items[2].putItemOn.bind(this._kitchen._items[2]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bedroom._items[0].sprite, this._bedroom._items[0].putItemOn.bind(this._bedroom._items[0]), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bedroom._items[1].sprite, this._bedroom._items[1].putItemOn.bind(this._bedroom._items[1]), null, this);
        
        //Pathfinding
        if(this._check && this._timerPathFinding + 2000  <= (new Date()).getTime()){
            this._npc.sprite.animations.stop();
            this.timerPathFinding = (new Date()).getTime();
            let actualPosGrid = this._npc.getPosGrid();
            let nextPosGrid = this._npc.getNextPosGrid();
            while( (actualPosGrid[0]+1 == nextPosGrid[0] || actualPosGrid[0]-1 == nextPosGrid[0] || actualPosGrid[0] == nextPosGrid[0])
                && (actualPosGrid[1]+1 == nextPosGrid[1] || actualPosGrid[1]-1 == nextPosGrid[1] || actualPosGrid[1] == nextPosGrid[1])){
                nextPosGrid = this._npc.getNextPosGrid();
            }
            console.log(nextPosGrid);
            this._view = nextPosGrid[2];
            this.setupPath(actualPosGrid[0], actualPosGrid[1], nextPosGrid[0], nextPosGrid[1]);
            this._check = false;
            this._count = 0;
            this._timerPathFinding = (new Date()).getTime();
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
                    this._npc.updatePosGrid(this._path[this._count].x, this._path[this._count].y);
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
        this._timerCheck = (new Date()).getTime();

        if(this._timerCheck >= this._timer + 1000){
            this._soldeVar += this._revenusVar;
            this._scoreVar += Math.round((this._revenusVar/2));
            this._revenusVar = 500;


            this._solde.setText('Solde : '+_soldeVar+' €', {font: '20px Calibri', fill: '#ffffff'})
            this._score.setText('Score : '+_scoreVar, {font: '20px Calibri', fill: '#ffffff'})
            this._revenus.setText('Revenus : '+_revenusVar+' €', {font: '20px Calibri', fill: '#ffffff'});    
            
            this._timer = this._timerCheck;
        }
        
        if(this._timerCheck >= this._timer2 + 462){
            this._consomationNew = Math.floor(Math.random() * 50) + 20; 

            this._timer2 = this._timerCheck;
        }
        
        if(this._consomationNew != this._consomationVar){
            this._consomationVar = this._consomationNew;
            this._revenusVar -= this._consomationVar;

            this._consomation.setText('Consommation : '+_consomationVar+' kWh', {font: '20px Calibri', fill: '#ffffff'});
            this._revenus.setText('Revenus : '+_revenusVar+' €', {font: '20px Calibri', fill: '#ffffff'});
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