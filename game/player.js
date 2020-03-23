class Player {
  constructor(img) {
    this.img = img;
    this.position = createVector(width / 2, height - 50);
  }

  display() {
    push();
    translate(this.position.x, this.position.y);
    imageMode(CENTER);
    image(this.img, 0, 0, 50, 50);
    pop();
  }
}
