import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream';
import messages from '../../../untils/constants/messages.js';
import doesFileExist from '../../../untils/helpers/doesFileExist.js';

const cp = async (currentDir, pathToFile, pathToCopy) => {
  const filePath = path.resolve(currentDir, pathToFile);
  const fileName = path.basename(filePath);
  const copyPath = path.resolve(currentDir, pathToCopy, fileName);

  const fileExist = await doesFileExist(filePath);
  const newFileExist = await doesFileExist(copyPath);

  if (!fileExist || newFileExist) {
    console.log(messages.operationFailed);
    return;
  }

  try {
    const readableStream = fs.createReadStream(filePath, 'utf-8');
    const writableStream = fs.createWriteStream(copyPath);

    await new Promise((res, rej) => {
      pipeline(readableStream, writableStream, (err) => {
        if (err) {
          rej(new Error());
          return;
        }
        console.log(messages.successCopy(filePath, copyPath));
        res();
      });
    });
  } catch {
    console.log(messages.operationFailed);
  }
};

export default cp;
