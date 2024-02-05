import messages from '../untils/messages.js';
import up from './commands/nwd/up.js';
import cd from './commands/nwd/cd.js';
import commands from '../untils/commands.js';
import ls from './commands/nwd/ls.js';
import cat from './commands/fs/cat.js';

export default class CommandRouter {
  constructor(currentDir) {
    this.currentDir = currentDir;
  }

  async execute(command, args) {
    switch (command) {
      case commands.up: {
        this.currentDir = await up(this.currentDir);
        break;
      }

      case commands.cd: {
        if (args[0]) this.currentDir = await cd(this.currentDir, args[0]);
        else console.log(messages.invalidArg);
        break;
      }

      case commands.ls: {
        await ls(this.currentDir);
        break;
      }

      case commands.cat: {
        if (args[0]) await cat(this.currentDir, args[0]);
        else console.log(messages.invalidArg);
        break;
      }

      default:
        console.log(messages.invalidMessage);
        break;
    }
  }
}
