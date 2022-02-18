/* eslint-disable no-undef, no-unused-vars, no-constants */

const CHUNK_WIDTH = 4;
const CHUNK_HEIGHT = 4;
const GRAV = 6.8;
//const GAME_FLOOR = height;

let WORLDCOORDSX = 0;
let WORLDCOORDSY = 0;
let WORLD_ORIGINX = 0;
let WORLD_ORIGINY = 0;

let blocks = [];
let player;
let controller;
let gameHandler;

frameCount = 60;
