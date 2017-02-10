var game;
var player;
var platforms;
var cursors;
var stars;
var star;
var score = 0;
var scoreText;

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

require(['jquery', 'handlebars', 'phaser', 'js/core/preload.js', 'js/core/create.js', 'js/core/update.js'], 
function($, Handlebars, Phaser, _preload, _create, _update){
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'GameDiv');

    game.state.add('preload', _preload);
    game.state.add('create', _create);
    game.state.add('update', _update);
    game.state.start('preload');

});