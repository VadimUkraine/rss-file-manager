import { readdir } from 'fs/promises';
import { cwd } from 'process';
import getError from '../helpers/errorsHandler.js';

const normalizeFileObject = file => {
  return {
      name: file.name,
      type: file.isFile() ? 'file' : 'directory',
  }
};

const sortFiles = (file1, file2) => {
  const fileKey = (file1.type === file2.type) ? 'name' : 'type';

  return file1[fileKey].localeCompare(file2[fileKey]);
};

export const lsAction = async () => {
 
  try {
    const files = await readdir(cwd(), { withFileTypes: true });
    const result = files
      .map(file => normalizeFileObject(file))
      .sort(sortFiles);
    const folderContent = result.length > 0 ? result : "No resources";    

    console.table(folderContent);    
  } catch (error) {
    getError(error);
  }
};

export default lsAction;
