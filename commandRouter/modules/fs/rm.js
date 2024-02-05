import path from 'path';
import fs from 'fs/promises';
import messages from '../../../untils/constants/messages.js';

const rm = async (currentDir, pathToFile) => {
  try {
    const filePath = path.resolve(currentDir, pathToFile);
    const fileName = path.basename(filePath);
    await fs.unlink(filePath);
    console.log(messages.successDelete(fileName));
  } catch {
    console.log(messages.operationFailed);
  }
};

export default rm;
