define(['phaser', 'easystar', 'states/level2/run/preload', 'states/level2/run/create', 'states/level2/run/update', 'ROOM','NPC', 'ITEM'], 
function(phaser, Easystar, preload, create, update, Room, Npc, Item){
    var _lvl2State = function(game){
    	
	};
    
	_lvl2State.prototype = {
		preload: function(){
			preload(this.game);
			console.log("level2 - preload");
		},

		create: function(){
			create(this.game);
			console.log("level2 - create");
		},

		update: function(){
			update(this.game);
			if(this._d == 1)
				this._test();
		}
	};

	return _lvl2State;
});

