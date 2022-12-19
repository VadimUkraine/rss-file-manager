
import commands from './commands.js';
import printCurrentDirectory from './printCurrentDirectory.js';
import printCommandMessage from './printCommandMessage.js';
import getError, { INVALID_INPUT_ERROR } from './errorsHandler.js';

const parseArguments = commandArguments => {
  const paramsWithQuotes = commandArguments.some(item => item.includes('"'));

  if (paramsWithQuotes) {
    const params = commandArguments
      .join(' ')
      .split('"')
      .filter(item => item.length > 2);

    return params;
  }

  return commandArguments;   
};

const commandHandler = async (input) => {
  try {
    const commandArguments = input.toString().trim().split(' ');  
    const commandName = commandArguments.shift(); 
    const wrongCommand = !Object.keys(commands).some(action => action === commandName);
    
    if (wrongCommand) {
      throw new Error(INVALID_INPUT_ERROR);
    }
   
    const parameters = parseArguments(commandArguments);  

    await commands[commandName](parameters);
  } catch (error) {
    getError(error);
  }
 
  printCurrentDirectory();
  printCommandMessage();
};

export default commandHandler;
