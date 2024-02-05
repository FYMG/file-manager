import fs from 'fs/promises';
import path from 'path';
import messages from '../../../untils/constants/messages.js';

const ls = async (currDir) => {
  try {
    const dirContent = await fs.readdir(currDir);
    const promises = [];
    const files = [];
    const dirs = [];
    const tableData = [];

    dirContent.forEach((item) => {
      promises.push(
        fs.stat(path.join(currDir, item)).then((stats) => {
          if (stats.isDirectory()) {
            dirs.push(item);
          } else {
            files.push(item);
          }
        })
      );
    });

    await Promise.all(promises);

    dirs
      .sort()
      .forEach((dir) =>
        tableData.push({ Name: dir, Type: messages.lsDirTypeName })
      );
    files
      .sort()
      .forEach((file) =>
        tableData.push({ Name: file, Type: messages.lsFileTypeName })
      );

    console.table(tableData);
  } catch {
    console.log(messages.operationFailed);
  }
};

export default ls;
