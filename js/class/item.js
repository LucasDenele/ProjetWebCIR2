//Constructeur
var Item = function(game){
    this.id = 0;
    this.energyCosts = 0; //Energie Consommée par l'objet
    this.upgradeCosts = 0; //Cout d'amélioration
    this.level = 1; //Niveau de l'objet
    console.log('Item Class');
};

//Getters
Item.prototype.getId = function(){
    return this.id;
};

Item.prototype.getX = function(){
    return this.sprite.x;
};

Item.prototype.getY = function(){
    return this.sprite.y;
};

Item.prototype.getEnergyCosts = function(){
    return this.energyCosts;
};

Item.prototype.getUpgradeCosts = function(){
    return this.upgradeCosts;
};

Item.prototype.getLevel = function(){
    return this.level;
};

//Setters
Item.prototype.setId = function(id){
    this.id = id;
};

Item.prototype.setX = function(x){
    this.sprite.x = x;
};

Item.prototype.setY = function(y){
    this.sprite.y = y;
};

Item.prototype.setEnergyCosts = function(energyCosts){
    this.energyCosts = energyCosts;
};

Item.prototype.setUpgradeCosts = function(upgradeCosts){
    this.upgradeCosts = upgradeCosts;
};

Item.prototype.setLevel = function(level){
    this.level = level;
};

Item.prototype.putItemOn = function(npc, item){
    item.animations.play('on');
};

Item.prototype.putItemOff = function(){
    console.log('item off');
    this.sprite.animations.stop();
    switch (this.type){
                case 1:
                    this.sprite.frame = 10;
                    break;
                    
                case 2:
                    this.sprite.frame = 4;
                    break;
                    
                default :
                    this.sprite.frame = 0;
                    break;
                }
};

Item.prototype.setObjectType = function(game, type){
    switch (type) {
        case 1:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'tv', 10);
            this.sprite.animations.add('on', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3, true);
            this.sprite.scale.setTo(0.25, 0.25);
            this.type = 1;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            break;
            
        case 2:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'pc', 4);
            this.sprite.animations.add('on', [0, 1, 2, 3, 3, 2, 1], 3, true);
            this.sprite.scale.setTo(0.25, 0.25);
            this.type = 2;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            break;
            
        case 3:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'washmach', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4], 5, true);
            this.sprite.scale.setTo(0.08, 0.08);
            this.type = 3;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            break;
            
        case 4:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'sink_k', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4, 5], 3, true);
            //this.sprite.scale.setTo(0.07, 0.07);
            this.type = 4;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            break;
        
        case 5:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'oven', 0);
            this.sprite.animations.add('on', [1, 2], 2, true);
            this.sprite.scale.setTo(0.05, 0.05);
            this.type = 5;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff, this);
            game.world.add(this.sprite);
            break;
            
        case 6:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'heat', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4, 5, 6], 2, true);
            this.sprite.scale.setTo(0.25, 0.25);
            this.type = 6;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            break;
            
        case 7:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'bath', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4, 5, 6, 7, 8], 3, true);
            //this.sprite.scale.setTo(0.25, 0.25);
            this.type = 7;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            break;
            
        case 8:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'sink_b', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4, 5, 6, 7], 3, true);
            //this.sprite.scale.setTo(0.25, 0.25);
            this.type = 8;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            break;
            
        default:
            
            break;
        }
};