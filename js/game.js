require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'js',
    paths: {
        jquery:     'libs/jquery',
        handlebars: 'libs/handlebars',
        text:       'libs/text',
        phaser:     'libs/phaser',
        NPC:        'class/npc',
        Item:       'class/item',
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
        }
    }
});


require(['jquery', 'handlebars', 'phaser', 'states/home/home', 'states/options/options', 'states/credits/credits', 'states/help/help', 'states/level1/level1', 'states/level2/level2', 'states/level3/level3', 'states/level4/level4'], 
function($, Handlebars, Phaser, _homeState, _optionsState, _creditsState, _helpState, _lvl1State, _lvl2State, _lvl3State, _lvl4State){
    var game = new Phaser.Game("99", "99", Phaser.AUTO, 'GameDiv');

    game.state.add('home', _homeState);
    game.state.add('options', _optionsState);
    game.state.add('credits', _creditsState);
    game.state.add('help', _helpState);
    game.state.add('lvl1', _lvl1State);
    game.state.add('lvl2', _lvl2State);
    game.state.add('lvl3', _lvl3State);
    game.state.add('lvl4', _lvl4State);

    game.state.start('home');

});