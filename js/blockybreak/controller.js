/* eslint-disable no-undef, no-unused-vars, no-constants */
class Controller {
  constructor() {
    this.leftKeyDwn = false;
    this.rightKeyDwn = false;
    this.upKeyDwn = false;
    this.downKeyDwn = false;
    this.spaceKeyDwn = false;
  }

  doKeys() {
    if (keyIsDown(LEFT_ARROW)) {
      this.leftKeyDwn = true;
    } else {
      this.leftKeyDwn = false;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.rightKeyDwn = true;
    } else {
      this.rightKeyDwn = false;
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.downKeyDwn = true;
    } else {
      this.downKeyDwn = false;
    }

    if (keyIsDown(UP_ARROW)) {
      this.upKeyDwn = true;
    } else {
      this.upKeyDwn = false;
    }
  }
}
