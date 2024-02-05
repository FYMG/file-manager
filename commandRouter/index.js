import messages from '../untils/constants/messages.js';
import up from './commands/nwd/up.js';
import cd from './commands/nwd/cd.js';
import commands from '../untils/constants/commands.js';
import ls from './commands/nwd/ls.js';
import cat from './commands/fs/cat.js';
import add from './commands/fs/add.js';
import rn from './commands/fs/rn.js';
import cp from './commands/fs/cp.js';
import mv from './commands/fs/mv.js';

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

      case commands.add: {
        if (args[0]) await add(this.currentDir, args[0]);
        else console.log(messages.invalidArg);
        break;
      }

      case commands.rn: {
        if (args[0] && args[1]) await rn(this.currentDir, args[0], args[1]);
        else console.log(messages.invalidArg);
        break;
      }

      case commands.cp: {
        if (args[0] && args[1]) await cp(this.currentDir, args[0], args[1]);
        else console.log(messages.invalidArg);
        break;
      }

      case commands.mv: {
        if (args[0] && args[1]) await mv(this.currentDir, args[0], args[1]);
        else console.log(messages.invalidArg);
        break;
      }

      default:
        console.log(messages.invalidMessage);
        break;
    }
  }
}
