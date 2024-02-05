import messages from '../untils/messages.js';
import up from './commands/up.js';

export default class CommandRouter {
  constructor(currentDir) {
    this.currentDir = currentDir;
  }

  async execute(command, args) {
    switch (command) {
      case 'up': {
        this.currentDir = await up(this.currentDir);
        break;
      }
      default:
        console.log(messages.invalidMessage);
        break;
    }
  }
}
