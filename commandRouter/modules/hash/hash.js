import path from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';
import messages from '../../../untils/constants/messages.js';

const hash = async (currentDir, pathToFile) => {
  try {
    const filePath = path.resolve(currentDir, pathToFile);
    const data = await fs.readFile(filePath, 'utf8');
    const hashString = crypto.createHash('sha256').update(data).digest('hex');
    console.log(messages.successHash(filePath, hashString));
  } catch (err) {
    console.log(messages.operationFailed);
  }
};

export default hash;
