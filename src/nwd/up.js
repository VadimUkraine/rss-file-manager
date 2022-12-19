import { chdir } from 'process';
import getError from '../helpers/errorsHandler.js';

export const upAction = async () => {
  
  try {
    chdir('..');
  } catch (error) {
    getError(error);
  }
};

export default upAction;
