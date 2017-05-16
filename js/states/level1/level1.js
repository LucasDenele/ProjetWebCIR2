define(['phaser', 'easystar', 'ROOM', 'NPC', 'ITEM', 'states/level1/run/preload', 'states/level1/run/create', 'states/level1/run/update'], 
function(phaser, Easystar, Room, NPC, Item, preload, create, update){
    var _lvl1State = function(game){
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