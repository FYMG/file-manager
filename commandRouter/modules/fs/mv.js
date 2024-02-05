import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream';
import messages from '../../../untils/constants/messages.js';
import doesFileExist from '../../../untils/helpers/doesFileExist.js';

const mv = async (currentDir, pathToFile, pathToMove) => {
  const filePath = path.resolve(currentDir, pathToFile);
  const fileName = path.basename(filePath);
  const movePath = path.resolve(currentDir, pathToMove, fileName);

  const fileExist = await doesFileExist(filePath);
  const newFileExist = await doesFileExist(movePath);

  if (!fileExist || newFileExist) {
    console.log(messages.operationFailed);
    return;
  }

  try {
    const readableStream = fs.createReadStream(filePath, 'utf-8');
    const writableStream = fs.createWriteStream(movePath);

    await new Promise((res, rej) => {
      pipeline(readableStream, writableStream, async (err) => {
        if (err) {
          rej(new Error());
          return;
        }
        await fs.promises.unlink(filePath);
        console.log(messages.successMove(filePath, movePath));
        res();
      });
    });
  } catch {
    console.log(messages.operationFailed);
  }
};

export default mv;
