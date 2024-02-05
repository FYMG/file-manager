import fs from 'fs';
import path from 'path';
import messages from '../../../untils/constants/messages.js';
import doesFileExist from '../../../untils/helpers/doesFileExist.js';

const createNewFile = async (currDir, fileName) => {
  try {
    const absolutePath = path.resolve(currDir);
    const filePath = path.join(absolutePath, fileName);
    const fileExist = await doesFileExist(filePath);

    await new Promise((res, rej) => {
      if (fileExist) {
        rej(messages.operationFailed);
        return;
      }

      fs.createWriteStream(filePath)
        .end()
        .on('finish', () => {
          console.log(messages.fileCreated(fileName));
          res();
        })
        .on('error', (err) => {
          rej(err);
        });
    });
  } catch {
    console.log(messages.operationFailed);
  }
};

export default createNewFile;
