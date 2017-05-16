define(['phaser'],function(phaser){
	var update = function(game){
        
        //Activation des collisions entre le PNJ et les Items
        game.physics.arcade.overlap(this._npc.sprite, this._tv.sprite, this._tv.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._wash.sprite, this._wash.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._pc.sprite, this._pc.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._sink_k.sprite, this._sink_k.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._oven.sprite, this._oven.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._heat.sprite, this._heat.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._bath.sprite, this._bath.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._sink_b.sprite, this._sink_b.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._heat1.sprite, this._heat1.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._heat2.sprite, this._heat2.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._heat3.sprite, this._heat3.putItemOn, null, this);
        game.physics.arcade.overlap(this._npc.sprite, this._heat4.sprite, this._heat4.putItemOn, null, this);
        game.debug.inputInfo(500, 500);
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
	}

	return update;
});