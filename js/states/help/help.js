define(['phaser', 'states/help/run/preload', 'states/help/run/create', 'states/help/run/update'],
function(phaser, preload, create, update){
    var _helpState = function(game){
    };
    _helpState.prototype = {
        preload: function(){
            preload(this.game);
        },
        
        create: function(){
            create(this.game);
        },
        
        update: function(){
            update(this.game);
        }
    };
    
    return _helpState;
});