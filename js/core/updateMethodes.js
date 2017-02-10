define(['phaser'],function(phaser){
	var isFinished =function(player, score){
        if(120 == score){
            let win = game.add.text(400, 300, 'Gagné!!', { fontSize: '60px', fill: '#000' });
        
            player.kill();
        }
	}

	var collectStar =function(player, star){
        
        // Removes the star from the screen
        star.kill();

        //  Add and update the score
        score += 10;
        scoreText.text = 'Score: ' + score;
        isFinished(player, score);
	}
}