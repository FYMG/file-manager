import path from 'path';
import fs from 'fs/promises';
import messages from '../../../untils/messages.js';

const up = async (currDir) => {
  const absolutePath = path.resolve(currDir);
  const parentDir = path.dirname(absolutePath);

  if (parentDir === absolutePath) return currDir;

  try {
    const stats = await fs.stat(parentDir);
    if (stats.isDirectory()) {
      return parentDir;
    }
  } catch {
    console.log(messages.operationFailed);
  }
  return currDir;
};

export default up;
