import Account from "./Account";

export default function UserAccounts() {
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
