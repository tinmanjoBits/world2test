/* eslint-disable no-undef, no-unused-vars, no-constants */
class Block {
  constructor(x, y, blocktype) {
    this.pos = createVector(x, y);
    this.blocktype = blocktype;
    this.collision = false;
  }

  render() {
    if (!this.collision) {
      fill(255, 0, 0);
    } else {
      fill(0, 0, 255);
    }
    textSize(8);
    fill(255);
    text(
      this.pos.x + "," + this.pos.y,
      this.pos.x * BLOCKSIZE,
      this.pos.y * BLOCKSIZE
    );
    fill(255, 0, 0);
    rect(this.pos.x * BLOCKSIZE, this.pos.y * BLOCKSIZE, BLOCKSIZE, BLOCKSIZE);
  }
}
