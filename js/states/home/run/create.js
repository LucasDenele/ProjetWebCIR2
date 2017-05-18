define(['phaser'],function(phaser){
	var create = function(game){
        this._soundtrack = game.add.audio('menu');
        this._soundtrack.play();

		function launchLvl1(){
			this._soundtrack.stop();
            game.state.start('lvl1');
		}
        function launchLvl2(){
			game.state.start('lvl2');
		}
        function launchLvl3(){
            this._soundtrack.stop();
			game.state.start('lvl3');
		}
        function launchLvl4(){
            this._soundtrack.stop();
			game.state.start('lvl4');
		}
        function launchOptions(){
			game.state.start('options');
		}
		function launchCredits(){
			game.state.start('credits');
		}
		function launchHelp(){
			game.state.start('help');
		}
		console.log('Create Home');		
		
		
		//Ajout du fond d'écran :
		this._background = game.add.sprite(0,0,'background');
		this._background.width = game.width;
		this._background.height = game.height;
        
        this._logo = game.add.sprite(0,0,'logo');
        this._logo.centerX = game.width/1.95;
        this._logo.centerY = game.height/2;
		
		//Affichage du boutton options :
		this._optionsButton = game.add.button(0, 0, 'Optionsbutton', launchOptions, this, 1, 0, 2);
		this._optionsButton.centerX = game.width - this._optionsButton.width/2 - 10; // -10 pour éviter qu'il colle à la bordure
		this._optionsButton.centerY = game.height - this._optionsButton.height/2 - 10;
	
		//Affichage du boutton credits :
		this._creditsButton = game.add.button(0, 0, 'Creditsbutton', launchCredits, this, 1, 0, 2);
		this._creditsButton.centerX = this._creditsButton.width/2 + 10; // + 10 pour éviter qu'il colle à la bordure
		this._creditsButton.centerY = game.height - this._creditsButton.height/2 - 10;
  
        //Affichage du boutton Help :
		this._helpButton = game.add.button(0, 0, 'Helpbutton', launchHelp, this, 1, 0, 2);
		this._helpButton.centerX = game.width/2 - this._helpButton.width/2 + 30; // - 10 pour éviter qu'il colle à la bordure
		this._helpButton.centerY = game.height - this._helpButton.height/2 - 10;

        //Affichage des boutons niveaux
        this._tutoButton = game.add.button(0, 0, 'tutobutton', launchLvl1, this, 1, 0, 2);
        this._playButton = game.add.button(0, 0, 'playbutton', launchLvl3, this, 1, 0, 2);
        
        this._tutoButton.centerX = game.width/4 - 70  - this._tutoButton.width/2 +10; // + 10 pour éviter qu'il colle à la bordure
        this._playButton.centerX = game.width/1.5 +250  - this._playButton.width/2  +10; // + 10 pour éviter qu'il colle à la bordure
        
		this._tutoButton.centerY = game.height/2 - this._tutoButton.height/2;
		this._playButton.centerY = game.height/2 - this._playButton.height/2;
        
	}

	return create;
});