import path from 'path';
import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import messages from '../../../untils/constants/messages.js';
import doesFileExist from '../../../untils/helpers/doesFileExist.js';

const decompress = async (currentDir, pathToFile, pathToDecompressFile) => {
  const filePath = path.resolve(currentDir, pathToFile);
  const fileName = path.basename(filePath, path.extname(filePath));
  const decompressFilePath = path.resolve(
    currentDir,
    pathToDecompressFile,
    `${fileName}`
  );

  const fileExist = await doesFileExist(filePath);
  const newFileExist = await doesFileExist(decompressFilePath);

  if (!fileExist || newFileExist) {
    console.log(messages.operationFailed);
    return;
  }

  try {
    const readableStream = fs.createReadStream(filePath);
    const writableStream = fs.createWriteStream(decompressFilePath);
    await pipeline(
      readableStream,
      zlib.createBrotliDecompress(),
      writableStream
    );

    console.log(messages.successDecompress(decompressFilePath));
  } catch (err) {
    console.log(messages.operationFailed);
  }
};

export default decompress;
