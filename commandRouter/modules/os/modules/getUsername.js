import { userInfo } from 'os';
import messages from '../../../../untils/constants/messages.js';

const getUsername = () => {
  console.log(messages.infoUserName(userInfo().username));
};

export default getUsername;
