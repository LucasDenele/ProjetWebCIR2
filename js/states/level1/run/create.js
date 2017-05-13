define(['phaser'],function(phaser){
	var create = function(game){
		console.log('Create Lvl1');

		function backToMenu(){
			game.state.start('home');
		}

		this._gameLocation=game.add.sprite(0,0,'background');
        this._gameLocation.width = 800;
        this._gameLocation.length = 640;
        
        this._gameInterface=game.add.sprite(0,0,'interfaceBack');
        this._gameInterface.centerX = game.width - this._gameInterface.width/2;
        
		game.add.text(810, 10, 'Level 1 :', {font: '30px Courier', fill: '#ffffff'});
        game.add.text(840, 100, 'Solde :', {font: '20px Courier', fill: '#ffffff'});
        game.add.text(840, 175, 'Revenus :', {font: '20px Courier', fill: '#ffffff'});
        game.add.text(840, 250, 'Consommation :', {font: '20px Courier', fill: '#ffffff'});
        game.add.text(840, 325, 'Energie gagnée :', {font: '20px Courier', fill: '#ffffff'});
        game.add.text(810, 400, 'Magasin :', {font: '30px Courier', fill: '#ffffff'});
        
        this._light_Upgrade=game.add.button(810,460, 'Light_UP');
        this._heat_upgrade=game.add.button(870,460, 'heat_UP');
        this._computer_upgrade=game.add.button(930,460, 'computer_UP');
        this._television_upgrade=game.add.button(990,460, 'television_UP');
        this._washing_upgrade=game.add.button(1050,460, 'washing_UP');
        this._bathroom_upgrade=game.add.button(1110,460, 'bathroom_UP');


		this._back=game.add.button(0,0, 'backButton', backToMenu, this, 1, 0, 2);
        this._back.centerX = game.width - this._back.width/2 - 10; // -10 pour éviter qu'il colle à la bordure
		this._back.centerY = game.height - this._back.height/2 - 570;

	}

	return create;
});