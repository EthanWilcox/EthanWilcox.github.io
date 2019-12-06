var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:500,y:groundY},
                {type: 'sawblade',x:700,y:140},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'steelBall',x:1200,y:200},
                {type: 'enemy',x:600,y:groundY-50},
                {type: 'reward',x:1500,y:150}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);        
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        
        createSawBlade(400, 195);
        createSawBlade(700, 300);
        createSawBlade(1000, 195);
        
        for (i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
            
            if (gameItem.type === 'sawblade') {
                createSawBlade(gameItem.x, gameItem.y);
            }
            else if (gameItem.type === 'steelBall') {
                createSteelBall(gameItem.x, gameItem.y); 
            }
            else if (gameItem.type === 'enemy') {
                createEnemy(gameItem.x, gameItem.y);
            }
            else if (gameItem.type === 'reward') {
                createReward(gameItem.x, gameItem.y);
            }
            
            
        }
        
        function createSteelBall(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 20;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);        
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.circle(25, 'green', 'black', 2);
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -1;
            obstacleImage.y = -1;
        }
        
        function createEnemy(x, y) {
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 10;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10);
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function() {
                game.increaseScore(100);
                enemy.fadeOut();
            };
        }
        
        function createReward(x, y) {
            var reward =  game.createGameItem('reward',25);
            var yellowSquare = draw.rect(50,50,'yellow')
            yellowSquare.x = -25;
            yellowSquare.y = -25;
            reward.addChild(yellowSquare);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -2;
            reward.onPlayerCollision = function() {
                game.changeIntegrity(20);
                game.increaseScore(900);
                reward.fadeOut();
            };
        }
        
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}