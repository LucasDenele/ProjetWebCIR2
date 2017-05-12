define(['phaser', 'states/level2/run/preload', 'states/level2/run/create', 'states/level2/run/update', 'ROOM','NPC'], 
function(phaser, preload, create, update, Room, Npc){
    var _lvl2State = function(game){
    	
	};
    
	_lvl2State.prototype = {
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

	return _lvl2State;
});