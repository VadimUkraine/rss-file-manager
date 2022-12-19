import { cwd } from 'process';
import { EOL } from 'os';

const printCurrentDirectory = () => {
  console.log(`${EOL}You are currently in ${cwd()}`);
};

export default printCurrentDirectory;
