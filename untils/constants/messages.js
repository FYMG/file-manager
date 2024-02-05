import getArchitecture from '../../commandRouter/modules/os/modules/getArchitecture.js';

const messages = {
  lsDirTypeName: 'Directory',
  lsFileTypeName: 'File',
  operationFailed: 'Operation failed',
  successRename: 'The file was successfully renamed',
  missingParams: 'Command should be run with parameters',
  infoEOL: (EOL) => `End of line: ${EOL}`,
  infoArchitecture: (architecture) => `Architecture: ${architecture}`,
  infoHomeDir: (homeDir) => `Home directory: ${homeDir}`,
  infoUserName: (userName) => `Current user name: ${userName}`,
  successCopy: (from, to) =>
    `The file was successfully copied from ${from} to ${to}`,
  successMove: (from, to) => `File moved successfully from ${from} to ${to}`,
  successDelete: (fileName) => `File deleted successfully: ${fileName}`,
  invalidMessage:
    'Invalid input. Please check the correctness of the entered command!',
  invalidArg: 'Invalid input. Required arguments missing!',
  invalidOsArg: 'Invalid input. The argument is incorrect!',
  fileCreated: (name) => `File ${name} successfully created`,
  dirInfo: (path) => `You are currently in ${path}`,
  welcome: (userName) => `Welcome to the File Manager, ${userName}!`,
  goodBye: (userName) =>
    `Thank you for using File Manager, ${userName}, goodbye!`,
};

export default messages;
