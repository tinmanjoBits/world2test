/* eslint-disable no-undef, no-unused-vars */

const BLOCKSCALE = 1;
const BLOCKSIZE = BLOCKSCALE * 32;
const CHUNK_WIDTH = 16;
const CHUNK_HEIGHT = 16;
const GRAV = 0.8;
let WORLDCOORDSX = 0;
let WORLDCOORDSY = 0;

var blocks = [];
var player = null;
frameCount = 60;
var camY = 0;
var camX = BLOCKSIZE * 8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(0, 0);
  WORLDCOORDSX = width / 4;
  WORLDCOORDSY = height / 4;
  for (let i = 0; i < (CHUNK_WIDTH / BLOCKSIZE) * BLOCKSIZE; i++) {
    for (let j = 0; j < (CHUNK_HEIGHT / BLOCKSIZE) * BLOCKSIZE; j++) {
      blocks.push(new Block(i * BLOCKSIZE, j * BLOCKSIZE, 1));
    }
  }
}

function draw() {
  // Put drawings here
  background(0);
  for (let b of blocks) {
    if (mouseX === b.pos.x - camX && mouseY === b.pos.y - camY) {
      b.render(0);
    } else {
      b.render(1);
    }

    if (b.pos.y === player.pos.y + BLOCKSIZE * 2) {
      // player.landed = true;
    }
  }
  player.update();
  player.render();
  stroke(255, 255, 0);
  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);
  text("x:" + mouseX + ", y:" + mouseY, mouseX, mouseY);

  stroke(0);
}

class Block {
  constructor(x, y, t) {
    this.pos = createVector(x, y);
    this.type = t;
  }

  render(p) {
    if (this.type === 1 && p === 1) {
      fill(255, 0, 0);
      stroke(0);
    } else {
      fill(255, 0, 0);
      stroke(255);
    }

    rect(
      this.pos.x + WORLDCOORDSX,
      this.pos.y + WORLDCOORDSY,
      BLOCKSIZE,
      BLOCKSIZE
    );
  }
}

class Player {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.landed = false;
  }

  update() {
    if (!this.landed) {
      this.vel.add(createVector(0, -GRAV));
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.vel.limit(GRAV);
    } else {
      this.vel.y = 0;
    }
  }

  render() {
    fill(0, 255, 0);
    rect(width / 2, height / 2, BLOCKSIZE, BLOCKSIZE * 2);
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
