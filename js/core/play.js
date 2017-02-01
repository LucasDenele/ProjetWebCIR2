define(['phaser'],
function(Phaser){
	var play = function(game){
		console.log('Update');
		var update = function(){
			game.state.start('play');
		}();
	}

	return play;
});