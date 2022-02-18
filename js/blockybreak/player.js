/* eslint-disable no-undef, no-unused-vars, no-constants */

class Player {
  constructor(x, y) {
    this.vel = createVector(0, 0);
    this.x = x;
    this.y = y;
    this.playerSpeed = 3;
    this.landed = false;
    this.falling = false;
    this.collided = false;
    this.jumping = false;
  }

  update() {
    //console.log(player.collided);

    if (!this.landed && !this.collided && !this.jumping) {
      this.vel.add(createVector(0, GRAV));
      this.y += this.vel.y;
      this.falling = true;
    } else {
      this.vel.set(this.vel.x, 0);

      if (this.jumping) {
        this.vel.add(createVector(this.vel.x, -GRAV * 16));
        this.y += this.vel.y;
        this.jumping = false;
      }
    }

    if (this.landed) {
      this.x += this.vel.x;
      this.vel.mult(createVector(0.8, 0));
    }

    this.checkPlayerBottomCollision();

    if (this.vel.y > GRAV * 2) {
      this.vel.y = GRAV * 2;
    }
  }

  movePlayer(xdir, ydir) {
    if (xdir === -1) {
      this.vel.add(createVector(-this.playerSpeed, 0));
      // this.x += this.vel.x;
      return;
    }

    if (xdir === 1) {
      this.vel.add(createVector(this.playerSpeed, 0));
      // this.x += this.vel.x;
      return;
    }
    if (ydir === -1) {
      //  this.y += -this.playerSpeed;
      return;
    }

    if (ydir === 1) {
      //  this.y += this.playerSpeed;
    }
  }

  checkPlayerBottomCollision() {
    if (this.y > height - BLOCKSIZE * 2) {
      this.y = height - BLOCKSIZE * 2;
      this.landed = true;
      this.falling = false;
    }
  }

  checkPlayerLandedOnBlock(collider) {
    this.testBlockCollision(collider);
  }

  render() {
    fill(255);
    textSize(16);
    text("XP:" + this.x + ",YP:" + this.y, 16, 16);
    text("yvel:" + this.vel.y + ",xvel:" + this.vel.x, 16, 34);
    text(
      "Landed:" +
        this.landed +
        ",Collided:" +
        this.collided +
        ", Falling:" +
        this.falling,
      16,
      52
    );
    fill(0, 255, 0);
    if (this.collided) {
      fill(0, 0, 255);
    } else {
      fill(0, 255, 0);
    }

    rect(this.x, this.y, BLOCKSIZE, BLOCKSIZE * 2);
  }

  testBlockCollision(collider, boundary = "full") {
    if (
      Utils2d.checkBoundCollision(
        this.x,
        this.y,
        BLOCKSIZE,
        BLOCKSIZE * 2,
        collider.x * BLOCKSIZE,
        collider.y * BLOCKSIZE - 1,
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
