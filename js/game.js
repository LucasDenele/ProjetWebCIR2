//var game;
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

require(['jquery', 'handlebars', 'phaser', 'core/boot'], 
function($, Handlebars, Phaser, boot){
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'GameDiv');

    game.state.add('boot', boot);

    game.state.start('boot');

});