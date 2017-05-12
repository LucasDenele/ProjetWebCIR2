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

Item.prototype.setObjectType = function(game, type){
    switch (type) {
        case 1:
            this.sprite = game.add.sprite(0, 0, 'tv');
            this.sprite.animations.add('on', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3, true);
            this.sprite.frame = 10;
            this.sprite.scale.setTo(0.25, 0.25);
            this.type = 1;
            break;
            
        case 2:
            this.sprite = game.add.sprite(0, 0, 'pc');
            this.sprite.animations.add('on', [0, 1, 2, 3, 3, 2, 1], 3, true);
            this.sprite.frame = 4;
            this.sprite.scale.setTo(0.25, 0.25);
            this.type = 2;
            break;
            
        case 3:
            this.sprite = game.add.sprite(0, 0, 'washmach');
            this.sprite.animations.add('on', [1, 2, 3, 4], 5, true);
            this.sprite.frame = 0;
            this.sprite.scale.setTo(0.07, 0.07);
            this.type = 3;
            break;
            
        default:
            //this.sprite = game.add.sprite(0, 0, '');
            
            break;
        }
};