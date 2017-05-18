require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'js',
    paths: {
        jquery:     'libs/jquery',
        handlebars: 'libs/handlebars',
        text:       'libs/text',
        phaser:     'libs/phaser',
        easystar:   'libs/easystar', 
        NPC:        'class/npc',
        ITEM:       'class/item',
        ROOM:       'class/room', 
    },
    shim: {
        jquery: {
            exports: '$'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        phaser: {
            exports: 'Phaser'
        },
        easystar : {
            exports: 'Easystar'
        }
    }
});


require(['jquery', 'handlebars', 'phaser', 'easystar', 'states/home/home', 'states/options/options', 'states/credits/credits', 'states/help/help', 'states/tuto/tuto', 'states/level/level','states/game_over/game_over','states/win/win'], 
function($, Handlebars, Phaser, Easystar, _homeState, _optionsState, _creditsState, _helpState, _tutoState, _lvlState,_gameoverState,_winState){
    var game = new Phaser.Game("99", "99", Phaser.AUTO, 'GameDiv');

    game.state.add('home', _homeState);
    game.state.add('options', _optionsState);
    game.state.add('credits', _creditsState);
    game.state.add('help', _helpState);
    game.state.add('tuto', _tutoState);
    game.state.add('lvl', _lvlState);
    game.state.add('game_over',_gameoverState);
    game.state.add('win',_winState);

    game.state.start('home');

});
