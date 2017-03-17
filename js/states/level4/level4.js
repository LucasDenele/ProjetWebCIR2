define(['phaser', 'states/level1/run/preload', 'states/level4/run/create', 'states/level4/run/update'], 
function(phaser, preload, create, update){
    var _lvl4State = function(game){
		this._backButton;
	};
    
	_lvl4State.prototype = {
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

	return _lvl4State;
});