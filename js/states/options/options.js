define(['phaser', 'states/options/run/preload', 'states/options/run/create', 'states/options/run/update'], 
function(phaser, preload, create, update){
	var _optionsState = function(game){
		this._variables = {

		};
	};

	_optionsState.prototype = {
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

	return _optionsState;
});