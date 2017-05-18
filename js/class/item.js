    //Constructeur
var Item = function(game, type){
    this.id = 0;
    this.isOn = false; 
    this.upgradeCosts = 0; //Cout d'amélioration
    this.level = 1; //Niveau de l'objet
    this.upgrades = new Array(); 
    this.type = this.setObjectType(game, type); 
    this.energyCosts = this.upgrades[this.getLevel()-1]; //Energie Consommée par l'objet
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

Item.prototype.getIsOn = function(){
    return this.isOn; 
};

Item.prototype.getType = function(){
    return this.type; 
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

Item.prototype.setEnergyCosts = function(){
    this.energyCosts = this.upgrades[this.getLevel()-1];
};

Item.prototype.setUpgradeCosts = function(upgradeCosts){
    this.upgradeCosts = upgradeCosts;
};

Item.prototype.setLevel = function(){
    this.level++; 
    this.setEnergyCosts(); 
};

Item.prototype.setIsOn = function(){
    this.isOn ? this.isOn = false : this.isOn = true; 
}
Item.prototype.putItemOn = function(npc, item){
    item.animations.play('on'); 
    if(!this.getIsOn()) this.setIsOn(); 
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
    if(this.getIsOn()) this.setIsOn(); 
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
            this.upgrades.push(0.6);
            this.upgrades.push(0.3);
            this.upgrades.push(0.2);
            break;
            
        case 2:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'pc', 4);
            this.sprite.animations.add('on', [0, 1, 2, 3, 3, 2, 1], 3, true);
            this.sprite.scale.setTo(0.25, 0.25);
            this.type = 2;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            this.upgrades.push(0.4);
            this.upgrades.push(0.2);
            this.upgrades.push(0.1);
            break;
            
        case 3:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'washmach', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4], 5, true);
            this.sprite.scale.setTo(0.08, 0.08);
            this.type = 3;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            this.upgrades.push(3);
            this.upgrades.push(2.5);
            this.upgrades.push(2);
            break;
            
        case 4:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'sink_k', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4, 5], 2, true);
            //this.sprite.scale.setTo(0.07, 0.07);
            this.type = 4;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            this.upgrades.push(0.1);
            this.upgrades.push(0.05);
            this.upgrades.push(0.025);
            break;
        
        case 5:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'oven', 0);
            this.sprite.animations.add('on', [1, 2], 2, true);
            this.sprite.scale.setTo(0.05, 0.05);
            this.type = 5;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff, this);
            game.world.add(this.sprite);
            this.upgrades.push(1);
            this.upgrades.push(0.7);
            this.upgrades.push(0.5);
            break;
            
        case 6:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'heat', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4, 5, 6], 2, true);
            this.sprite.scale.setTo(0.25, 0.25);
            this.type = 6;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            this.upgrades.push(1);
            this.upgrades.push(0.6);
            this.upgrades.push(0.6);
            break;
            
        case 7:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'heat_turn', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4, 5, 6], 2, true);
            this.sprite.scale.setTo(0.25, 0.25);
            this.type = 7;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            this.upgrades.push(1);
            this.upgrades.push(0.6);
            this.upgrades.push(0.6);
            break;
            
        case 8:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'bath', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4, 5, 6, 7, 8], 2, true);
            //this.sprite.scale.setTo(0.25, 0.25);
            this.type = 8;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            this.upgrades.push(0.2);
            this.upgrades.push(0.1);
            this.upgrades.push(0.05);
            break;
            
        case 9:
            this.sprite = new Phaser.Sprite(game, 0, 0, 'sink_b', 0);
            this.sprite.animations.add('on', [1, 2, 3, 4, 5, 6, 7], 3, true);
            //this.sprite.scale.setTo(0.25, 0.25);
            this.type = 9;
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(this.putItemOff , this);
            game.world.add(this.sprite);
            this.upgrades.push(0.1);
            this.upgrades.push(0.05);
            this.upgrades.push(0.025);
            break;
            
        default:
            
            break;
        }
        return this.type; 
};