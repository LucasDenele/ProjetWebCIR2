require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'js',
    paths: {
        jquery:     'libs/jquery',
        handlebars: 'libs/handlebars',
        text:       'libs/text',
        phaser:     'libs/phaser.min',  
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

require(['js/core/boot.js', 'js/core/load.js', 'js/core/play.js', 'jquery', 'handlebars','phaser'], 
function(boot, load, play, $, Handlebars, Phaser){
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'GameDiv');

    game.state.add('boot', boot(game));
    game.state.add('load', load(game));
    game.state.add('play', play(game));

    game.state.start('boot');
});