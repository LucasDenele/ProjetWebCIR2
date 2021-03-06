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


require(['jquery', 'handlebars', 'phaser', 'easystar', 'states/home/home', 'states/options/options', 'states/credits/credits', 'states/help/help', 'states/level1/level1', 'states/level2/level2', 'states/level3/level3', 'states/level4/level4','states/game_over/game_over','states/win/win'], 
function($, Handlebars, Phaser, Easystar, _homeState, _optionsState, _creditsState, _helpState, _lvl1State, _lvl2State, _lvl3State, _lvl4State,_gameoverState,_winState){
    var game = new Phaser.Game("99", "99", Phaser.AUTO, 'GameDiv');

    game.state.add('home', _homeState);
    game.state.add('options', _optionsState);
    game.state.add('credits', _creditsState);
    game.state.add('help', _helpState);
    game.state.add('lvl1', _lvl1State);
    game.state.add('lvl2', _lvl2State);
    game.state.add('lvl3', _lvl3State);
    game.state.add('lvl4', _lvl4State);
    game.state.add('game_over',_gameoverState);
    game.state.add('win',_winState);

    game.state.start('home');

});