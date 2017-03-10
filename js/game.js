require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'js',
    paths: {
        jquery:     'libs/jquery',
        handlebars: 'libs/handlebars',
        text:       'libs/text',
        phaser:     'libs/phaser',  
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

require(['jquery', 'handlebars', 'phaser', 'states/home/home', 'states/options/options', 'states/credits/credits', 'states/level1/level1'], 
function($, Handlebars, Phaser, _homeState, _optionsState, _creditsState, _lvl1State){
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'GameDiv');

    game.state.add('home', _homeState);
    game.state.add('options', _optionsState);
    game.state.add('credits', _creditsState);
    game.state.add('level1', _lvl1State);

    game.state.start('home');

});