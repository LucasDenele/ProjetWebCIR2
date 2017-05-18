define(['phaser'],function(phaser){
	var create = function(game){
		console.log('Create Game over');
        this._soundtrack = game.add.audio('looser');
        this._soundtrack.play();
		function backToMenu(){
            this._soundtrack.stop();
			game.state.start('home');
		}
        
         function launchLvl3(){
             this._soundtrack.stop();
			game.state.start('lvl3');
		}
        
        
        //game.add.text(500, 350, 'Oh la merde il a perdu', {font: '30px Calibri', fill: '#ffffff', fontStyle: 'italic'});
        this._background = game.add.sprite(0,0,'background');
		this._background.width = game.width;
		this._background.height = game.height;
        
        //Retour Menu
		this._back = game.add.button(0,0, 'backButton', backToMenu, this, 1, 0, 2);
        this._back.centerX = game.width/2 + 300;
		this._back.centerY = game.height/2;
        
        this._restart = game.add.button(0,0, 'restartButton', launchLvl3, this, 1, 0, 2);
        this._restart.centerX = game.width/2 - 320;
		this._restart.centerY = game.height/2;
	

	}
	return create;
});