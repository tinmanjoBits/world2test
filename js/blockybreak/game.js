/* eslint-disable no-undef, no-unused-vars, no-constants */

class GameHandler {
  constructor(c, p) {
    this.controller = c;
    this.player = p;
  }

  gameLoop() {
    this.gameKeys();
    this.player.update();
    if (this.player.falling) {
      this.checkPlayerOnTopOfBlocks();
    }
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
      //   this.player.movePlayer(0, -1);
    }
    if (this.controller.downKeyDwn) {
      //   this.player.movePlayer(0, 1);
    }
    if (this.controller.jumpKey) {
      this.player.movePlayer(0, -1);
    }
  }

  checkPlayerOnTopOfBlocks() {
    this.player.collided = false;
    this.player.landed = false;
    for (let b of blocks) {
      // only check blocks under the player
      this.player.collided = player.testBlockCollision(b, "top");
      if (this.player.collided) {
        this.player.pos.y = b.pos.y * BLOCKSIZE - BLOCKSIZE * 2 - 1;
        this.player.collided = false;
        this.player.landed = true;

        // prevent falling through floor of block
        //this.player.falling = false;
        this.player.vel.y = 0;
        break;
      }
    }
    if (this.player.collided) {
      //  this.player.collided = false;
    }
  }

  renderWorld() {
    //    this.player.update();
    for (let b of blocks) {
      b.render();
    }

    this.player.render();
  }
}
