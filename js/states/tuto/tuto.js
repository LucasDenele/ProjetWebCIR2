define(['phaser', 'easystar', 'ROOM', 'NPC', 'ITEM', 'states/tuto/run/preload', 'states/tuto/run/create', 'states/tuto/run/update'], 
function(phaser, Easystar, Room, NPC, Item, preload, create, update){
    var _tutoState = function(game){
        
	};
    
	_tutoState.prototype = {
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

	return _tutoState;
});