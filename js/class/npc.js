//Constructeur
var Npc = function(game) {
    this.sprite = game.add.sprite(0, 0, 'npc'); //Attache le sprite au pnj
    
    //Déclaration des animations
    this.sprite.animations.add('left', [10, 11, 12], 10, true);
    this.sprite.animations.add('right', [3, 4, 5], 10, true);
    this.sprite.animations.add('down', [0, 1, 2], 10, true);
    this.sprite.animations.add('up', [6, 7, 8], 10, true);
    
    this.id = 0;
    console.log('NPC Class');
};

Npc.prototype.getId = function(){
    return this.id;
};