
import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { readFile } from 'fs/promises';
import { pipeline } from 'stream/promises';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

const cpAction = async (parameters) => {  
  try {
    if (parameters.length < 2) {
      throw new Error(INVALID_INPUT_ERROR);
    }

    const oldFilePath = resolve(parameters[0]);
    await readFile(oldFilePath, { encoding: 'utf8' });

    const destinationDir = parameters[1];
    const file = parse(oldFilePath).base;
    const newFilePath = resolve(destinationDir, file);

    await pipeline(
      createReadStream(oldFilePath), 
      createWriteStream(newFilePath),
    );  
  } catch (error) {
    getError(error);
  }
};

export default cpAction;
