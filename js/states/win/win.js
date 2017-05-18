define(['phaser', 'states/win/run/preload', 'states/win/run/create', 'states/win/run/update'], 
function(phaser, preload, create, update){
	var _winState = function(game){
	};

	_winState.prototype = {
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

	return _winState;
});