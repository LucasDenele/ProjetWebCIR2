define(['phaser'],function(phaser){
var preload = function(game){
	console.log('Preload Lvl2');
	game.load.image('level','assets/level.png');	

	game.load.tilemap('hitbox', 'json/calque.json', null, phaser.Tilemap.TILED_JSON);
	game.load.image('tiles1', 'assets/tileset.png');
	
	game.load.spritesheet('npc', 'assets/npc.png', 33, 37);

	game.load.image('light', 'assets/light.png');
	game.load.image('lampOn', 'assets/lampOn.png');
    game.load.image('lampOff', 'assets/lampOff.png');

    console.log("preload");
}
return preload;
});