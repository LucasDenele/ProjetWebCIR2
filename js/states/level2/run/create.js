define(['phaser'],function(phaser){
	var create = function(game){
		console.log('Create Lvl2');

		function backToMenu(){
			game.state.start('home');
		}

		this._gameLocation=game.add.sprite(0,0,'background');
        this._gameLocation.width = 800;
        this._gameLocation.length = 640;
        
        this._gameInterface=game.add.sprite(0,0,'interfaceBack');
        this._gameInterface.centerX = game.width - this._gameInterface.width/2;
        
		game.add.text(810, 10, 'Level 2 :', {font: '30px Courier', fill: '#ffffff'});
        game.add.text(840, 100, 'Solde :', {font: '20px Courier', fill: '#ffffff'});
        game.add.text(840, 175, 'Revenus :', {font: '20px Courier', fill: '#ffffff'});
        game.add.text(840, 250, 'Consommation :', {font: '20px Courier', fill: '#ffffff'});
        game.add.text(840, 325, 'Energie gagnée :', {font: '20px Courier', fill: '#ffffff'});
        game.add.text(810, 400, 'Magasin :', {font: '30px Courier', fill: '#ffffff'});
        game.add.text(810, 500, 'Lumières :', {font: '30px Courier', fill: '#ffffff'});
        
        this._R1=game.add.button(810,550, 'LightR1');
        this._R2=game.add.button(850,550, 'LightR2');
        this._R3=game.add.button(890,550, 'LightR3');
        this._R4=game.add.button(930,550, 'LightR4');
        this._R5=game.add.button(970,550, 'LightR5');
        this._R6=game.add.button(1010,550, 'LightR6');


		this._back=game.add.button(0,0, 'backButton', backToMenu, this, 1, 0, 2);
        this._back.centerX = game.width - this._back.width/2 - 10; // -10 pour éviter qu'il colle à la bordure
		this._back.centerY = game.height - this._back.height/2 - 570;


	}

	return create;
});