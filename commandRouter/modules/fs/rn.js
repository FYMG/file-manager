import path from 'path';
import fs from 'fs/promises';
import messages from '../../../untils/constants/messages.js';
import doesFileExist from '../../../untils/helpers/doesFileExist.js';

const rn = async (currentDir, pathToFile, fileName) => {
  const filePath = path.resolve(currentDir, pathToFile);
  const newFilePath = path.resolve(path.dirname(filePath), fileName);

  const fileExist = await doesFileExist(filePath);
  const newFileExist = await doesFileExist(newFilePath);

  if (!fileExist || newFileExist) {
    console.log(messages.operationFailed);
    return;
  }

  try {
    await fs.rename(filePath, newFilePath);
    console.log(messages.successRename);
  } catch {
    console.log(messages.operationFailed);
  }
};

export default rn;
