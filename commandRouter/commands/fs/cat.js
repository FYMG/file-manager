import fs from 'fs';
import path from 'path';
import messages from '../../../untils/messages.js';

const cat = async (currentDir, pathFoFile) => {
  try {
    await new Promise((res, rej) => {
      const stream = fs.createReadStream(
        path.resolve(currentDir, pathFoFile),
        'utf-8'
      );

      stream.on('data', (chunk) => {
        console.log(chunk.toString());
      });

      stream.on('end', () => {
        res();
      });

      stream.on('error', (err) => {
        rej(err);
      });
    });
  } catch {
    console.log(messages.operationFailed);
  }
};

export default cat;
