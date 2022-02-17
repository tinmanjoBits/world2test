/* eslint-disable no-undef, no-unused-vars, no-constants */

class GameHandler {
  constructor(c, p) {
    this.controller = c;
    this.player = p;
  }

  gameLoop() {
    this.gameKeys();
    this.player.update();
    this.checkPlayerBlockCollisions();
    this.renderWorld();
  }

  gameKeys() {
    if (this.controller.leftKeyDwn) {
      this.player.movePlayer(-1, 0);
    }
    if (this.controller.rightKeyDwn) {
      this.player.movePlayer(1, 0);
    }
    if (this.controller.upKeyDwn) {
      this.player.movePlayer(0, -1);
    }
    if (this.controller.downKeyDwn) {
      this.player.movePlayer(0, 1);
    }
  }

  checkPlayerBlockCollisions() {
    for (let b of blocks) {
      if (
        Utils2d.checkBoundCollision(
          this.player.x,
          this.player.y,
          BLOCKSIZE,
          BLOCKSIZE,
          b.x,
          b.y,
          BLOCKSIZE,
          BLOCKSIZE
        )
      ) {
        this.player.y = 0; // b.y - BLOCKSIZE * 3;
        this.player.yvel = 0;
        break;
      }
    }
  }

  renderWorld() {
    //    this.player.update();
    this.player.render();
  }
}
