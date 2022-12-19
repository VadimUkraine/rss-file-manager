import { resolve, dirname } from 'path';
import { rename } from 'fs/promises';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

const rnAction = async (parameters) => {  
  try {
    if (parameters.length < 2) {
      throw new Error(INVALID_INPUT_ERROR);
    }

    const oldFilePath = resolve(parameters[0]);
    const newFileName = parameters[1];

    const oldFileDir = dirname(oldFilePath);
    const newFilePath = resolve(oldFileDir, newFileName);

    await rename(oldFilePath, newFilePath);
  } catch (error) {
    getError(error);
  }
};

export default rnAction;
