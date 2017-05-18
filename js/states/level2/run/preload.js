define(['phaser'],function(phaser){
var preload = function(game){
	console.log('Preload Lvl2');
	game.load.image('level','assets/maps/level.png');	

	game.load.tilemap('hitbox', 'assets/maps/level_hitbox.json', null, phaser.Tilemap.TILED_JSON);
	game.load.image('tiles1', 'assets/maps/tileset.png');
	
	game.load.spritesheet('npc', 'assets/spritesheets/npc.png', 33, 37);

	game.load.image('light', 'assets/light.png');
	game.load.image('lampOn', 'assets/lampOn.png');
    game.load.image('lampOff', 'assets/lampOff.png');
}
return preload;
});