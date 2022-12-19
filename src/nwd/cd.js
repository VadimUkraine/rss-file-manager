import { chdir } from 'process';
import { resolve } from 'path';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

export const cdAction = async (parameters) => {
  
  try {
    if (parameters.length < 1) {
      throw new Error(INVALID_INPUT_ERROR);
    }

    const dirPath = parameters[0];
    
    chdir(resolve(dirPath));
  } catch (error) {
    getError(error);    
  }
};

export default cdAction;
