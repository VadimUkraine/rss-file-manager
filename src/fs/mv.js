
import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { rm, readFile } from 'fs/promises';
import { pipeline } from 'stream/promises';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

const mvAction = async (parameters) => { 
  try {
    if (parameters.length < 2) {
      throw new Error(INVALID_INPUT_ERROR);
    }

    const  oldFilePath = resolve(parameters[0]);

    await readFile(resolve(oldFilePath), { encoding: 'utf8' });

    const destinationDir = parameters[1];
    const file = parse(oldFilePath).base;
    const newFilePath = resolve(destinationDir, file);

    await pipeline(
      createReadStream(oldFilePath), 
      createWriteStream(newFilePath),
      rm(oldFilePath),
    );  
  } catch (error) {
    getError(error);
  }
};

export default mvAction;
