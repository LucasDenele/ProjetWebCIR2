define(['phaser'],function(phaser){
	var create = function(game){
		
        this._soundtrack = game.add.audio('win');
        this._soundtrack.play();
        this._soundtrack.loopFull();
        
		function backToMenu(){
            this._soundtrack.stop();
			game.state.start('home');
		}
        
         function launchLvl3(){
             this._soundtrack.stop();
			game.state.start('lvl');
		}
        
        
        this._background = game.add.sprite(0,0,'background');
		this._background.width = game.width;
		this._background.height = game.height;
        
        //Retour Menu
		this._back = game.add.button(0,0, 'backButton', backToMenu, this, 1, 0, 2);
        this._back.centerX = game.width/2 + 300;
		this._back.centerY = game.height/2;
        
        this._restart = game.add.button(0,0, 'restartButton', launchLvl3, this, 1, 0, 2);
        this._restart.centerX = game.width/2 - 280;
		this._restart.centerY = game.height/2;
        
        game.add.text(game.width/2 - 100, game.height/2 + 150, 'Score : '+this._scoreVar, {font: '30px Calibri', fill: '#ffffff'});

	}
	return create;
});