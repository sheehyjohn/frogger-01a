function Frog(x, y, size) {
  Rectangle.call(this, x, y, size, size);

  this.sitting_on = null;
}

// Extend Rectangle.
Frog.prototype = Object.create(Rectangle.prototype);

// Attach this frog to the other object, taking its speed.
Frog.prototype.attach = function (other) {
  this.sitting_on = other;
};

// Update the frog. If it is attached to an object, it will move with it.
Frog.prototype.update = function () {
  if (this.sitting_on !== null) {
    this.x += this.sitting_on.speed;
  }
  this.x = constrain(this.x, 0, width - this.w);
};

// Show the frog in the game window.
Frog.prototype.show = function () {
  fill(255);
  // fill(img);
  // image(img, 0, 0);
  // if (keyPressed()
  if (startGame == 0) {
    image(frogImg, this.x, this.y, this.w, this.h);
  }
  //  noLoop();)

  if (this.direction == "up") {
    image(frogImg, this.x, this.y, this.w, this.h);
    startGame = 1;
  }

  if (this.direction == "left") {
    image(frogLeft, this.x, this.y, this.w, this.h);
    startGame = 1;
  }

  if (this.direction == "right") {
    image(frogRight, this.x, this.y, this.w, this.h);
    startGame = 1;
  }

  if (this.direction == "down") {
    image(frogDown, this.x, this.y, this.w, this.h);
    startGame = 1;
  }

  // rect(this.x, this.y, this.w, this.h);
  // image(this.x, this.y, this.w, this.h);
};
Frog.prototype.left = function () {
  this.direction = "left";
};
Frog.prototype.up = function () {
  this.direction = "up";
};
Frog.prototype.right = function () {
  this.direction = "right";
};
Frog.prototype.down = function () {
  this.direction = "down";
};
