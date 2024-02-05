import os from 'os';
import messages from '../../../../untils/constants/messages.js';

const getHomeDir = () => {
  console.log(messages.infoHomeDir(os.homedir()));
};

export default getHomeDir;
