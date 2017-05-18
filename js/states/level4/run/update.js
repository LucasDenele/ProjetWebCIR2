define(['phaser'],function(phaser){
    var update = function(game){
        
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
        
        //game.debug.inputInfo(500, 500);
            
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
            this._scoreVar += Math.round((this._revenusVar/2));
            //this._revenusVar = 100;


            this._solde.setText('Solde : '+Math.round(_soldeVar*10)/10+' €', {font: '20px Calibri', fill: '#ffffff'})
            this._score.setText('Score : '+_scoreVar, {font: '20px Calibri', fill: '#ffffff'})
            this._revenus.setText('Revenus : '+_revenusVar+' €', {font: '20px Calibri', fill: '#ffffff'});    
            
            this._timer = this._timerCheck;
        }
        
        if(this._timerCheck >= this._timer2 + 1000){
            console.log(this._kitchen._items[1].getIsOn());
            this._consomationVar = calculateConsomation(); 
            this._timer2 = this._timerCheck;
        
        
        //if(this._consomationNew != this._consomationVar){
            //this._consomationVar = this._consomationNew;
            this._revenusVar = 100; 
            this._revenusVar -= this._consomationVar;

            this._consomation.setText('Consommation : '+_consomationVar+' kWh', {font: '20px Calibri', fill: '#ffffff'});
            this._revenus.setText('Revenus : '+_revenusVar+' €', {font: '20px Calibri', fill: '#ffffff'});
        //}
    }
    }

    return update;
});