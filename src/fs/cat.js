import { createReadStream } from 'fs';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

const catAction = async (parameters) => {  
    try{
      if (parameters.length === 0) {
        throw new Error(INVALID_INPUT_ERROR);
      }

      await readFile(resolve(parameters[0]), { encoding: 'utf8' });

      const writableToTerminal = process.stdin;
      const filePath = (resolve(parameters[0]));
      const readFromFile = createReadStream(filePath, { encoding: 'utf8' }); 

      await pipeline(readFromFile, writableToTerminal);
    } catch (error) {
      getError(error);
    }
};

export default catAction;
