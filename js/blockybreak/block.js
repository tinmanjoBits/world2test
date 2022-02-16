/* eslint-disable no-undef, no-unused-vars, no-constants */
class Block {
  constructor(x, y, blocktype) {
    this.x = x;
    this.y = y;
  }
  render() {
    fill(0, 255, 0);
    rect(this.x, this.y, BLOCKSIZE, BLOCKSIZE);
  }
}
