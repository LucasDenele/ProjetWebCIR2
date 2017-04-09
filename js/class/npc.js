var Npc = function(game) {
    this.sprite = game.add.sprite(0, 0, 'npc');
    this.sprite.animations.add('left', [10, 11, 12], 10, true);
    this.sprite.animations.add('right', [3, 4, 5], 10, true);
};