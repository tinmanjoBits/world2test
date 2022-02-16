/*
class Utils2d {
  static windowToWorldCoord(x, y) {
    let b = [];
    b[0] = floor((x - WORLD_ORIGINX * BLOCKSCALE) / BLOCKSIZE);
    b[1] = floor((y - WORLD_ORIGINY * BLOCKSCALE) / BLOCKSIZE);

    return b;
  }

  static cameraPaneToWorldCoord(x, y) {
    let b = [];
    b[0] = floor(
      (x - WORLD_ORIGINX - player.cam.pos.x * BLOCKSCALE) / BLOCKSIZE
    );
    b[1] = floor(
      (y - WORLD_ORIGINY - player.cam.pos.y * BLOCKSCALE) / BLOCKSIZE
    );

    return b;
  }

  static assertTest(values = [], expectedValues = []) {
    let actualValues = [];
    for (let v = 0; v < values.length; v++) {
      for (let e = 0; e < expectedValues.length; e++) {
        if (values[v] === expectedValues[e]) {
          actualValues[v] = true;
          console("Value:");
        } else {
          actualValues[v] = false;
        }
      }
    }
  }
}

function mouseClicked() {
  createNewBlock(mouseX, mouseY, 1);
}

function createNewBlock(mx, my, t = 1) {
  let nb = Utils2d.cameraPaneToWorldCoord(mx, my);
  //let newblock;
  console.log(nb);
  for (let b of blocks) {
    if (b.pos.x !== nb[0] && b.pos.y !== nb[1]) {
      // blocks.push(new Block(nb[0]), nb[1], t);
      let newblock = new Block(nb[0], nb[1], 1);
      blocks.push(newblock);
      console.log("New block created");
      break;
    }
  }
}
*/
