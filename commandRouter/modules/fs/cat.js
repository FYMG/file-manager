import fs from 'fs';
import path from 'path';
import messages from '../../../untils/constants/messages.js';

const cat = async (currentDir, pathFoFile) => {
  try {
    await new Promise((res, rej) => {
      fs.createReadStream(path.resolve(currentDir, pathFoFile), 'utf-8')
        .on('data', (chunk) => console.log(chunk.toString()))
        .on('end', () => res())
        .on('error', (err) => rej(err));
    });
  } catch {
    console.log(messages.operationFailed);
  }
};

export default cat;
