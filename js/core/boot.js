define(['phaser', 'core/preload', 'core/create', 'core/update'], 
function(phaser, _preload, _create, _update){
	var boot = function(game){
		this.variables = {

		};
	};

	boot.prototype = {
		preload: function(){
			_preload(this.game);
		},

		create: function(){
			_create(this.game);
		},

		update: function(){
			_update(this.game);
		}
	};

	return boot;
});