//Constructeur
var Item = function(game, x, y, id, energyCosts, upgradeCosts){
    this.x = x;
    this.y = y;
    this.id = id;
    this.hitbox = new Phaser.Rectangle(0, 0, 0, 0);
    this.energyCosts = energyCosts; //Energie Consommée par l'objet
    this.upgradeCosts = upgradeCosts; //Cout d'amélioration
    this.level = 1; //Niveau de l'objet
    console.log('Item Class');
};

//Getters
Item.prototype.getId = function(){
    return this.id;
};

Item.prototype.getX = function(){
    return this.x;
};

Item.prototype.getY = function(){
    return this.y;
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
    this.x = x;
};

Item.prototype.setY = function(y){
    this.y = y;
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