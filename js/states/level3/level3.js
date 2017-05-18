define(['phaser', 'easystar', 'ROOM', 'NPC', 'ITEM', 'states/level3/run/preload', 'states/level3/run/create', 'states/level3/run/update'], 
function(phaser, Easystar, Room, NPC, Item, preload, create, update){
    var _lvl3State = function(game){
        
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