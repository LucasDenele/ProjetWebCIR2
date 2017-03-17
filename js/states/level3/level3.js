define(['phaser', 'states/level1/run/preload', 'states/level3/run/create', 'states/level3/run/update'], 
function(phaser, preload, create, update){
    var _lvl3State = function(game){
		this._backButton;
	};
    
	_lvl3State.prototype = {
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

	return _lvl3State;
});