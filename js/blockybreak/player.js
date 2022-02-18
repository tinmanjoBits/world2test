/* eslint-disable no-undef, no-unused-vars, no-constants */

class Player {
  constructor(x, y) {
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.pos = createVector(x, y);

    this.playerSpeed = 2.2;
    this.landed = false;
    this.falling = true;
    this.collided = false;
    this.jumping = false;
    this.outOfBounds = false;
  }

  update() {
    if (this.falling && !this.landed) {
      this.acc.add(0, GRAV);
      this.acc.setMag(0.6);
    }

    this.vel.add(this.acc);
    this.pos.add(this.vel);

    if (this.landed) {
      this.vel.y = 0;
      this.acc.y = 0;
      this.vel.mult(0.8, 0);
      if (abs(this.vel.x) < 0.01) {
        this.vel.x = 0;
        this.acc.x = 0;
      }
    }

    if (this.jumping) {
      this.acc.mult(0.9);
      if (this.vel.y < 0.01) {
        this.vel.y = 0;
        this.jumping = false;
      }
    }
    // checkk player has fallen out of bounds to the height of the window
    this.checkPlayerBottomCollision();

    // prevent acc limits due to euler integration
    this.acc.set(0, 0);
  }

  movePlayer(xdir, ydir) {
    if (xdir === -1) {
      this.acc.add(createVector(-this.playerSpeed, 0));

      return;
    }

    if (xdir === 1) {
      this.acc.add(createVector(this.playerSpeed, 0));
      // this.x += this.vel.x;
      return;
    }
    // if (ydir === -1) {

    //   this.y += -this.playerSpeed;
    //   return;
    // }

    // if (ydir === 1) {
    //   //  this.y += this.playerSpeed;
    // }

    if (ydir === -1 && !this.jumping) {
      this.acc.add(createVector(0, -7));
      this.falling = true;
    }
  }

  checkPlayerBottomCollision() {
    if (this.pos.y > height - BLOCKSIZE * 2) {
      this.pos.y = height - BLOCKSIZE * 2;
      this.outOfBounds = true;
      this.falling = false;
      this.vel.y = 0;
      this.acc.y = 0;
    }
  }

  checkPlayerLandedOnBlock(collider) {
    this.testBlockCollision(collider);
  }

  render() {
    fill(255);
    textSize(16);
    text("XP:" + this.pos.x + ",YP:" + this.pos.y, 16, 16);
    text("yvel:" + this.vel.y + ",xvel:" + this.vel.x, 16, 34);
    text(
      "Landed:" +
        this.landed +
        ",Collided:" +
        this.collided +
        ", Falling:" +
        this.falling +
        ", Jumping:" +
        this.jumping,
      16,
      52
    );
    fill(0, 255, 0);
    if (this.collided) {
      fill(0, 0, 255);
    } else {
      fill(0, 255, 0);
    }

    rect(this.pos.x, this.pos.y, BLOCKSIZE, BLOCKSIZE * 2);
  }

  testBlockCollision(collider, boundary = "full") {
    if (
      Utils2d.checkBoundCollision(
        this.pos.x,
        this.pos.y,
        BLOCKSIZE,
        BLOCKSIZE * 2,
        collider.pos.x * BLOCKSIZE,
        collider.pos.y * BLOCKSIZE - 1,
        BLOCKSIZE,
        BLOCKSIZE,
        boundary
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
