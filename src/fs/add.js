import { cwd } from 'process';
import { resolve } from 'path';
import { writeFile } from 'fs/promises';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

const addAction = async (parameters) => {  
  try {
    if (parameters.length === 0) {
      throw new Error(INVALID_INPUT_ERROR);
    }
    
    const path = cwd();
    const fileName = parameters[0];
    const resolvedPath = resolve(path, fileName);
    
    await writeFile(resolvedPath, '', { flag: 'wx' });
  } catch (error) {
    getError(error);
  }
};

export default addAction;
