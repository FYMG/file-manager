import os from 'os';
import readline from 'readline';
import messages from './untils/messages.js';
import CommandRouter from './commandRouter/index.js';
import commands from './untils/commands.js';

const userArg = process.argv.filter(
  (arg) => arg.startsWith('--') && arg.includes('username')
);

const userName = userArg.length ? userArg[0].split('=')[1] : 'Unknown user';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const exit = () => {
  console.log(messages.goodBye(userName));
  rl.close();
  process.exit();
};
const runFileManager = async () => {
  const cm = new CommandRouter(os.homedir());
  console.log(messages.welcome(userName));
  console.log(messages.dirInfo(os.homedir()));

  rl.on('SIGINT', exit);

  rl.on('line', (input) => {
    console.log('\x1Bc');
    if (input === commands.exit) {
      exit();
    } else {
      const [userCommand, ...userArgs] = input.split(' ');
      cm.execute(userCommand, userArgs).then(() => {
        console.log(messages.dirInfo(cm.currentDir));
      });
    }
  });
};

runFileManager();
