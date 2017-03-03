define(['phaser', 'states/home/run/preload', 'states/home/run/create', 'states/home/run/update'], 
function(phaser, preload, create, update){
	var boot = function(game){
		this._variables = {

		};
	};

	boot.prototype = {
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

	return boot;
});