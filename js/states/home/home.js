define(['phaser', 'states/home/run/preload', 'states/home/run/create', 'states/home/run/update'], 
function(phaser, preload, create, update){
	var _homeState = function(game){
		this._variables = {

		};
	};

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