/* eslint-disable no-undef, no-unused-vars, no-constants */
class Block {
  constructor(x, y, blocktype) {
    this.x = x;
    this.y = y;
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
    text(this.x + "," + this.y, this.x * BLOCKSIZE, this.y * BLOCKSIZE);
    fill(255, 0, 0);
    rect(this.x * BLOCKSIZE, this.y * BLOCKSIZE, BLOCKSIZE, BLOCKSIZE);
  }
}
