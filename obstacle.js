function Obstacle(x, y, w, h, s, texture) {
  Rectangle.call(this, x, y, w, h);
  this.speed = s;
  this.texture = texture;
}

// Extend Rectangle
Obstacle.prototype = Object.create(Rectangle.prototype);

// Move this obstacle by its speed, and wrap it if off the screen.
Obstacle.prototype.update = function () {
  this.move(this.speed, 0);
  if (this.x > width + grid_size) {
    this.x = -this.w - grid_size;
  }
  if (this.x < -this.w - grid_size) {
    this.x = width + grid_size;
  }
};

// Display this obstacle.
Obstacle.prototype.show = function () {
  // rows[(0, 1, 2, 3, 4)];
  fill(128, 57, 30);
  image(this.texture, this.x, this.y, this.w, this.h);

  // image(carImg, this.x, this.y, this.w, this.h);
  // image(logImg, this.x, this.y, this.w, this.h);

  // rect(this.x, this.y, this.w, this.h);
};
// Obstacle.prototype.showLog = function () {
//   fill(128, 57, 30);
//   image(logImg, this.x, this.y, this.w, this.h);
// };
