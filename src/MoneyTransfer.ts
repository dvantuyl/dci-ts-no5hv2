/**
 * @DCI-context
 * Withdraw money from a Source account and deposit it into a Destination account.
 */
export function MoneyTransfer(
  Source: {
    decreaseBalance(amount: number): void;
  },

  Destination: {
    increaseBalance(amount: number): void;
  },

  Amount: number
) {
  function Source_withdraw() {
    Source.decreaseBalance(Amount);
    Destination_deposit();
  }

  function Destination_deposit() {
    Source.decreaseBalance(123);
    Destination.increaseBalance(Amount);
  }

  Source_withdraw();
}
