define(['phaser', 'states/credits/run/preload', 'states/credits/run/create', 'states/credits/run/update'], 
function(phaser, preload, create, update){
	var _creditsState = function(game){
			this._briquet;
			this._carlier;
			this._decolnet;
			this._denele;
			this._portrait;
	};

	_creditsState.prototype = {
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

	return _creditsState;
});