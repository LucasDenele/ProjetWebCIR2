define(['phaser', 'states/home/run/preload', 'states/home/run/create', 'states/home/run/update'], 
function(phaser, preload, create, update){
	var _homeState = function(game){
		this._optionsButton;
		this._creditsButton;
        this._helpButton;
        this._lvl1Button;
        this._lvl2Button;
        this._lvl3Button;
        this._lvl4Button;
	};
	//Etats du menu :
	_homeState.prototype = {
		preload: function(){
			preload(this.game);
		},

		create: function(){
			create(this.game);
		},

		update: function(){
			update(this.game);
		}
	};

	return _homeState;
});