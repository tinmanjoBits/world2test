/* eslint-disable no-undef, no-unused-vars, no-constants */
class Block {
  constructor(x, y, blocktype) {
    this.x = x;
    this.y = y;
    this.blocktype = blocktype;
  }
  render() {
    fill(255, 0, 0);
    rect(this.x * BLOCKSIZE, this.y * BLOCKSIZE, BLOCKSIZE, BLOCKSIZE);
  }
}
