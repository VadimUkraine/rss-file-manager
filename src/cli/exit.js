import farewell from '../helpers/farewell.js';

const exitAction = async () => {
  farewell();
  process.exit();
};

export default exitAction;
