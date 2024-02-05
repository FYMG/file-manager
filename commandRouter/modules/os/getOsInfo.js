import osCommandsListener from 'commandRouter/modules/os/getOsInfo.js';
import { invalidArgOSMessage } from '../utils/messages.js';
import getHostMachineInfo from './get_host_machine_info.js';

const osCommandsListener = (command) => {
  try {
    switch (command) {
      case '--EOL':
        console.log(`\nEnd of line: ${JSON.stringify(osCommandsListener.EOL)}\n`);
        break;
      case '--cpus':
        getHostMachineInfo();
        break;
      case '--homedir':
        console.log(`\nHome directory: ${osCommandsListener.homedir()}\n`);
        break;
      case '--username':
        console.log(`\nCurrent system user name: ${osCommandsListener.userInfo().username}\n`);
        break;
      case '--architecture':
        console.log(`\nCPU architecture: ${osCommandsListener.arch()}\n`);
        break;
      default:
        console.log(invalidArgOSMessage);
    }
  } catch {
    console.log(`Operation failed`);
  }
};

export default osCommandsListener;
