define(['phaser'],
function(Phaser){
	var boot = function(game){
			console.log('Preaload');
			var preload =function(){
				game.state.start('load');
			}(); 
		}

	return boot;
});