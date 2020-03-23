class Bullet {
  constructor(position) {
    this.position = position;
    this.isCollided = false;
    this.velocity = createVector(0, -8);
  }

  display() {
    push();
    fill(color(240, 100, 100));
    noStroke();
    ellipseMode(CENTER);
    translate(this.position.x, this.position.y);
    ellipse(0, 0, 15, 15);
    pop();
  }

  update() {
    this.position.add(this.velocity);
  }

  isOutofBounds() {
    return this.position.y <= -20;
  }
}
