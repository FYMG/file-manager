import os from 'os';
import messages from '../../../../untils/constants/messages.js';

const getArchitecture = () => {
  console.log(messages.infoArchitecture(os.arch()));
};

export default getArchitecture;
