export class Account {
  readonly ledgers: number[];

  constructor(ledgers: number[] = []) {
    this.ledgers = ledgers;
  }

  increaseBalance(amount: number) {
    this.ledgers.push(amount);
  }

  decreaseBalance(amount: number) {
    this.ledgers.push(-amount);
  }

  get balance() {
    return this.ledgers.reduce((prev, curr) => prev + curr);
  }

  toString() {
    return '[' + this.ledgers + '] ⟹ ' + this.balance;
  }
}
