/* eslint-disable no-undef, no-unused-vars, no-constants */

class GameHandler {
  constructor(c, p) {
    this.controller = c;
    this.player = p;
  }

  gameLoop() {
    this.gameKeys();
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

  renderWorld() {
    //    this.player.update();
    this.player.render();
  }
}
