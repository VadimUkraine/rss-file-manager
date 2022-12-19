import osActions from '../os/index.js';
import hashAction from '../hash/index.js';
import compressAction from '../zip/compress.js';
import decompressAction from '../zip/decompress.js';
import upAction from '../nwd/up.js';
import cdAction from '../nwd/cd.js';
import lsAction from '../nwd/ls.js';
import exitAction from '../cli/exit.js';
import catAction from '../fs/cat.js';
import addAction from '../fs/add.js';
import rnAction from '../fs/rn.js';
import cpAction from '../fs/cp.js';
import rmAction from '../fs/rm.js';
import  mvAction from "../fs/mv.js";


const commands = {
  os: osActions,
  hash: hashAction,
  compress: compressAction,
  decompress: decompressAction,
  up: upAction,
  cd: cdAction,
  ls: lsAction,
  '.exit': exitAction,
  cat: catAction,
  add: addAction,
  rn: rnAction,
  cp: cpAction,
  rm: rmAction,
  mv:  mvAction,
};

export default commands;
