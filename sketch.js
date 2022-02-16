/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  controller = new Controller();
  blocks = [];
  player = new Player(width / 2, height / 2);
  gameHandler = new GameHandler(controller, player);
}
function draw() {
  background(0);
  gameHandler.gameLoop();
  controller.doKeys();
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
