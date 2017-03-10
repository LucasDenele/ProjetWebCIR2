define(['phaser'],function(phaser){
	var create = function(game){

		function launchLvl1(){
			game.state.start('level1');
		}
        function launchOptions(){
			game.state.start('options');
		}
		function launchCredits(){
			game.state.start('credits');
		}
		console.log('Create Home');		
		game.add.sprite(0,0,'background');
		game.add.text(250, 50, 'LE TITRE DU JEU', {font: '30px Courier', fill: '#ffffff'});
		

		//Affichage du boutton options :
		this._optionsButton = game.add.button(0, 0, 'Optionsbutton', launchOptions, this, 2, 1, 0);
		this._optionsButton.centerX = game.width - this._optionsButton.width/2 - 10; // -10 pour éviter qu'il colle à la bordure
		this._optionsButton.centerY = game.height - this._optionsButton.height/2 - 10;
	
		//Affichage du boutton credits :
		this._creditsButton = game.add.button(0, 0, 'Creditsbutton', launchCredits, this, 2, 1, 0);
		this._creditsButton.centerX = this._creditsButton.width/2 + 10; // + 10 pour éviter qu'il colle à la bordure
		this._creditsButton.centerY = game.height - this._creditsButton.height/2 - 10;
        
        //Affichage des boutons niveaux
        this._level1Button = game.add.button(0, 0, 'Lvl1button', launchLvl1, this, 1, 0, 2);
        this._level2Button = game.add.button(0, 0, 'Lvl2button', launchOptions, this, 1, 0, 2);
        this._level3Button = game.add.button(0, 0, 'Lvl3button', launchOptions, this, 1, 0, 2);
        this._level4Button = game.add.button(0, 0, 'Lvl4button', launchOptions, this, 1, 0, 2);
        
        this._level1Button.centerX = game.width/3 - this._level1Button.width/2 + 10; // + 10 pour éviter qu'il colle à la bordure
        this._level2Button.centerX = game.width*2/3 - this._level2Button.width/2 + 10; // + 10 pour éviter qu'il colle à la bordure
        this._level3Button.centerX = game.width/3 - this._level3Button.width/2 + 10; // + 10 pour éviter qu'il colle à la bordure
        this._level4Button.centerX = game.width*2/3 - this._level4Button.width/2 + 10; // + 10 pour éviter qu'il colle à la bordure
        
		this._level1Button.centerY = game.height/3 - this._level1Button.height/2 - 10;
		this._level2Button.centerY = game.height/3 - this._level2Button.height/2 - 10;
		this._level3Button.centerY = game.height*2/3 - this._level3Button.height/2 - 10;
		this._level4Button.centerY = game.height*2/3 - this._level4Button.height/2 - 10;
	}

	return create;
});