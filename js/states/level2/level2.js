define(['phaser', 'states/level2/run/preload', 'states/level2/run/create', 'states/level2/run/update'], 
function(phaser, preload, create, update){
    var _lvl2State = function(game){
		this._backButton;
		this._light;
		this._npc;
	};
    
	_lvl2State.prototype = {
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

	return _lvl2State;
});