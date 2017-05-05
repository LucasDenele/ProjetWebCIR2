define(['phaser', 'NPC', 'Item', 'states/level1/run/preload', 'states/level1/run/create', 'states/level1/run/update'], 
function(phaser, NPC, Item, preload, create, update){
    var _lvl1State = function(game){
		this._backButton;
        this._npc;
        this._cursors;
        this._lamp;
        this._lamp2;
        this.map;
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