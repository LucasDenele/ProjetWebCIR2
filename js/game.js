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

<<<<<<< HEAD
require(['jquery', 'handlebars', 'phaser', 'states/home/home', 'states/options/options', 'states/credits/credits'], 
function($, Handlebars, Phaser, _homeState, _optionsState, _creditsState){
    var game = new Phaser.Game("99", "99", Phaser.AUTO, 'GameDiv');
=======
require(['jquery', 'handlebars', 'phaser', 'states/home/home', 'states/options/options', 'states/credits/credits', 'states/level1/level1', 'states/level2/level2', 'states/level3/level3', 'states/level4/level4'], 
function($, Handlebars, Phaser, _homeState, _optionsState, _creditsState, _lvl1State, _lvl2State, _lvl3State, _lvl4State){
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'GameDiv');
>>>>>>> 5dcb7db161d2b9a9289caf09b60f37743ed528c1

    game.state.add('home', _homeState);
    game.state.add('options', _optionsState);
    game.state.add('credits', _creditsState);
    game.state.add('lvl1', _lvl1State);
    game.state.add('lvl2', _lvl2State);
    game.state.add('lvl3', _lvl3State);
    game.state.add('lvl4', _lvl4State);

    game.state.start('home');

});