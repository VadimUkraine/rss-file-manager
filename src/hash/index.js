import { resolve } from 'path';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

const hashAction = async (parameters) => {
  try {   
    const filePath = parameters[0];

    if (!filePath) {
      throw new Error(INVALID_INPUT_ERROR);
    }

    const newFilePath = filePath.replaceAll(`"`, '');
    const contents = await readFile(resolve(newFilePath), { encoding: 'utf8' });
    const hash = createHash('sha256').update(contents).digest('hex');

    console.log('hash: ', hash);
  } catch (error) {
    getError(error);
  }
};

export default hashAction;
