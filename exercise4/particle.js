// code and inspiration from:
// https://youtu.be/MfxBfRD0FVU

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // update the size of the element we render
  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  // render the element on the screen
  // by default the shape will be a point/circle
  show() {
    stroke(255);
    strokeWeight(25);
    point(this.x, this.y);
  }
}

class Box extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.r = 10;
  }

  update() {
    super.update();
    this.r += random(-8, 8);
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
}

class Rec extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.z = 320;
    this.a = 100;
    this.b = 310;
    this.c = 80;
  }

  update() {
    super.update();
    this.x += random(-5, 5);
    this.y += random(-5, 5);
    this.z += random(-5, 5);
    this.a += random(-2, 2);
    this.b += random(-2, 2);
    this.c += random(-2, 2);
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    triangle(this.x, this.y, this.z, this.a, this.b, this.c);
  }
}
