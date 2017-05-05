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
        
		game.add.text(10, 10, 'Level 1 :', {font: '30px Courier', fill: '#ffffff'});
		this._back=game.add.button(0,0, 'backButton', backToMenu, this, 1, 0, 2);
        this._back.centerX = game.width - this._back.width/2 - 10; // -10 pour éviter qu'il colle à la bordure
		this._back.centerY = game.height - this._back.height/2 - 570;

	}

	return create;
});