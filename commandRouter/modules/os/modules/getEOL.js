import { EOL } from 'os';
import messages from '../../../../untils/constants/messages.js';

const getEOL = () => {
  console.log(messages.infoEOL(JSON.stringify(EOL)));
};

export default getEOL;
