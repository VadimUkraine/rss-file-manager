import * as readline from 'readline/promises';
import { stdin as input, stdout as output, chdir } from 'process';
import greetings from './helpers/greetings.js';
import farewell from './helpers/farewell.js';
import printCommandMessage from './helpers/printCommandMessage.js';
import printCurrentDirectory from './helpers/printCurrentDirectory.js';
import { homedir } from 'os';
import commandHandler from './helpers/commandHandler.js';

const rl = readline.createInterface({ input, output });

const start = () => {
  greetings();
  chdir(homedir());
  printCurrentDirectory();
  printCommandMessage();

  rl.on('line', async (input) => {
    await commandHandler(input);
  });
 
  rl.on('SIGINT', () => {
    farewell();
    process.exit(0);
  });
};

start();
