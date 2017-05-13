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

        this._soldeVar = 0;
        this._revenusVar = 500;
        this._consomationVar = 20;
        this._consomationNew = 20;
        this._scoreVar = 0;

        this._timer = (new Date()).getTime();
        this._timer2 = this._timer;
        
	game.add.text(810, 10, 'Level 2 :', {font: '30px Courier', fill: '#ffffff'});
        this._solde = game.add.text(840, 100, 'Solde :'+_soldeVar+' €', {font: '20px Courier', fill: '#ffffff'});
        this._revenus = game.add.text(840, 175, 'Revenus :'+_revenusVar+' €', {font: '20px Courier', fill: '#ffffff'});
        this._consomation = game.add.text(840, 250, 'Consommation :'+_consomationVar+' Watt/h', {font: '20px Courier', fill: '#ffffff'});
        this._score = game.add.text(840, 325, 'Score :'+_scoreVar, {font: '20px Courier', fill: '#ffffff'});
        game.add.text(810, 400, 'Magasin :', {font: '30px Courier', fill: '#ffffff'});
        game.add.text(810, 500, 'Lumières :', {font: '30px Courier', fill: '#ffffff'});


	this._back=game.add.button(0,0, 'backButton', backToMenu, this, 1, 0, 2);
        this._back.centerX = game.width - this._back.width/2 - 10; // -10 pour éviter qu'il colle à la bordure
	this._back.centerY = game.height - this._back.height/2 - 570;


}

return create;
});