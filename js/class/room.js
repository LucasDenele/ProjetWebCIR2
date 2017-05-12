//************************************
//Constructor :
var Room = function(game,id){
	this._game = game;
	this._id = id;
	this._items = new Array();
	this._lamps = new Array();
};

//************************************
//Getters :
Room.prototype.getId = function(){
	return this._id;
};

Room.prototype.getItems = function(){
	return this._items
};
//************************************
//Others :
Room.prototype.addItem = function(item){
	this._items.push(item);
};

Room.prototype.addLamp = function(x, y, size){
	this._lamps.push(this._game.add.sprite(0, 0, 'light'));
	
	let last = this._lamps.length -1;

	this._lamps[last].x = x;
	this._lamps[last].y = y;
	this._lamps[last].alpha = 0.5;
	this._lamps[last].scale.setTo(size/300, size/300);
};

Room.prototype.addSwitch = function(x, y){
	let turnLamp = function(){
		for (var i = 0; i < this._lamps.length; i++) {
			if (this._lamps[i].alive){
	        	this._lamps[i].kill();
	        	this._button.loadTexture('lampOff');
	    	}else{
	        	this._lamps[i].reset(this._lamps[i].x, this._lamps[i].y);
	        	this._button.loadTexture('lampOn');
	    	}
		}
	};

	this._button = this._game.add.button(x, y, 'lampOn', turnLamp.bind(this));
	this._button.scale.setTo(0.3, 0.3);
	this.autoSwitch();
	
};

Room.prototype.autoSwitch = function(){
	for (var i = 0; i < this._lamps.length; i++) {
		if (this._lamps[i].alive){
	    	this._lamps[i].kill();
	    	this._button.loadTexture('lampOff');
		}else{
	    	this._lamps[i].reset(this._lamps[i].x, this._lamps[i].y);
	    	this._button.loadTexture('lampOn');
		}
	}
};
