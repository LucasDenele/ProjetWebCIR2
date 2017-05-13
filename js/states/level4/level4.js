define(['phaser', 'states/level4/run/preload', 'states/level4/run/create', 'states/level4/run/update', 'ROOM','NPC', 'ITEM'], 
function(phaser, preload, create, update, Room, Npc, Item){
    var _lvl4State = function(game){
        
	};
    
	_lvl4State.prototype = {
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

	return _lvl4State;
});