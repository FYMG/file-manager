import messages from '../untils/messages.js';

export default class CommandRouter {
  constructor(currentDir) {
    this.currentDir = currentDir;
  }

  async execute(command, args) {
    switch (command) {
      case 'up': {
        console.log('up', args, this.currentDir);
        break;
      }
      default:
        console.log(messages.invalidMessage);
        break;
    }
  }
}
