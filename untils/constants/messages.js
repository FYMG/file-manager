const messages = {
  lsDirTypeName: 'Directory',
  lsFileTypeName: 'File',
  operationFailed: 'Operation failed',
  successRename: 'The file was successfully renamed',
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
