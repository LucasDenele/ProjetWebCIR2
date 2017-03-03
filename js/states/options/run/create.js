define(['phaser'],function(phaser){
	var create = function(game){
		console.log('Create Options');

		function backToMenu(){
			game.state.start('home');
		}

		game.add.sprite(0,0,'background');
		game.add.text(10, 10, 'Options :', {font: '30px Courier', fill: '#000000'});
		
		game.add.button(700, 500, 'back', backToMenu, this, 2, 1, 0);

	}

	return create;
});