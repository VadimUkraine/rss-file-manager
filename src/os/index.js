import { EOL, cpus, userInfo } from 'os';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

const EOL_ACTION = '--EOL';
const CPUS_ACTION = '--cpus';
const HOMEDIR_ACTION = '--homedir';
const USERNAME_ACTION = '--username';
const ARCHITECTURE_ACTION = '--architecture';

const getCpusArray = () => ( 
  cpus()
    .map(({ model, speed }) => ({
      model: model,
      speed: `${(speed / 1000)} GHz`,
    }))
);

const actions = {
  [EOL_ACTION]: JSON.stringify(EOL),
  [CPUS_ACTION]: getCpusArray(),  
  [HOMEDIR_ACTION]: userInfo().homedir,
  [USERNAME_ACTION]: userInfo().username,
  [ARCHITECTURE_ACTION]: process.arch,
}

const osActions = async (parameters) => {

  try {
    const subAction = parameters[0];
    const wrongSubAction = !Object.keys(actions).some(action => action === subAction);
    
    if (wrongSubAction) {
      throw new Error(INVALID_INPUT_ERROR);
    }

    const result = actions[subAction];

    if (subAction === CPUS_ACTION) {
      console.log(`Overall amount of CPUS is: ${cpus().length}`);
    }

    console.table(result);
  } catch (error) {
    getError(error);
  }
};

export default osActions;
