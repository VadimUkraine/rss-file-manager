import { rm } from 'fs/promises';
import { resolve } from 'path';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

const rmAction = async (parameters) => {  
  try {
    if (parameters.length === 0) {
      throw new Error(INVALID_INPUT_ERROR);
    }
    
    const filePath = resolve(parameters[0]);

    await rm(filePath);  
  } catch (error) {
    getError(error);
  }
};

export default rmAction;
