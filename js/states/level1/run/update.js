define(['phaser'],function(phaser){
	var update = function(game){
        
        //Activation des collisions entre le PNJ et les Items
        game.physics.arcade.overlap(this._npc.sprite, this._kitchen._items[0].sprite, this._kitchen._items[0].putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._kitchen._items[1].sprite, this._kitchen._items[1].putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._kitchen._items[2].sprite, this._kitchen._items[2].putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bedroom._items[0].sprite, this._bedroom._items[0].putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bedroom._items[1].sprite, this._bedroom._items[1].putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bedroom.floor, this._npc.actualRoom(this._bedroom), null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._kitchen.floor, this._npc.actualRoom(this._kitchen), null, this);
        console.log(this._npc.getRoom());
        
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
        
        game.debug.body(this._kitchen.floor);
        game.debug.body(this._bedroom.floor);
        
        
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