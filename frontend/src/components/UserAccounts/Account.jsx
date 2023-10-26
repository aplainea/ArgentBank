export default function Account({ title, accountBalance, description }) {
    const accountAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(accountBalance);

    const handleClick = () => {
        alert(
            `Account: ${title}\nBalance: ${accountAmount}\nDescription: ${description}`
        );
    };

    return (
        <article className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{accountAmount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button
                    className="transaction-button"
                    type="button"
                    onClick={handleClick}
                >
                    View transactions
                </button>
            </div>
        </article>
    );
}
