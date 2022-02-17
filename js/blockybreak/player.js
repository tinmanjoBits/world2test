/* eslint-disable no-undef, no-unused-vars, no-constants */

class Player {
  constructor(x, y) {
    this.x = x;
    this.xvel = 0;
    this.y = y;
    this.yvel = 0;
    this.playerSpeed = 5;
    this.landed = false;
  }

  update() {
    this.yvel += GRAV;
    this.y += this.yvel;

    this.checkPlayerBottomCollision();
  }

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

  checkPlayerBottomCollision() {
    if (this.y > height - BLOCKSIZE * 2) {
      this.y = height - BLOCKSIZE * 2;
      this.landed = true;
    }
  }

  render() {
    fill(0, 255, 0);
    rect(this.x, this.y, BLOCKSIZE, BLOCKSIZE * 2);
  }
}
