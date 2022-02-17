/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  controller = new Controller();
  blocks = [];
  player = new Player(0, height / 2);
  gameHandler = new GameHandler(controller, player);
  generateTerrain(0, 16);
}
function draw() {
  background(0);
  gameHandler.gameLoop();
  controller.doKeys();
  for (let b of blocks) {
    b.render();
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
