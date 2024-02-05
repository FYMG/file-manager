import path from 'path';
import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import messages from '../../../untils/constants/messages.js';
import doesFileExist from '../../../untils/helpers/doesFileExist.js';

const compress = async (currentDir, pathToFile, pathToCompressFile) => {
  const filePath = path.resolve(currentDir, pathToFile);
  const fileName = path.basename(filePath);
  const CompressFilePath = path.resolve(
    currentDir,
    pathToCompressFile,
    `${fileName}.br`
  );

  const fileExist = await doesFileExist(filePath);
  const newFileExist = await doesFileExist(CompressFilePath);

  if (!fileExist || newFileExist) {
    console.log(messages.operationFailed);
    return;
  }

  try {
    const readableStream = fs.createReadStream(filePath, 'utf-8');
    const writableStream = fs.createWriteStream(CompressFilePath);
    await pipeline(readableStream, zlib.createBrotliCompress(), writableStream);

    console.log(messages.successCompress(CompressFilePath));
  } catch (err) {
    console.log(messages.operationFailed);
  }
};

export default compress;
