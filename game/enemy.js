class Enemy {
  constructor(position, img) {
    this.position = position;
    this.img = img;
    this.life = 3;
    this.velocity = createVector(0, 3);
  }

  display() {
    push();
    translate(this.position.x, this.position.y);
    imageMode(CENTER);
    image(this.img, 0, 0, 50, 50);
    pop();
  }

  update() {
    this.position.add(this.velocity);
  }

  isOutofBounds() {
    return this.position.y >= height + 50;
  }

  isDead() {
    return this.life <= 0;
  }

  isCollided(size, targetPosition) {
    return (
      this.position.x < targetPosition.x + size &&
      this.position.x + 50 > targetPosition.x &&
      this.position.y < targetPosition.y + size &&
      this.position.y + 50 > targetPosition.y
    );
  }
}
