import messages from '../untils/constants/messages.js';
import up from './modules/nwd/up.js';
import cd from './modules/nwd/cd.js';
import commands from '../untils/constants/commands.js';
import ls from './modules/nwd/ls.js';
import cat from './modules/fs/cat.js';
import add from './modules/fs/add.js';
import rn from './modules/fs/rn.js';
import cp from './modules/fs/cp.js';
import mv from './modules/fs/mv.js';
import rm from './modules/fs/rm.js';

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

      case commands.rm: {
        if (args[0]) await rm(this.currentDir, args[0]);
        else console.log(messages.invalidArg);
        break;
      }

      default:
        console.log(messages.invalidMessage);
        break;
    }
  }
}
