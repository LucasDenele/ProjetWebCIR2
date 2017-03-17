define(['phaser'],function(phaser){
	var create = function(game){

		function launchOptions(){
			game.state.start('options');
		}
		function launchCredits(){
			game.state.start('credits');
		}
		console.log('Create Home');		
		
		this._gameTitle = game.add.text(0, 0, 'LE TITRE DU JEU', {font: '30px Courier', fill: '#ffffff'});
		
		//Ajout du fond d'écran :
		this._background = game.add.sprite(0,0,'background');
		this._background.width = game.width;
		this._background.height = game.height;
		
		//Affichage du boutton options :
		this._optionsButton = game.add.button(0, 0, 'Optionsbutton', launchOptions, this, 2, 1, 0);
		this._optionsButton.centerX = game.width - this._optionsButton.width/2 - 40; // -10 pour éviter qu'il colle à la bordure
		this._optionsButton.centerY = game.height - this._optionsButton.height/2 - 40;
	
		//Affichage du boutton credits :
		this._creditsButton = game.add.button(0, 0, 'Creditsbutton', launchCredits, this, 2, 1, 0);
		this._creditsButton.centerX = this._creditsButton.width/2 + 10; // + 10 pour éviter qu'il colle à la bordure
		this._creditsButton.centerY = game.height - this._creditsButton.height/2 - 10;
        
        //Affichage du boutton Help :
		this._helpButton = game.add.button(0, 0, 'Helpbutton', launchHelp, this, 2, 1, 0);
		this._helpButton.centerX = this._helpButton.width/2 - 10; // - 10 pour éviter qu'il colle à la bordure
		this._helpButton.centerY = game.height - this._helpButton.height/2 + 10;
	}

	return create;
});