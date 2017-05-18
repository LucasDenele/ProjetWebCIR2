define(['phaser', 'easystar', 'ROOM', 'NPC', 'ITEM', 'states/level/run/preload', 'states/level/run/create', 'states/level/run/update'], 
function(phaser, Easystar, Room, NPC, Item, preload, create, update){
    var _lvlState = function(game){
        
	};
    
	_lvlState.prototype = {
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

	return _lvlState;
});