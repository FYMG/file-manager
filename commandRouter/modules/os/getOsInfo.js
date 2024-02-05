import messages from '../../../untils/constants/messages.js';
import getEOL from './modules/getEOL.js';
import getCPUS from './modules/getCPUS.js';
import getHomeDir from './modules/getHomeDir.js';
import getUsername from './modules/getUsername.js';
import getArchitecture from './modules/getArchitecture.js';
import params from '../../../untils/constants/params.js';

const getOsInfo = (command) => {
  try {
    switch (command.toLowerCase()) {
      case params.eol:
        getEOL();
        break;
      case params.cpus:
        getCPUS();
        break;
      case params.homedir:
        getHomeDir();
        break;
      case params.username:
        getUsername();
        break;
      case params.architecture:
        getArchitecture();
        break;
      default:
        console.log(messages.invalidOsArg);
    }
  } catch {
    console.log(messages.operationFailed);
  }
};

export default getOsInfo;
