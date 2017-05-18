define(['phaser', 'states/game_over/run/preload', 'states/game_over/run/create', 'states/game_over/run/update'], 
function(phaser, preload, create, update){
	var _gameoverState = function(game){
	};

	_gameoverState.prototype = {
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

	return _gameoverState;
});