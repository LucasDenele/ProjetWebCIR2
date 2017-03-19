define(['phaser', 'states/level1/run/preload', 'states/level1/run/create', 'states/level1/run/update'], 
function(phaser, preload, create, update){
    var _lvl1State = function(game){
		this._backButton;
	};
    
	_lvl1State.prototype = {
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

	return _lvl1State;
});