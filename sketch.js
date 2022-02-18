/* eslint-disable no-undef, no-unused-vars */

var t1, t2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  controller = new Controller();
  blocks = [];
  player = new Player(BLOCKSIZE * 6, height / 2);
  gameHandler = new GameHandler(controller, player);
  generateTerrain(0, 24);

  // test collion with colliders
  //t1 = new TestBlock(16, 16 * BLOCKSIZE, BLOCKSIZE, BLOCKSIZE * 2);
  //t2 = new TestBlock(16 * BLOCKSIZE, 14 * BLOCKSIZE);
}

function keyPressed() {
  if (keyCode === 67) {
    player.jumping = true;
    console.log("jump");
  }
}

function draw() {
  background(0);
  controller.doKeys();
  gameHandler.gameLoop();

  //t1.render();
  //t2.render();
  if (mouseIsPressed === true) {
    player.x = mouseX;
    player.y = mouseY;
    player.landed = false;
    player.collided = false;
  }
}

function generateTerrain(x, y) {
  for (let i = 0; i < 16; i++) {
    blocks.push(new Block(i + x, y));
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

class TestBlock {
  constructor(x, y, w = BLOCKSIZE, h = BLOCKSIZE) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collided = false;
  }

  render() {
    if (!this.collided) {
      fill(255);
    } else {
      fill(0, 0, 255);
    }

    rect(this.x, this.y, this.w, this.h);
  }
}
