/* eslint-disable no-undef, no-unused-vars */

const BLOCKSCALE = 1;
const BLOCKSIZE = BLOCKSCALE * 32;
const CHUNK_WIDTH = 4;
const CHUNK_HEIGHT = 4;
const GRAV = 0.8;
let WORLDCOORDSX = 0;
let WORLDCOORDSY = 0;
let WORLD_ORIGINX = 0;
let WORLD_ORIGINY = 0;

var blocks = [];
var player = null;
frameCount = 60;
var cam;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(0, 0);
  WORLDCOORDSX = width / 4;
  WORLDCOORDSY = height / 4;
  WORLD_ORIGINX = width / 2 + 8;
  WORLD_ORIGINY = height / 2 + 8;
  cam = new Camera2D(0, 0, 0);

  for (let i = 0; i < CHUNK_WIDTH; i++) {
    for (let j = 0; j < CHUNK_HEIGHT; j++) {
      blocks.push(new Block(i, j, 1));
    }
  }
}

class Utils2d {
  static windowToWorldCoord(x, y) {
    let b = [];
    b[0] = floor((x - WORLD_ORIGINX * BLOCKSCALE) / BLOCKSIZE);
    b[1] = floor((y - WORLD_ORIGINY * BLOCKSCALE) / BLOCKSIZE);

    return b;
  }

  static cameraPaneToWorldCoord(x, y) {
    let b = [];
    b[0] = floor((x - WORLD_ORIGINX - cam.pos.x * BLOCKSCALE) / BLOCKSIZE);
    b[1] = floor((y - WORLD_ORIGINY - cam.pos.y * BLOCKSCALE) / BLOCKSIZE);

    return b;
  }

  static assertTest(values = [], expectedValues = []) {
    let actualValues = [];
    for (let v = 0; v < values.length; v++) {
      for (let e = 0; e < expectedValues.length; e++) {
        if (values[v] === expectedValues[e]) {
          actualValues[v] = true;
          console("Value:");
        } else {
          actualValues[v] = false;
        }
      }
    }
  }
}

function doKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    cam.moveCamera(4, 0);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    cam.moveCamera(-4, 0);
  }
  if (keyIsDown(DOWN_ARROW)) {
    cam.moveCamera(0, -4);
  }

  if (keyIsDown(UP_ARROW)) {
    cam.moveCamera(0, 4);
  }
}

function mouseClicked() {
  createNewBlock(mouseX, mouseY, 1);
}

function createNewBlock(mx, my, t = 1) {
  let nb = Utils2d.cameraPaneToWorldCoord(mx, my);
  //let newblock;
  console.log(nb);
  for (let b of blocks) {
    if (b.pos.x !== nb[0] && b.pos.y !== nb[1]) {
      // blocks.push(new Block(nb[0]), nb[1], t);
      let newblock = new Block(nb[0], nb[1], 1);
      blocks.push(newblock);
      console.log("New block created");
      break;
    }
  }
}

function draw() {
  // Put drawings here
  background(0);
  let y = 0;
  for (let b of blocks) {
    y = y + 1;
    let coords = Utils2d.windowToWorldCoord(mouseX, mouseY);

    if (coords[0] === b.pos.x && coords[1] === b.pos.y) {
      b.render(0);
    } else {
      b.render(1);
    }

    text("x:" + b.pos.x + ",y:" + b.pos.y, 10, 15 * y);

    if (b.pos.y === player.pos.y + BLOCKSIZE * 2) {
      // player.landed = true;
    }
  }

  cam.render();
  player.render();
  player.update();
  doKeys();

  // Draw point location lines
  stroke(255, 255, 0);
  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);
  text("x:" + mouseX + ", y:" + mouseY, mouseX, mouseY - 8);

  text(
    "x:" +
      floor((mouseX - WORLD_ORIGINX * BLOCKSCALE) / BLOCKSIZE) +
      ", y:" +
      floor((mouseY - WORLD_ORIGINY * BLOCKSCALE) / BLOCKSIZE),
    mouseX + 100,
    mouseY - 8
  );

  // Draw Origin lines, lines x,y default to 0,0 but central to window
  stroke(0, 0, 255);
  line(WORLD_ORIGINX + cam.pos.x, 0, WORLD_ORIGINX + cam.pos.x, height);
  line(0, WORLD_ORIGINY + cam.pos.y, width, WORLD_ORIGINY + cam.pos.y);
  stroke(0);
}

class Block {
  constructor(x, y, t, chunk) {
    this.pos = createVector(x, y);
    this.chunkid = chunk;
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
      this.pos.x * BLOCKSIZE + WORLD_ORIGINX + cam.pos.x,
      this.pos.y * BLOCKSIZE + WORLD_ORIGINY + cam.pos.y,
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
    rect(width / 2 + 8, height / 2 + 8, BLOCKSIZE, BLOCKSIZE * 2);
  }
}

class Camera2D {
  constructor(x = 0, y = 0, zoom = 0) {
    this.pos = createVector(x, y);
    this.camWidth = width;
    this.camHeight = height;
    this.zoom = zoom;
  }

  moveCamera(xvect = 0, yvect = 0) {
    this.pos.x += xvect;
    this.pos.y += yvect;
  }

  render(boundary = 0) {
    stroke(255, 240, 0, 100);

    line(
      BLOCKSIZE * 2,
      BLOCKSIZE * 2,
      this.camWidth - BLOCKSIZE * 2,
      this.camHeight - BLOCKSIZE * 2
    );
    // line(
    //   (width / BLOCKSIZE) * BLOCKSIZE - BLOCKSIZE * 2,
    //   this.camHeight - BLOCKSIZE * 2,
    //   this.camWidth - BLOCKSIZE * 2,
    //   (height / BLOCKSIZE) * BLOCKSIZE - BLOCKSIZE * 2
    // );
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
