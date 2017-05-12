define(['phaser'],function(phaser){
	var preload = function(game){
		console.log('Preload Lvl2');

		game.load.spritesheet('npc', 'assets/npc.png', 33, 37);
		
		game.load.image('light', 'assets/light.png');

		game.load.tilemap('tilemap', 'json/level.json', null, Phaser.Tilemap.TILED_JSON);
	    game.load.image('tiles1', 'assets/tileset_floor_1.png');
	    game.load.image('tiles2', 'assets/tileset_floor_2.png');
	    game.load.image('tiles3', 'assets/tileset_floor_3.png');
	    game.load.image('tiles4', 'assets/tileset_kitchen.png');
	    game.load.image('tiles5', 'assets/tileset_modern.png');
	    game.load.image('tiles6', 'assets/tileset_livingroom.png');
	    game.load.image('lampOn', 'assets/lampOn.png');
	    game.load.image('lampOff', 'assets/lampOff.png');
	}
	return preload;
});