import Account from "./Account";

/**
 * Renders a list of user accounts.
 * @returns {JSX.Element} The UserAccounts component.
 */
export default function UserAccounts() {
    /**
     * Creates an account object with the given parameters.
     * @param {string} accountType - The type of the account.
     * @param {string} accountIdentifier - The identifier of the account.
     * @param {number} accountBalance - The balance of the account.
     * @param {string} [bank="ArgentBank"] - The name of the bank. Defaults to "ArgentBank".
     * @returns {object} An account object with the given parameters.
     */
    function createAccount(
        accountType,
        accountIdentifier,
        accountBalance,
        bank = "ArgentBank"
    ) {
        const title = `${bank} ${accountType} (${accountIdentifier})`;
        const description =
            accountType === "Credit Card"
                ? "Current Balance"
                : "Available Balance";

        return {
            title,
            accountBalance,
            description,
        };
    }

    const userAccounts = [
        createAccount("Checking", "x8349", 2082.79),
        createAccount("Savings", "x67124", 10928.42),
        createAccount("Credit Card", "x5201", 184.3),
    ];

    return (
        <section>
            <h2 className="sr-only">Accounts</h2>

            {userAccounts.map((account, index) => (
                <Account
                    key={`account-${index}`}
                    title={account.title}
                    accountBalance={account.accountBalance}
                    description={account.description}
                />
            ))}
        </section>
    );
}
