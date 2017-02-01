define(['phaser'],
function(Phaser){
	var load = function(game){
		console.log('Create');
		var create = function(){
			game.state.start('play');
		}();
	}

	return load;
});