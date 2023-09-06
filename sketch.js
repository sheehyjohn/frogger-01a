var startGame = 0;

var frog;

var grid_size = 50;

var rows = [];

let img;

let gg = "Game Over";

let winner;

let boing2;

let loselife;

let gameOver;

// Handles game reset if the frog dies, or at the initial load.
function resetGame() {
  frog = new Frog(width / 2, height - grid_size, grid_size);
  startGame = 0;
}

function preload() {
  frogImg = loadImage("frog.png");
  carImg = loadImage("Car.png");
  gameOverImg = loadImage("Game Over.jpeg");
  logImg = loadImage("log.png");
  youWinImg = loadImage("you win.jpeg");
  frogRight = loadImage("frog right.png");
  frogLeft = loadImage("frog left.png");
  frogDown = loadImage("frog down.png");
  winnerImg = loadImage("winner.png");
}

// p5js setup function, ran on page load.
function setup() {
  width = 500;
  rows = [
    new Row(0, 1, 0, width, 0, 0, true, logImg),
    new Row(grid_size, 1, 0, width, 0, 0, true, logImg),
    new Row(2 * grid_size, 2, 0.5, 4 * grid_size, 400, 10, true, logImg),
    new Row(3 * grid_size, 3, -1.3, 2 * grid_size, 200, 30, true, logImg),
    new Row(4 * grid_size, 2, 2.3, 3 * grid_size, 250, 25, true, logImg),
    new Row(5 * grid_size, 1, 0, width, 0, 0, true, logImg),
    new Row(6 * grid_size, 3, 1.2, 1 * grid_size, 150, 100, false, carImg),
    new Row(7 * grid_size, 2, -3.5, 1 * grid_size, 200, 150, false, carImg),
    new Row(8 * grid_size, 2, 2, 2 * grid_size, 300, 0, false, carImg),
    new Row(9 * grid_size, 2, 0, width, 0, 0, true, logImg)
  ];
  createCanvas(width, rows.length * grid_size);
  boing2 = loadSound("boing2.mp3");
  winner = loadSound("winner.mp3");
  loselife = loadSound("loselife.mp3");
  gameOver = loadSound("gameOver.mp3");
  resetGame();
}
var lives = 3;

// p5js draw function, ran on every frame.
function draw() {
  background(0);

  stroke(0);
  fill(11, 112, 241);
  rect(0, 100, 500, 150);

  fill(55, 55, 55);
  stroke(1);
  rect(0, 300, 500, 50);
  rect(0, 350, 500, 50);
  rect(0, 400, 500, 50);

  fill(255, 100);

  // image(img, 0, 0);

  var intersects = null;

  for (var i = 0; i < rows.length; i++) {
    rows[i].show();
    rows[i].update();
    if (frog.intersects(rows[i])) {
      intersects = rows[i].hits(frog);
      if ((intersects !== null) ^ rows[i].inverted) {
        lives = lives - 1;
        loselife.play();
        console.log(lives);
        if (lives <= 0) {
          image(gameOverImg, 0, 55, 500, 237);
          noLoop();
        }

        //print("GAME OVER");
        //}
        resetGame();
      }
    }
    fill(145, 169, 89);
    rect(0, 0, 500, 100);
    rect(0, 250, 500, 50);
    fill(36, 36, 36);
    rect(0, 450, 500, 50);
    fill(11, 112, 241);
    rect(15, 50, 70, 50);
    rect(110, 50, 70, 50);
    rect(210, 50, 70, 50);
    rect(310, 50, 70, 50);
    rect(410, 50, 70, 50);
  }
  if (lives == 3) {
    fill(162, 184, 78);
    rect(0, 470, 90, 30);
    fill(255);
    text("Lives: 3", 10, 490);
    textSize(20);
  }
  if (lives == 2) {
    fill(162, 184, 78);
    rect(0, 470, 90, 30);
    fill(255);
    text("Lives: 2", 10, 490);
    textSize(20);
  }
  if (lives == 1) {
    fill(162, 184, 78);
    rect(0, 470, 90, 30);
    fill(255);
    text("Lives: 1", 10, 490);
    textSize(20);
  }
  if (lives == 0) {
    fill(162, 184, 78);
    rect(0, 470, 90, 30);
    fill(255);
    text("Lives: 0", 10, 490);
    textSize(20);
    gameOver.play();
  }

  //before first bucket lose

  if (frog.y < 100) {
    if (frog.x < 15) {
      lives = lives - 1;
      loselife.play();
      resetGame();
    }
    if (lives == 0) {
      fill(162, 184, 78);
      rect(0, 470, 90, 30);
      fill(255);
      text("Lives: 0", 10, 490);
      textSize(20);
    }
    if (lives <= 0) {
      image(gameOverImg, 0, 55, 500, 237);
      noLoop();
      gameOver.play();
    }
  }

  // first bucket win
  if (frog.y < 100) {
    if (frog.x < 65 && frog.x > 15) {
      image(winnerImg, 0, 55, 500, 237);
      noLoop();
      winner.play();
    }
  }

  // between first and second bucket lose
  if (frog.y < 100) {
    if (frog.x < 100 && frog.x > 65) {
      lives = lives - 1;
      loselife.play();
      resetGame();
    }
    if (lives == 0) {
      fill(162, 184, 78);
      rect(0, 470, 90, 30);
      fill(255);
      text("Lives: 0", 10, 490);
      textSize(20);
    }
    if (lives <= 0) {
      image(gameOverImg, 0, 55, 500, 237);
      noLoop();
      gameOver.play();
    }
  }

  // second bucket win

  if (frog.y < 100) {
    if (frog.x < 165 && frog.x > 100) {
      image(winnerImg, 0, 55, 500, 237);
      noLoop();
      winner.play();
    }
  }

  //between second and third bucket lose

  if (frog.y < 100) {
    if (frog.x < 195 && frog.x > 165) {
      lives = lives - 1;
      loselife.play();
      resetGame();
    }
    if (lives == 0) {
      fill(162, 184, 78);
      rect(0, 470, 90, 30);
      fill(255);
      text("Lives: 0", 10, 490);
      textSize(20);
    }
    if (lives <= 0) {
      image(gameOverImg, 0, 55, 500, 237);
      noLoop();
      gameOver.play();
    }
  }

  //third bucket win

  if (frog.y < 100) {
    if (frog.x < 265 && frog.x > 195) {
      image(winnerImg, 0, 55, 500, 237);
      noLoop();
      winner.play();
    }
  }

  //between third and fourth bucket lose

  if (frog.y < 100) {
    if (frog.x < 295 && frog.x > 265) {
      lives = lives - 1;
      loselife.play();
      resetGame();
    }
    if (lives == 0) {
      fill(162, 184, 78);
      rect(0, 470, 90, 30);
      fill(255);
      text("Lives: 0", 10, 490);
      textSize(20);
    }
    if (lives <= 0) {
      image(gameOverImg, 0, 55, 500, 237);
      noLoop();
      gameOver.play();
    }
  }

  // fourth bucket win

  if (frog.y < 100) {
    if (frog.x < 365 && frog.x > 295) {
      image(winnerImg, 0, 55, 500, 237);
      noLoop();
      winner.play();
    }
  }

  //between fourth and fifth bucket lose

  if (frog.y < 100) {
    if (frog.x < 395 && frog.x > 365) {
      lives = lives - 1;
      loselife.play();
      resetGame();
    }
    if (lives == 0) {
      fill(162, 184, 78);
      rect(0, 470, 90, 30);
      fill(255);
      text("Lives: 0", 10, 490);
      textSize(20);
    }
    if (lives <= 0) {
      image(gameOverImg, 0, 55, 500, 237);
      noLoop();
      gameOver.play();
    }
  }

  //fifth bucket win

  if (frog.y < 100) {
    if (frog.x < 465 && frog.x > 395) {
      image(winnerImg, 0, 55, 500, 237);
      noLoop();
      winner.play();
    }
  }

  //after fifth bucket lose

  if (frog.y < 100) {
    if (frog.x > 465) {
      lives = lives - 1;
      loselife.play();
      resetGame();
    }
    if (lives == 0) {
      fill(162, 184, 78);
      rect(0, 470, 90, 30);
      fill(255);
      text("Lives: 0", 10, 490);
      textSize(20);
    }
    if (lives <= 0) {
      image(gameOverImg, 0, 55, 500, 237);
      noLoop();
      gameOver.play();
    }
  }

  // if (frog.y < 100) {
  //   if (frog.x < 170 && frog.x > 120) image(winnerImg, 0, 55, 500, 237);
  //   noLoop();
  // }
  // if (frog.position == position(10, 0)) {
  //   image(gameOverImg, 0, 55, 500, 237);
  // }
  // if (frog.x <= pos.x(10)) {
  //   image(gameOverImg, 0, 55, 500, 237);
  // }

  frog.attach(intersects);
  frog.update();
  frog.show();
}

// p5js key pressed function, runs when any key is pressed on the keyboard
// while the game is open.
function keyPressed() {
  // if (boing.isPlaying()) {
  //   // .isPlaying() returns a boolean
  //   boing.stop();
  // } else {
  //   boing.play();
  // }
  // boing.play();
  if (keyCode === UP_ARROW) {
    frog.move(0, -grid_size);
    frog.up();
    boing2.play();
  } else if (keyCode === DOWN_ARROW) {
    frog.move(0, grid_size);
    frog.down();
    boing2.play();
  } else if (keyCode === LEFT_ARROW) {
    frog.move(-grid_size, 0);
    frog.left();
    boing2.play();

    // frog.rotate(radians(45));
  } else if (keyCode === RIGHT_ARROW) {
    frog.move(grid_size, 0);
    frog.right();
    boing2.play();
  }
}

// if (frog pos.y = whatever) {
//   image(youWinImg, 0, 55, 500, 237)
// }
