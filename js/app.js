//aa every global variable lessens performance?
const borderL = -100;
const borderR = 510;
const tileW = 100;
const tileH = 80;

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //aa set location and speed
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //aa sets the speed based on location, sets borders, handles collisions, reset at win
    this.x += this.speed;
    if(this.x > borderR){
      this.x = borderL;
     }
    if (this.x == player.x && this.y == player.y){
      player.x = 200;
      player.y = 375;
      window.alert('BUG ATTACK! Start over.');
    } if (player.y < 0){
      window.setTimeout(window.alert,50,'The SPLASH of success!');
      player.x = 200;
      player.y = 375;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// aa below most
var Player = function() {
    this.x = 200;
    this.y = 375;
    this.sprite = 'images/char-boy.png';
}
Player.prototype.update = function(){
  // code
}
Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput = function(allowedKeys){
  if(allowedKeys == 'left' && this.x > 0){
    this.x -= tileW;
  } else if (allowedKeys == 'right' && this.x < 400){
    this.x += tileW;
  } else if (allowedKeys == 'down' && this.y < 375){
    this.y += tileH;
  } else if (allowedKeys == 'up' && this.y > -25){
    this.y -= tileH;
  } else {
    //window.alert('Ouch!');
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//aa creates objects
let enemy1 = new Enemy(borderL, 55, 4); // how do I decide how many to create?
let enemy2 = new Enemy(borderL, 135, 10);
let enemy3 = new Enemy(borderL, 215, 5); // has to be devisible by the player's coordinates
let allEnemies = [enemy1, enemy2, enemy3]; // how to cycle through all enemy objects dynamically?
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
