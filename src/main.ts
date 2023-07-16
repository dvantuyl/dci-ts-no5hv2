// Import stylesheets
import './style.css';
import { Account } from './Account';
import { MoneyTransfer } from './MoneyTransfer';
import { HelloWorld } from './HelloWorld';

const appDiv: HTMLElement | null = document.getElementById('app');
if (!appDiv) throw new Error('#app not found in HTML');

const log = (msg: unknown) => (appDiv.innerHTML += `<p>${msg || '&nbsp;'}</p>`);

//////////////////////////////////////////////////

// Hello world example

const you = { phrase: 'Hello, world!' };
const world = { log };

HelloWorld(you, world);

//////////////////////////////////////////////////

// Money transfer example

log('');
log('💵 Money transfer example 💵');

const a = new Account([1000]);
const b = new Account([200]);

const amount = 300;

const showBalance = () => {
  log(`Account A: ${a}`);
  log(`Account B: ${b}`);
};

showBalance();

log('💸 Transfer 1');
MoneyTransfer(a, b, amount);
showBalance();

log('💸 Transfer 2');
MoneyTransfer(a, b, amount);
showBalance();

log('💸 Transfer 3');
MoneyTransfer(a, b, amount);
showBalance();
