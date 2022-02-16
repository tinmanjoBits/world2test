/* eslint-disable no-undef, no-unused-vars, no-constants */

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.playerSpeed = 5;
  }

  update() {}

  movePlayer(xdir, ydir) {
    if (xdir === -1) {
      this.x += -this.playerSpeed;
      return;
    }

    if (xdir === 1) {
      this.x += this.playerSpeed;
      return;
    }
    if (ydir === -1) {
      this.y += -this.playerSpeed;
      return;
    }

    if (ydir === 1) {
      this.y += this.playerSpeed;
    }
  }

  render() {
    fill(0, 255, 0);
    rect(this.x, this.y, BLOCKSIZE, BLOCKSIZE * 2);
  }
}
