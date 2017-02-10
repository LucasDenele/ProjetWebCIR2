define(['phaser','methodes/updateMethodes'],function(phaser){

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

	var _update = {
		
		update:function(){
			//  Collide the player and the stars with the platforms
	        game.physics.arcade.collide(player, platforms);
	        game.physics.arcade.collide(stars, platforms);

	        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
	        game.physics.arcade.overlap(player, stars, collectStar, null, game);

	        //  Reset the players velocity (movement)
	        player.body.velocity.x = 0;
	        player.body.velocity.y = 0;

	        if (cursors.left.isDown){

	            //  Move to the left
	            player.body.velocity.x = -150;

	            player.animations.play('left');
	        }
	        else if (cursors.right.isDown){

	            //  Move to the right
	            player.body.velocity.x = 150;

	            player.animations.play('right');
	        }
	        else if (cursors.up.isDown){

	            // Move to the top
	            player.body.velocity.y = -150;

	            player.animations.play('right');
	        }
	        else if (cursors.down.isDown){

	            // Move to the bottom
	            player.body.velocity.y = 150;

	            player.animations.play('left');
	        }
	        else{
	            //  Stand still
	            player.animations.stop();

	            player.frame = 4;
	        }
	    }
	}

	return _update;
});